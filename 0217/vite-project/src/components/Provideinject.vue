<template>
    <div>
        <p>i am the child.</p>
        <h3>从App接收到的数据{{childCount}} {{childData}}</h3>
        <hr/>
        <Mode/>
    </div>
</template>

<script setup>
import { inject } from 'vue'
import Mode from './mode.vue'

const childCount = inject('count')
const childData = inject('data','aaa')
</script>