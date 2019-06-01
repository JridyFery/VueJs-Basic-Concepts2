<
<template>
  <div>
      <ul>
          <li v-for="bestie in besties"> {{bestie}} </li>
      </ul>
  </div>
</template>

<script>
export default {
  data(){
    return{
    besties:['rose','fery','ed']
    }
  }
  }
</script>
<style>
</style>
