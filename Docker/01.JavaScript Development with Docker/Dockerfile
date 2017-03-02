#Image from Node 6.4 (No Namepspace = Official Image!)
FROM node:6.4 

#Environment variable
ENV NPM_CONFIG_LOGLEVEL warn

#Working Directory for keeping the code
WORKDIR /code/

#Get the exact version without all the unnecessary entries from package.json, f.e. scripts
COPY npm-shrinkwrap.json .

RUN npm install

COPY . .

EXPOSE 8000

CMD ["npm", "start"]