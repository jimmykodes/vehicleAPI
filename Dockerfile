FROM python:3.8
WORKDIR /app
ENV PYTHONUNBUFFERED 1
RUN pip install -U pip
COPY requirements.txt .
RUN pip install -r requirements.txt
