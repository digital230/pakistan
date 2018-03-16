FROM node:latest

# set working directory
RUN mkdir /usr/src/client
WORKDIR /usr/src/client

# add `/usr/src/client/node_modules/.bin` to $PATH
ENV PATH /usr/src/client/node_modules/.bin:$PATH

# install and cache app dependencies
ADD package.json /usr/src/client/package.json
RUN npm install
RUN npm install react-scripts@latest -g

EXPOSE 3000

# start app
CMD ["npm", "start"]
