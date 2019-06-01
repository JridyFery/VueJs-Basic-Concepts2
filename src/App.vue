 <template>
  <div>
    <h1>{{msg}} </h1>
    <Globalcomponent></Globalcomponent>
  </div>
</template>

<script>
export default {
  name: 'app',
  data(){
    return {
      msg: 'My first global component'
    }
  }
}
</script> 
