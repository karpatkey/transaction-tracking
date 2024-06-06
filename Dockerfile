FROM node:20.12-alpine3.19 as base
FROM base as builder

WORKDIR /app

COPY package.json .
COPY yarn.lock .

RUN yarn install

COPY . . 

# Production image
FROM base

WORKDIR /app

# Copy built files from the builder stage for reports app
COPY --from=builder ./app/ ./

# Expose the necessary ports
EXPOSE 3000
EXPOSE 3001

# Start the reports app
CMD ["yarn", "dev"]
