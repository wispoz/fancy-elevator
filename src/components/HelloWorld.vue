<template>
  <div class="hello">
    <ElevatorComponent name="s1" :floors="2"/>
    <ElevatorComponent name="s2" :floors="3"/>
  </div>
</template>

<script>
import ElevatorComponent from "@/components/ElevatorComponent";
export default {
  components: {ElevatorComponent}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
