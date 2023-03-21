<template>
  <div class="home">
    <input type="text" v-model ="user">
    <h1>Hello World {{user}}</h1>
  </div>
</template>

<script>

export default{
data(){
  return{
    user:'Saumya'
    }
  },
}
</script>

<style>

</style>