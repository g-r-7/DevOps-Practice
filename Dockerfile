
FROM node:20.17.0-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

# Copy the rest of the source files into the image.
COPY . .

# Expose the port that the application listens on.
EXPOSE 8887

# Run the application.
CMD npm start