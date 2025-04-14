FROM node:18

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 5001

# Start the server
CMD ["npm", "start"]
