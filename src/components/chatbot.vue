<template>
  <div>
      <h1>chatbot</h1>
      <div>body</div>
      <textView v-model="textMessage" @keydown.enter="sendMessage"></textView>
  </div>
  
</template>

<script>
import textView from "./textView.vue";

export default {
  components: {
    textView
  },

  data() {
    return {
      textMessage: ""
    };
  },

  methods: {
    sendMessage() {
      const BASE_URL = "http://172.16.7.187:3000";
      var obj = {
        lat: "",
        lon: "",
        chat: ""
      };

      switch(this.textMessage){
        case '오늘날씨':
          obj.chat =0;
          break;
        case '내일날씨':
          obj.chat =1;
          break;
        case '이번주날씨':
          obj.chat =2;
          break;
        default:
          alert('오늘날씨, 내일날씨, 이번주날씨를 검색할 수 있습니다.');
          return;
      }

      obj.lat = 37.5465952;
      obj.lon = 126.9495489;

      const trimmedText = this.textMessage.trim();

      if (trimmedText) {
        if ("geolocation" in navigator) {
          console.log("사용가능");

          // 위치 정보 받아오는 함수
          navigator.geolocation.watchPosition(position => {
            obj.lat = position.coords.latitude;
            obj.lon = position.coords.longitude;
            console.log(obj);

            // 서버에게 메세지와 함께 전송
            this.$http
            .get(`${BASE_URL}/weather/chatbot`, { params: obj })
            .then(res => {
              console.log(res);
              alert(res);
            });

            // console.log(obj);

          });

        } else {
          console.log("사용불가");
          alert("사용이 불가능 합니다.");
          /* 지오로케이션 사용 불가능 */
        }

        // this.$http.get(`${BASE_URL}/weather/chatbot`).then(res => {
        //   console.log(res);
        // });
        this.textMessage = "";
      }
    }
  }
};
</script>
