<template>
  <div id="wrapper" style="line-height:1.3;">
      <div class="message-wrapper"  ref="myid">

        <div class="res-wrapper" >
          <div class="basic-res" style="line-height:1.3; padding:16px;"> 
            <p class="textarea1" >
            맛있는 점심 드셨나요?<br>
            오늘의 날씨가 궁금하다면<br><br>
          </p>
          <p class="textarea2" style="margin-top:16px;">
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
              <p class="textarea2" style="margin-top:9px">
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
                {{req.textArea}}<br>
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
  padding-top: 24px;
}
#wrapper {
  overflow: scroll;
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
  /* width: 288px; */
  height: 141px;
  border-radius: 10px;
  background-color: #f0f0f0;
}

#message-wrapper {
  padding: 16px;
  padding-top: 20%;
  height: 500px;
  overflow: auto;
}
.message-wrapper::-webkit-scrollbar { 
  display: none; 
}
.basic-res {
  border-radius: 10px;
  background-color: #f0f0f0;
  position: relative;
}
.res {
  margin-top: 70px;
  border-radius: 10px;
  background-color: #f0f0f0;
  padding:16px;
}
.exception {
  padding:16px;
  margin-top: 70px;
  border-radius: 10px;
  background-color: #f0f0f0;
}
</style>


<script>
import textView from "./textView.vue";
import router from "../router/index.js";

export default {
  components: {
    textView
  },

  data() {
    return {
      textMessage: "",
      requests: [],
      isFirst:true
    };
  },

  methods: {
    scrollToEnd() {
        var wrap = document.querySelector('#message-wrapper');
        var scrollHeight = wrap.scrollHeight;
        wrap.scrollTop = scrollHeight;
    },
    sendMessage() {

      

      if(this.textMessage === "") return;
      if(this.isFirst === true){
                router.push({ path: 'chat' });
                this.isFirst = false;
              }
      this.$refs["myid"].scrollTop = this.$refs["myid"].scrollHeight;
      if(this.textMessage === '어두운날씨'){
        this.$EventBus.$emit('weather', {
          c_current:"13.90",
          c_high:"16.00",
          c_low:"9.00",
          humidity:"85.20",
          rain:"비온다",
          sky:"비 온다고 치자",
          wind:"2.40",
        });
        return; 
      }

      
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
      } else if(this.textMessage === "이번주날씨"){
        this.requests.push({flag :'exception', textArea: '아 손가락 아파요. 날씨 화면 옆에 있어요.'});
        this.textMessage = "";
        this.scrollToEnd();
        return;
      } else {
          this.requests.push({flag :'exception', textArea: '오늘날씨, 내일날씨, 이번주날씨를 검색할 수 있습니다.'});
          this.textMessage = "";
          this.scrollToEnd();
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
              if(obj.chat !== 2){
                this.$EventBus.$emit('weather', res.data);  
              }else{
                this.$EventBus.$emit('week-weather', res.data);  
              }
              
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
              this.scrollToEnd();
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
  },
  mounted() {
    this.scrollToEnd();
  }

};
</script>
