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

# Increase the memory limit for Node.js to prevent build failures
ENV NODE_OPTIONS=--max_old_space_size=2048

# Build the app for production
RUN npm run build

# Unset the NODE_OPTIONS environment variable after the build
# This is optional, only do this if you're facing issues running `serve`
# ENV NODE_OPTIONS=

# Install `serve` to run the application
RUN npm install -g serve

# The app binds to port 3000, so use the EXPOSE instruction to have it mapped by the docker daemon
EXPOSE 3000

# Define the command to run the app using `serve`
CMD ["serve", "-s", "build"]