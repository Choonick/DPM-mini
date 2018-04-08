<template>
  <input type="text" :value="value" v-on="listener">
</template>

<script>
export default {
    props:{
        value:{
            type:String,
            default:'222'
        }
    },
    computed: {
        listener() {
            return {
                ...this.$listeners,
                input: $event => this.$emit('input',event.target.value)
            }
        }
    }
  
}
</script>


<style scoped>
    .input {
        width: 30%;
        padding: 8px 10px;
        border: 1px solid black;
    }
</style>