<!-- <template>
  <div>
    <h1>{{msg}} </h1>
    <Globalcomponent></Globalcomponent>
  </div>
</template>

<script>
import besties from './Besties.vue'
export default {
  components:{
    'Globalcomponent': besties
  },
  data(){
    return {
      msg: 'My first global component'
    }
  }
}
</script> 
<style scoped >
h1{
  color:red;
}  
</style>
 !-->
<template>
<div>
  <app-header></app-header>
  <app-bestie></app-bestie>
  <app-footer></app-footer>
</div>
</template>

<script>
import Header from './components/header.vue'; 
import footer from './components/footer.vue';
import besties from './components/besties.vue';

export default {
    components:{
      'app-header': Header, 
      'app-bestie': besties,
      'app-footer':footer
  }
}
</script>

<style>

</style>
