# FROM node:18

# WORKDIR /app
# COPY package*.json ./
# RUN npm install
# COPY . .

# EXPOSE 5001
# CMD ["node", "server.js"]
FROM node:18

WORKDIR /app

# Copy only package.json first (for caching layers)
COPY package*.json ./

# Install dependencies (Linux build)
RUN npm install

# Copy the rest of the code
COPY . .

EXPOSE 3001

CMD ["node", "server.js"]

