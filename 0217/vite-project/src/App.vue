<script setup>
import HelloWorld from './components/HelloWorld.vue'
import { ref,provide } from 'vue'
import Child from "./components/Child.vue"
import Child1 from "./components/Child1.vue";
import Child2 from "./components/Child2.vue";
import Provideinject from "./components/Provideinject.vue"
import emitter from "./utils/bus"


const message = ref('');
let infos = ref('hello child');
let total = ref(10000);
const count = ref(0);
const name = ref('father');
provide('count',count);
provide('data',name);
emitter.on('sayHello', () => {
  console.log('hello')
})

</script>

<template>
  <div>
    <div>
      <Child1/>
      <Child2/>
    </div>
    <div>
      <input type="text" id="message" v-model="message">
      <p>你输入的消息是: {{ message }}</p>
    </div>
    <div>
      <Child v-model:infos="infos" :money.sync="total" />
    </div>
    <div>
      我是App组件
    </div>
    <button @click="count += 1">点我加+1</button>
    <hr/>
    <Provideinject/>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
