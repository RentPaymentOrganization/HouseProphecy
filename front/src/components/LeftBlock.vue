<template>
   <div class="left-block">
      <a class="logo-link" href="/"></a>     
   </div>
</template>

<script>
   export default {
      data() {
         return {
            
         }
      },
   }
</script>

<style scoped>
.left-block{
  position: fixed;
  width: 300px;
  height: 100vh;
  background-size: cover;
  
}

.logo-link{
  background: url('../assets/img/logo.png') no-repeat;
  width: 139px;
  height: 37px;
  position: absolute;
  z-index: 100;
  top: 50px;
  left: 50%;
  transform: translateX(-50%)
  
}
</style>