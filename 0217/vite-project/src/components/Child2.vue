<template>
    <div>
        <p>child2---{{ str }}</p>
    </div>
</template>
   
<script setup>
import emitter from "../utils/bus"
import {onBeforeUnmount, ref} from "vue";
   
let str = ref()
   
emitter.on('child2Data', data => {
    str.value = data.name
})
   
onBeforeUnmount(() => {
    emitter.off('child2Data')  //关闭
})
</script>