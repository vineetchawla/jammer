FROM node:latest
WORKDIR /usr/app
COPY package.json .
RUN npm install --quiet
COPY . .
ENV MONGODB_URI=mongodb://mongo/jammer
EXPOSE 3000
CMD ["npm", "start"]