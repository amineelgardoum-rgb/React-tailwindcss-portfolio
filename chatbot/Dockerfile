FROM python:3.9-slim
WORKDIR /app
COPY requirements.txt .
RUN pip install --timeout 100 -r  requirements.txt 
COPY . .
CMD [ "python","-u","app.py" ]