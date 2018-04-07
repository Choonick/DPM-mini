<template>
  <div>
    <mainPage id="main"></mainPage>
    <chatbot id="chatbot"></chatbot>
  </div>
</template>

<script>
import mainPage from "./mainPage.vue";
import chatbot from "./chatbot.vue";

export default {
  components: {
    mainPage,
    chatbot
  },
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#main {
  /* width:100%; */
  display: inline-block;
  background: skyblue;
}
#chatbot {
  display: inline-block;
  background: orange;
  width: 320px;
  
}

h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
