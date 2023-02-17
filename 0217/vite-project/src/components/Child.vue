<template>
	<div>
        {{infos}}
        <div class="child">
            子组件 {{money}} 元
            <button @click="emits('update:money', money-=1000)">
              <span>点击一次花 1000 元</span>
            </button>
        </div>
        <div>
            Child:<button @click="handleClick">打声招呼</button>
          </div>
	</div>
</template>

<script setup>
import emitter from "../utils/bus"
const props = defineProps(['infos','money'])// 
const emits = defineEmits(['update:infos'],['update:money'])//
setTimeout(() => {
    emits('update:infos', 'hello v-model')
}, 2000)
function handleClick() {
    emitter.emit('sayHello')
}
</script>

<style>
.child {
  border: 3px solid green;
}
</style>