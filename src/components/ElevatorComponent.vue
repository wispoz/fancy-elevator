<template>
  <div>
    <h1>{{this.name}}</h1>
    <div class="floor" v-for="floor of this.shaftFloors" :key="floor.id">
      <button :class="{'where-move': this.movements.includes(floor.id)}" @click="goTo(floor.id)"> {{ floor.name }} </button>
      <CabinComponent v-if="this.elevatorFloorNow?.data?.id === floor.id"></CabinComponent>
    </div>
  </div>

</template>

<script>
import Queue from '@/utils/Queue';
import {wait} from "@/utils/Wait";
const floorsQueue = new Queue();

import CabinComponent from "@/components/CabinComponent";
export default {

  name: "ElevatorComponent",
  components: {CabinComponent},
  data() {
    return {
      elevatorFloorNow: {data:{id:1}},
      toMove :0,
      floorsQueue,
      shaftFloors:[],
      elevatorFloor:1,
      movements:[],
      moving: false
    }
  },
  methods: {
    async goTo(toMove){
      this.movements.push(toMove);
      if(this.moving) {
        return ;
      }
      while(this.movements.length) {
        this.moving = true;
        await this.move( this.movements.shift());
      }
      this.moving = false;
    },
    async move(toMove) {

      const direction = this.elevatorFloorNow?.data?.id > toMove ? 'down': 'up';
      while (this.elevatorFloorNow?.data?.id !== toMove) {
        await  wait(1000);
        this.elevatorFloor = this.elevatorFloorNow?.data?.id;
        this.elevatorFloorNow =  direction === 'up' ? this.elevatorFloorNow.next :this.elevatorFloorNow.prev ;


      }

    }
  },
  props:{
    floors: Number,
    name: String
  },
  mounted() {
    for (let i=1;i<this.floors+1;i++) {
      this.floorsQueue.append({name:i,id:i});
      this.shaftFloors.push({name:i,id:i});
    }
    this.elevatorFloorNow = this.floorsQueue.head;

  }
}
</script>

<style scoped>
.floor {
  border: 1px dotted gray;
  height: 50px;
  width: 100%;
  margin-bottom: 5px;
}
.floor span {
  margin-top: 25px;
  background-color: lightgray;
  border: 1px solid gray;
}

.where-move {
  border: 1px solid lawngreen;
}
</style>