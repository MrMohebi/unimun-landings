FROM reg.unimun.me/unimun/unimun-landings-npm-prod:latest

WORKDIR /app

RUN npm run build

# Running the app
CMD [ "npm", "run", "start" ]
