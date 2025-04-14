# Base image
FROM node:18

# Set working directory
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy source code
COPY . .

# Expose the dev server port
EXPOSE 5173

# Run the Vite dev server
CMD ["npm", "run", "dev", "--", "--host"]
