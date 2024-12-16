# Use the official Node.js image as the base image
FROM node:14

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install project dependencies
RUN npm install

# Install TypeScript globally
RUN npm install -g typescript

# Copy the rest of the project files to the working directory
COPY . .

# Build the TypeScript files
RUN npm run build

# Expose the port the app runs on
EXPOSE 8080

# Command to run the app in development mode
CMD ["npm", "run", "dev"]