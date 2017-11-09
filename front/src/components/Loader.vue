<template>
  <div class="loader-wrapper">
    <div class="loader"></div>
  </div>
</template>
<script>
  export default {}

</script>
<style scoped>
.loader-wrapper {
  position: fixed;
  top: 0;
  left: 0%; 
  z-index: 200;
  background: #000;
   opacity: 0.7; /* Полупрозрачный фон */
   filter: alpha(Opacity=70);
   width: 100%;
   height:100%;
}

.loader {
  width: 15px;
  height: 15px;
  border-radius: 50%;
  position: relative;
  animation: loader-uba7e1836 0.9s ease alternate infinite;
  animation-delay: 0.36s;
  top: 50%;
  margin: -42px auto 0;
}

.loader::after,
.loader::before {
  content: '';
  position: absolute;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  animation: loader-uba7e1836 0.9s ease alternate infinite;
}

.loader::before {
  left: -30px;
  animation-delay: 0.18s;
}

.loader::after {
  right: -30px;
  animation-delay: 0.54s;
}

@keyframes loader-uba7e1836 {
  0% {
    box-shadow: 0 28px 0 -28px #fff;
  }
  100% {
    box-shadow: 0 28px 0 #fff;
  }
}

</style>
