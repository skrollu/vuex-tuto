# VueX-tuto

This project is inspired by the vuex counter tutorial: https://www.youtube.com/watch?v=nFh7-HfODYY&t=705s
and vuex todos: https://www.youtube.com/watch?v=5lVQgZzLMHc&t=794s
and Slider component: https://www.youtube.com/watch?v=YAhCVgKcis4

With those I discovered VueX version 3.

# Launch the project

## With Dockerfile

At the root of the project: 

    docker build . -t vuex_tuto

then: 

    docker run -p 8080:8080 vuex_tuto:1.0.0

Find the projet on: http://localhost:8080.

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
