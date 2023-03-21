<template>
    <div>
  <h1 @click="created()">lifecycle hooks examples</h1>
    </div>
  </template>
  
  <script>
    export default {
      data() {
        return {
          counter: 0
        }
      },
      beforeCreate () {
        this.counter=1
        console.log("Before Created "+this.counter);
      },
      created () {
        console.log("Created "+this.counter);
      },
      beforeMount () {
        console.log("Before Mounted "+this.counter);
      },
      mounted () {
        console.log("Mounted "+this.counter);
      },
      beforeDestroy () {
        console.log("Before Destroyed "+this.counter);;
      },
      destroyed () {
        console.log("Destroyed "+this.counter);;
      },
    }
  </script>
  
  <style lang="scss" scoped>
  
  </style>