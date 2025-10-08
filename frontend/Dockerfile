FROM node:20-alpine
WORKDIR /app

COPY package*.json ./
RUN npm install 

COPY . .
# Build the production version
RUN npm run build

# Expose port
EXPOSE 5173

# Run the server at runtime
CMD ["npx", "serve", "-s", "dist", "-l", "5173"]
