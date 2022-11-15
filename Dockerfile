# BUILDER STAGE
FROM node:lts-buster-slim as builder

WORKDIR /app

COPY ./package.json ./
COPY ./package-lock.json ./

COPY . .

RUN npm ci

ENV NODE_ENV production

RUN npm run build:app

# DEPLOY STAGE
FROM builder

EXPOSE 4000:4000

COPY --from=builder ./app/dist .

CMD ["npm", "start"]