<template>
  <div id="wrap">
      <router-view id="main"/>
      <!--<mainPage id="main"></mainPage>-->
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
#wrap {
  margin:0 auto;
  width:959px;
  background: #ffffff;
}
#main {
  width: 639px;
  display:inline-block;
  overflow: auto;
}
#chatbot {
  width: 320px;
  /* height: 100px; */
  position: fixed;
  /* position: absolute; */
  display:inline-block;
  background: #ffffff;
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
