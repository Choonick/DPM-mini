<template>
    <div class="wrap-input">
        <input class="input" type="text" :value="value" v-on="listener" placeholder="텍스트를 입력해주세요.">
    </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: "222"
    }
  },
  computed: {
    listener() {
      return {
        ...this.$listeners,
        input: $event => this.$emit("input", event.target.value)
      };
    }
  }
};
</script>


<style scoped>
.wrap-input {
    padding-left: 16px;
    padding-right: 16px;
}
.input {
  width: 288px;
  height: 50px;
  border-radius: 10px;
  border: 0px;
  background-color: #f0f0f0;
  text-indent: 15px;
  font-size: 16px;
}
</style>