<template>
  <form id="main-form">
    <div class="no-margin-top group clearfix">     
        <search-input></search-input>
        <input type="text" name="ZipCode" class="input input-zip" placeholder="ZIP Code">
        <input type="text" name="County" class="input input-county" placeholder="County">
        <input type="text" name="City" class="input input-city" placeholder="City">
        <input type="text" name="Street" class="input input-street" placeholder="Street">
        <input type="text" name="StreetNumber" class="input input-streetnum" placeholder="Street number">
        <slot name="form-others-elements"></slot>
        <slot name="form-links"></slot>
        <div class="form-controls">
            <button class="submit-button button" @click.prevent="getPrice">Get price</button>
            <button class="get-info-button button" @click.prevent="getInfo">Get info</button>
        </div>        
    </div>    
   
  </form>
</template>

<script>
import SearchStateInput from './SearchStateInput';
import serialize from '../utils/serialize';
  export default {
     components:{
        'search-input':SearchStateInput,
      
     },
     methods:{
         getPrice:function(){
            let mainForm = document.getElementById('main-form');
            let serializedMainForm=serialize(mainForm);
            serializedMainForm.Action="getPrice";
            let data = JSON.stringify(serializedMainForm);           
            this.$emit('getPrice');          
         },
         getInfo:function(){
            let mainForm = document.getElementById('main-form');
            let serializedMainForm=serialize(mainForm);
            serializedMainForm.Action="getInfo";
            let data = JSON.stringify(serializedMainForm);
            this.$http.post('http://localhost:57861/HouseProphecy.aspx', data).then(response => {
                this.showInfo=true;
                console.log(response.body);
            }, response => {
                console.log("error");
            });
           
            
         }
     },
     data() {
         return {
             
         }
     },

  }

</script>

<style lang="scss" scoped>
.input-margin-left{
    margin-left: 7px;
}

.input-zip{
    @extend .input-margin-left;
    width: 105px;
}

.input-county{
    @extend .input-margin-left;
    width: 105px;
}

.input-city{
    @extend .input-margin-left;
    width: 125px;
}

.input-street{
    @extend .input-margin-left;
    width: 170px;
}

.input-streetnum{
    @extend .input-margin-left;
    width: 135px;
}

.form-controls{
   margin-top: 30px;   
}

.get-info-button{
   margin-left: 20px;
}

</style>
