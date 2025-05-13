# Step 1 : we choose a base
FROM node:18

# Step 2 : we set the working directory
WORKDIR /app

# Step 3 : we copy all the files of your project/frontend in the container
COPY . .

# Step 4 : we install the dependencies
RUN npm install

# Step 5 : we expose the server port used by Vite 
EXPOSE 5173

# Step 6 : we start the server (with --host to allow external access)
CMD ["npm", "run", "dev", "--", "--host"]
