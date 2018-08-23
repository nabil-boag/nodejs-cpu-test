FROM node

# Create app directory
WORKDIR /usr/src/app

# Bundle app source
COPY ./application .

RUN npm install --only=production

EXPOSE 80
CMD [ "npm", "start" ]

