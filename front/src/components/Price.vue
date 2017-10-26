<template>
   <div class="price-container">
      Indicative cost of rent: <span class="price-value">${{price}}</span>
   </div>
</template>

<script>
   export default {
      props: ['price'],
   }
</script>

<style scoped>
   .price-container{
      color: #6281c9;
      text-align: right;
      margin-top: -45px;
   }
   .price-value{
      font-size: 20px;
   }
</style>