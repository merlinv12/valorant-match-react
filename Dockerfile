  
FROM node:12
WORKDIR /MatchSummary
COPY package*.json ./
RUN npm install
COPY . ./
EXPOSE 3333
RUN npm run build:prod
CMD ["node", "./server/server.js"]