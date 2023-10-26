FROM python:3.6-slim

ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1
RUN mkdir /code
RUN mkdir /code/db
WORKDIR /code

# Install MongoDB.
RUN apt-get update && apt-get install -y gnupg
RUN \
  apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 7F0CEB10 && \
  echo 'deb http://downloads-distro.mongodb.org/repo/ubuntu-upstart dist 10gen' > /etc/apt/sources.list.d/mongodb.list && \
  apt-get update && \
  apt-get install -y mongodb-org && \
  rm -rf /var/lib/apt/lists/*

# Define mountable directories.
VOLUME ["/code/db"]

# Define default command.
CMD ["mongod"]

# Expose ports.
EXPOSE 27017
EXPOSE 28017


# Setup django project
RUN pip install --upgrade pip
COPY server/ /code/
RUN pip install -r requirements.txt

#deploy react app
EXPOSE 3000
COPY website/ /code/website
WORKDIR /code/website
RUN npm run build
RUN sudo fuser -k 3000/tcp
RUN screen
RUN npm start


# Running the django server
WORKDIR /code
EXPOSE 8000
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
