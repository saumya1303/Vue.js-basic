<template>
    <div>
      <button @click="sayHello()" @mouseover="sayHello()">Click me</button>
      <h1>YOU PRESSED BUTTON {{counter}} times</h1>
    </div>
  </template>
  
  <script>
    export default {
      data(){
        return{
          counter: 0
        }
      },
    methods: {
      sayHello() {
        this.counter++
        console.log("Hello from Saumya!!");
      }
    },
    }
  </script>
  
  <style lang="scss" scoped>
  
  </style>