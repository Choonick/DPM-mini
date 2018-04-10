<template>
  <div id="wrapper">
      <div class="message-wrapper" >

        <div class="res-wrapper" >
          <div class="basic-res">
            <p class="textarea1">
            맛있는 점심 드셨나요?<br>
            오늘의 날씨가 궁금하다면
          </p>
          <p class="textarea2">
            오늘의 날씨를 검색해주세요.
          </p>
          </div>
        </div>
        
        <div class="container" v-for="req in requests" :key="req.id">
          
          <div class="req-wrapper" v-if="req.flag=='request'">
            <div class="request">
                <p>{{req.text}}</p>
            </div>
          </div>

          <div class="res-wrapper" v-if="req.flag=='response'">
            <div class="res">
              <p class="textarea1">
                날씨가 어떠한들 기분은 좋기 마련입니다.<br>
              </p>
              <p class="textarea2">
                {{req.info.sky}} {{req.info.c_current}}<br>
                미세먼지 적음 30<br><br>
                최고온도 {{req.info.c_high}}<br>
                최저온도 {{req.info.c_low}}<br><br>
                오후에 구름이 낄 예정입니다.
              </p>
            </div>
          </div>

          <div class="res-wrapper" v-if="req.flag=='exception'">
            <div class="exception">
              <p class="textarea1">
                오늘날씨, 내일날씨, 이번주날씨를 검색할 수 있습니다.<br>
              </p>
            </div>
          </div>
        </div>
      </div>


      <div class="textView-wrapper">
        <textView v-model="textMessage" @keyup.enter="sendMessage"></textView>
      </div>
  </div>
</template>

<style scoped>
.container {
  display: block;
  /* flex-direction: column !important; */
}
.textView-wrapper {
  padding-top: 42px;
}
#wrapper {
  overflow: auto;
}
.req-wrapper {
  float: right;
}
.request {
  margin-top: 13px;
  margin-bottom: 13px;
  padding-top: 13px;
  padding-bottom: 13px;
  padding-left: 16px;
  padding-right: 16px;
  border-radius: 10px;
  background-color: #212121;
  font-family: SpoqaHanSans;
  font-size: 16px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #ffffff;
}
.textarea2 {
  padding-left: 16px;
  width: 256px;
  height: 24px;
  font-family: SpoqaHanSans;
  font-size: 16px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #212121;
}
.textarea1 {
  padding: 16px;
  width: 256px;
  font-family: SpoqaHanSans;
  font-size: 16px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #4a4a4a;
}
.basic-textarea {
  width: 288px;
  height: 141px;
  border-radius: 10px;
  background-color: #f0f0f0;
}

.message-wrapper {
  padding: 16px;
  padding-top: 20%;
  height: 500px;
  overflow: auto;
}
.basic-res {
  width: 288px;
  height: 141px;
  border-radius: 10px;
  background-color: #f0f0f0;
  position: relative;
}
.res {
  width: 288px;
  height: 210px;
  margin-top: 70px;
  border-radius: 10px;
  background-color: #f0f0f0;
}
.exception {
  width: 288px;
  margin-top: 70px;
  border-radius: 10px;
  background-color: #f0f0f0;
}
</style>


<script>
import textView from "./textView.vue";

export default {
  components: {
    textView
  },

  data() {
    return {
      textMessage: "",
      requests: []
    };
  },

  methods: {
    sendMessage() {
      if(this.textMessage === "") return;

     var BASE_URL = "http://us-central1-depromeet-mini1-team4.cloudfunctions.net"
      var obj = {
        lat: "",
        lon: "",
        chat: ""
      };

      if (this.textMessage !== "") {
        this.requests.push({
          text: this.textMessage,
          flag: "request"
        });
      }
      console.log(this.textMessage);

      if(this.textMessage === "오늘날씨"){
        obj.chat = 0;

      } else if(this.textMessage === "내일날씨"){
          obj.chat = 1;
      } else if(this.textMessage=== "이번주날씨"){
          obj.chat = 2;
      } else {
          this.requests.push({flag :'exception'});
          this.textMessage = "";
          return;
      }

      obj.lat = 37.5465952;
      obj.lon = 126.9495489;

      const trimmedText = this.textMessage.trim();

      if (trimmedText) {
        if ("geolocation" in navigator) {
          console.log("사용가능");

          this.$http
            .get(`${BASE_URL}/weatherPlanet/chatbot`, { params: obj })
            .then(res => {
              console.log(res.data);
              var info = {
                wind: res.data.wind,
                sky: res.data.sky,
                rain: res.data.rain,
                c_current: res.data.c_current,
                c_high: res.data.c_high,
                c_low: res.data.c_low
              };
              console.log("info===", { info: info, flag: "response" });
              this.requests.push({ info: info, flag: "response" });
            });

          // 위치 정보 받아오는 함수
          // navigator.geolocation.watchPosition(position => {
          //   obj.lat = position.coords.latitude;
          //   obj.lon = position.coords.longitude;
          //   console.log(obj);

          //   // 서버에게 메세지와 함께 전송
          //   this.$http
          //     .get(`${BASE_URL}/weatherPlanet/chatbot`, { params: obj })
          //     .then(res => {
          //       console.log(res);
          //       alert(res);
          //     });

          //   // console.log(obj);
          // });
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
