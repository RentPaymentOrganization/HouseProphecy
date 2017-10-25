<template>
   <div class="checkboxes-list">
      <slot name="checkboxes-list"></slot>
      <div class="subgroup-element">
         <a href="javascript:void(0)" @click.prevent="selectAll" class="subgroup-input-checkbox-select-all link">{{!checkedAll?'Select all':'Deselect all'}}</a>
      </div>
   </div>
</template>

<script>
   export default {
      data() {
         return {
            checkedAll: false
         }
      },
      methods:{
         selectAll:function(event){
            let parent=event.target.closest('.checkboxes-list');
            let inputs = parent.querySelectorAll('input');
            inputs.forEach(
               (item) =>   {
                  if(this.checkedAll){
                     item.checked=false;  
                  }
                  else{
                     item.checked=true;          
                  }
            })
            this.checkedAll=!this.checkedAll;
         }
      }
   }
</script>

<style scoped>

</style>