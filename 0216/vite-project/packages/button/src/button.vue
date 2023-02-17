<template>
    <button :class="[
      'wh_button--'+type
      ]">
   
    </button>
</template>

<script>
  export default {
    name: 'wh-button',
    props: {
      type: {
        type: String,
        default: 'default',
      }
    }
  }
</script>