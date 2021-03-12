FROM node:15

LABEL description="Docker image Vue js web interface using vuex and vue-router."
LABEL description="Inspired by: https://www.youtube.com/watch?v=nFh7-HfODYY&t=705s"
LABEL description="And: https://www.youtube.com/watch?v=5lVQgZzLMHc&t=794s"

WORKDIR /vue-app
COPY . .
RUN npm install
EXPOSE 8080
CMD ["npm", "run", "serve"]
