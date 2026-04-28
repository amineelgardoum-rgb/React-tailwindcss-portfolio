from langchain_community.document_loaders import TextLoader
from langchain_huggingface import HuggingFaceEmbeddings
from langchain_text_splitters import RecursiveCharacterTextSplitter
from langchain.vectorstores import FAISS
import os
os.environ['TF_CPP_MIN_LOG_LEVEL']='3'
print("load the text document.....")
loader=TextLoader("rag_text_info.txt")
documents=loader.load()
print("Splitting the text to chunks....")
text_splitter=RecursiveCharacterTextSplitter(
    chunk_size=200,
    chunk_overlap=0,
    separators=['\n'],
)
print("Loading the embedding model...")
embedding=HuggingFaceEmbeddings(model_name="all-MiniLM-L6-v2")
chunks=text_splitter.split_documents(documents=documents)
print("Creating and save the FAISS index. this will take some while..")
vectorstore=FAISS.from_documents(chunks,embedding=embedding)
vectorstore.save_local("faiss_index")
print("index created")