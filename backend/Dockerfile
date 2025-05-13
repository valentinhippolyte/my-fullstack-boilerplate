# Step 1 : we choose a base
FROM node:18

# Step 2 : we set the working directory
WORKDIR /app

# Step 3 : we copy all the files of your project/backend in the container
COPY . .

# Step 4 : we install the dependencies
RUN npm install

# Step 5 : we expose the server port
EXPOSE 5000

# Step 6 : we start the server
CMD ["npm", "run", "dev"]

