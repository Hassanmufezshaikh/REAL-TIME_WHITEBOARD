FROM node:16.14.2-alpine

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

EXPOSE 3000

CMD [ "npm", "start" ]


# # Build the React app
# RUN npm run build

# # Step 2: Setup the server
# FROM node:14

# # Set working directory
# WORKDIR /app

# # Copy only the server-side code and the build directory from the previous stage
# COPY --from=build /app/build ./build
# COPY --from=build /app/server ./server
# COPY --from=build /app/package*.json ./

# # Install server dependencies
# RUN npm install --only=production

# # Expose the port the server will run on
# EXPOSE 4000

# # Start the server
# CMD ["node", "server/index.js"]

