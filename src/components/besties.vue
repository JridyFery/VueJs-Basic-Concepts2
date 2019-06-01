<
<template>
    <div id="bestie">
        <ul>
            <li v-for="b in bestie" @click="b.show=!b.show"></li>
            <h2>{{b.name}} </h2>
            <h3 v-show="b.show">{{b.speciality}} </h3>
        </ul>
    </div>
</template>

<script>
export default {
    data(){
        bestie[
            {name:'Rose',speciality:'Mathemathician',show:false},
            {name:'Wiwi',speciality:'Economist',show:false},
            {name:'Ed',speciality:'Developer',show:false},
            {name:'Fery',speciality:'Data Scientist',show:false},
            {name:'jane',speciality:'Doctor',show:false},
            {name:'kylie',speciality:'Architect',show:false}
        ]
    }

}
</script>

<style scoped>

ul{
display:flex;
flex-wrap:wrap;
list-style-type:none;
padding: 0;
}
#bestie{
    width:100%;
    max-width:1200px;
    margin: 40px auto ;
    padding: 0 20 px;
    box-sizing:border-box;
}
li{
    flex-grow: 1;
    flex-basis:300px;
    text-align:center;
    padding:30px;
    border:1px solid #222; 
}


</style>
