FROM node:8-stretch
WORKDIR /home/node/app
COPY . .
RUN npm install \
  && npm run build \
  && chown -R node:node .
EXPOSE 3000
CMD ["node", "backend/bin/www"]
