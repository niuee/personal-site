ARG PORT
FROM node:lts-alpine3.18
WORKDIR /home/node/app
COPY . /home/node/app/
RUN npm install
RUN npm run build
EXPOSE ${PORT}
CMD next start -p ${PORT}