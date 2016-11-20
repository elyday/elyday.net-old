FROM node:latest

RUN npm install express
RUN npm install moment
RUN mkdir -p /opt/node/privatesite
ADD ./node /opt/node/privatesite

CMD node /opt/node/privatesite/app.js