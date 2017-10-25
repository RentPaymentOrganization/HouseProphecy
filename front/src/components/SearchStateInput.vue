<template>
  <span>
    <input @keyup="searchState"      
            v-model="searchStateValue"
            type="text"
            class="input state-input"
            name="State"
            placeholder="State"
            autocomplete="off">
    <span class="state-input-window" v-bind:class="{active:listActive}">
       <ul class="state-input-window-list">
          <li v-for="state in filteredStates" class="state-input-window-list-li" @click="chooseState">{{state}}</li>
      </ul>
    </span>
  </span>
</template>

<script>
   let states=  ['Alabama', 'Alaska', 'Arizona', 'California', 'Colorado', 'Connecticut', 'Delaware',
          'District Of Columbia', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana',
          'Iowa', 'Kansas','Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota',
          'Mississippi', 'Missouri', 'Montana', 'Nebraska',
          'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota',
          'Ohio,Oklahoma', 'Oregon,Pennsylvania',
          'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia',
          'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
        ];
  export default {
    data() {
      return {       
        filteredStates:states,
        searchStateValue:'',
        listActive:false
      }
    },
    methods:{
       searchState: function (event) {   
         this.listActive=true;       
         let res = states.filter(
            (item) => {
               let newItem = item.toLowerCase();
               if (newItem.indexOf(this.searchStateValue.toLowerCase()) + 1) {
                  return item;
               }
            });             
            
            this.filteredStates=res;    
            
            if(this.searchStateValue.length<=0 || res.length<=0){
               this.listActive=false;  
            }       
       },

       chooseState:function(event){
          this.searchStateValue=event.target.innerText;    
          this.listActive=false;    
       }
     
    }
  }

</script>

<style scoped>
.state-input{
    width: 145px;
}

.subgroup-state {
    position: relative;
}

.state-input-window {
    display: none;
}

.state-input-window.active {
    display: block;
    position: absolute;
    background: #fff;
    border: 1px solid #cccccc;
    width: 165px;
    z-index: 10;
}

.state-input-window-list {
    list-style: none;
    margin: 10px;
    padding: 0;
}

.state-input-window-list-li {
    cursor: pointer;
    margin-top: 5px;
}

</style>
