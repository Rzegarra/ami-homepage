FROM node

EXPOSE 3000

# RUN git clone https://github.com/Rzegarra/homeAm.git && cd homeAm && npm install

WORKDIR /app

ADD package.json /app/
RUN npm install
ADD . /app

CMD ["node", "server"]