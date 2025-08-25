from fastapi import FastAPI, HTTPException
from langchain_community.vectorstores import FAISS
from langchain_huggingface import HuggingFaceEmbeddings
from langchain.prompts import ChatPromptTemplate,MessagesPlaceholder
from langchain.schema.runnable.history import RunnableWithMessageHistory
from langchain_google_genai import GoogleGenerativeAI
from operator import itemgetter
from langchain_community.chat_message_histories import ChatMessageHistory
from langchain.schema.output_parser import StrOutputParser
from fastapi.middleware.cors import CORSMiddleware
import uvicorn
app=FastAPI(title="RAG API")
origins=[
    "https://portfolio-s-amine.netlify.app/",
    "http://localhost:5173/",
    "http://localhost:3000",
]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_methods=["*"],
    allow_headers=["*"],
)
print("Loading the embedding model...")
embedding=HuggingFaceEmbeddings(model_name="all-MiniLM-L6-v2")
print("Loading FAISS index from disk....")
vectorstores=FAISS.load_local("faiss_index",embeddings=embedding,allow_dangerous_deserialization=True)

# --- The retrieval chain --- #
print("Creating retriever...")
retriever = vectorstores.as_retriever(search_type="similarity", search_kwargs={"k": 20})
# --- template --- #
template = """
Answer the question based ONLY on the following context.
If the context does not contain the answer, say " I dont have that info"
Context:{Context}
Question:{question}
"""
# -- define the prompt for answer the query of the user
prompt = ChatPromptTemplate.from_messages(
    [
        ("system",template),
        MessagesPlaceholder(variable_name="chat_history"),
        ("human","{question}")
    ]
)


llm = GoogleGenerativeAI(model="gemini-2.5-flash",temperature=0)

# --build the rag chain
def format_docs(docs):
    return "\n".join(doc.page_content for doc in docs)


print("the full rag chain...")
rag_chain = (
    {
        "Context":itemgetter("question") | retriever |format_docs,
        "question":itemgetter("question"),
        "chat_history":itemgetter("chat_history")
    }
    | prompt
    | llm
    | StrOutputParser()
)
store={}
def define_session(session_id:str)->ChatMessageHistory:
    if session_id not in store:
        store[session_id]=ChatMessageHistory()
    return store[session_id]
        
    
conversation_rag_chain=RunnableWithMessageHistory(
    rag_chain,
    define_session,
    input_messages_key="question",
    history_messages_key="chat_history"
)

@app.get("/")
def success():
    return {"status":"200 OK","message":"the Api is working"}
@app.get("/ask")
async def message(query:str):
    if not query:
        raise HTTPException(status_code=200,detail="there was an error.")
    
    session_id="api_user"
    config={"configurable":{"session_id":session_id}}
    answer=conversation_rag_chain.invoke({"question":query},config=config)
    try:
        return {"answer":str(answer)}
    except Exception as e:
        print("there is an error",e)
    
if __name__=="__main__":
    uvicorn.run("app:app",host="0.0.0.0",port=8000,reload=True)