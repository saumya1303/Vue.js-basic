<template>
    <div class="home">
        <h1>Welcome to Home page</h1>
        <h1>Computed Property: {{random}}</h1>
        <h1>Method Call: {{mrandom()}}</h1>
        <h1>Method Call: {{mrandom()}}</h1>
        <h1>Computed Property: {{random}}</h1>
        <h1>Computed Property: {{random}}</h1>
        <h1>Method Call: {{mrandom()}}</h1>
    </div>
    </template>
    
    <script>
    export default {
        computed:{
          random(){
            return Math.random()
          }
        },
        
        // everytime methods value is changing but computed properies' value is changing
  
        methods: {
          mrandom() {
            return Math.random()
          }
        },
    }
    </script>