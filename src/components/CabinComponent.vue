<template>
  <div class="elevator">here</div>
</template>

<script>
export default {
  name: "CabinComponent",
  props:{
    floor: Number
  }
}
</script>

<style scoped>
.elevator {
  width: 25px;
  border: 1px dotted green;
  background-color: lightgreen;
  height: 25px;
  float:right;
}
</style>