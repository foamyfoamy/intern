<template>
<div class="mode">
    <p>i am the grandson</p>
    <h3>接收到的数据{{data}}</h3>
</div>
</template>
    
<script setup>
import { inject } from 'vue'
const data = inject('data')
</script>
    