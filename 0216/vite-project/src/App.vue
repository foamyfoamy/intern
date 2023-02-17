<script setup>
import HelloWorld from './components/HelloWorld.vue';
import { useStore,mapState,mapGetters,mapMutations } from 'vuex';
import { computed } from 'vue';
import useMapState from "./hooks/useMapState"
import useGetters from "./hooks/useGetters.js"
import vuexMap from "./hooks/vuexMap.js"

// const storeGettersFns = useGetters(["totalPrice", "unit", "nameInfo"])

// const storeState = useMapState(['name', 'age', 'gender'])
// const obj = useMapState({
//             ages: state => state.age
//         })       

const storeGettersFns = vuexMap(mapGetters, ["totalPrice", "unit", "nameInfo"])
const storeState = vuexMap(mapState,['name', 'age', 'gender'])

const storeMutations = mapMutations(["add", "reduce"])


const store = useStore();

function add() {
            store.commit("add", 1)
        }
// function reduce() {
//             store.commit("reduce")
//         }

const num = computed(() => store.state.num);
// const unit = computed(() => store.getters.unit);



// const storeStateFns = mapState(['name', 'age', 'gender']);
// const storeState = {};
// Object.keys(storeStateFns).forEach(fnKey => {
//   const fn = storeStateFns[fnKey].bind({$store: store})
//       storeState[fnKey] = computed(fn)
// })
</script>

<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
    <p>state</p>
    <p>{{$store.state.num}}</p>
    <p>{{ num }}</p>
    <p>{{ storeState.name }}</p>
    <p>{{ storeState.age }}</p>
    <p>{{ storeState.gender }}</p>
    <p> getters</p>
    <!-- <p>{{ $store.getters.totalPrice }}</p>
    <p>{{ $store.getters.moreThanThe(4) }}</p> -->
    <p>{{ storeGettersFns.unit }}</p>
    <p>{{ storeGettersFns.totalPrice }}</p>
    <p>{{ storeGettersFns.nameInfo }}</p>
    <p>mutation</p>
    <h1>{{$store.state.counter}}</h1>
    <button @click="add">+1</button>
    <button @click="reduce">-1</button>
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
