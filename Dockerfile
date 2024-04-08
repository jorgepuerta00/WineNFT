# Use an official lightweight Node.js as a parent image
FROM node:16-alpine

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy the package.json files from your project into the container
COPY package*.json ./

# Install any dependencies
RUN npm install

# Copy the rest of your app's source code from your project into the container
COPY . .

# Set environment variable to increase memory limit for Node.js
ENV NODE_OPTIONS="--max-old-space-size=4096"

# Build the app for production
RUN npm run build

# Install `serve` to run the application
RUN npm install -g serve

# The app binds to port 3000, so use the EXPOSE instruction to have it mapped by the docker daemon
EXPOSE 3000

# Define the command to run the app using `serve` with the root context path
CMD ["serve", "-s", "build", "-l", "3000", "-n"]
