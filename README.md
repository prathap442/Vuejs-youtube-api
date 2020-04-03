# video-browser

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




## Components
- What are the Components?
  * Ans: The components are nothing but the reusable pieces of the files that are required for building up the component and can be reused at various places in the application .
  * To Prevent the Repeatancy in writing the code for the sake of reusing the same pieces of the functionality we use the components .

- What is concentrating on the id of the app in the template?
  * Two different ways of mounting the component on the html would be:
  * - First Way:

    > in src/main.js
    ```
      import Vue from 'vue'; 
      import App from "./App.vue";
      new Vue({
        el: "#app",
        render: function(createElement){
          return createElement; 
        }   
      })
    ```
    - Second Way(Alias to First one):
    > in src/main.js
    ```
      import Vue from 'vue'; 
      import App from "./App.vue";
      new Vue({
        render: function(createElement){
          return createElement(App); 
        }   
      }).$mount('#app')    
    ```

   * The above two ways are the ones in which we can mount the components on to the html template .


