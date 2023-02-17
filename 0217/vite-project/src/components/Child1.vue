<template>
    <div>child1
        <button @click="click">给child2 传值</button>
    </div>
</template>
   
<script setup>
import emitter from "../utils/bus"
function click() {
    emitter.emit('child2Data', {name: '小米'})
  }
</script>