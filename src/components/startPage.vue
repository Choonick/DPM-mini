<template>
  <div class="wrapa" style="position:relative; overflow:hidden">
    <div id="textinfo">
      <h1 id="title">Weather Chatbot</h1>
      <p><span class="date">{{date1}}</span><span id="date2" class="date" style="margin-left:16px; display:inline-block;">{{date2}}</span></p>
      <p id="description" style="color: #212121">
        반갑습니다.<br>
        오늘 날씨가 궁금하신가요?<br>
        <span style="font-weight:bold">오늘 날씨</span>를 검색해보세요.
      </p>
    </div>
    <img src="../assets/img/clear.png" style="position:absolute; width:514px; height:526px; top:167px; left:283px;">
    <img src="../assets/img/yellow-line.svg" style="width:398px; height:190px; margin-top:192px; margin-left:23px;">
    <address style="margin-top:90px; margin-left:39px; margin-bottom:24px;">
      <div style="margin-bottom:10px;">
        <div class="copy" style="color: #212121">Copyright@2018 DPM All rights reserved.</div>
      </div>
      <div>
        <div><span class="front">Front-end</span><span class="contr">최형석 &nbsp;&nbsp;박종훈</span></div>
        <div><span class="front">Back-end</span><span class="contr">오기환 &nbsp;&nbsp;김민호</span></div>
        <div><span class="front">Designer</span><span class="contr">임철규</span></div>
      </div>
    </address>
  </div>
  
</template>
<script>
export default {
    data() {
        return {
          date1:'',
          date2:'',
        };
    },
    methods: {

    },
    created() {
        var date = new Date();
        console.log(date.getFullYear());
        console.log(date.getMonth());
        console.log(date.getDate());
        var year = date.getFullYear();
        var month = date.getMonth();
        var monthDate = date.getDate();
        var day = date.getDay();
        switch(day){
          case 0: day = '일'; break;
          case 1: day = '월'; break;
          case 2: day = '화'; break;
          case 3: day = '수'; break;
          case 4: day = '목'; break;
          case 5: day = '금'; break;
          case 6: day = '토'; break;
        }
        this.date1 = `${monthDate} Apr. ${year}`;
        this.date2 = `${year}년 ${month+1}월 ${monthDate}일 ${day}요일`;
    },
};
</script>
<style scoped>
.contr{
  font-family: SpoqaHanSans;
  font-size: 12px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #212121;
  display:inline-block;
  margin-left:20px;
}
.front{
  font-family: SpoqaHanSans;
  font-size: 12px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #212121;
  width: 61px;
  display:inline-block;
}
.copy{
  opacity: 0.6;
  font-family: SpoqaHanSans;
  font-size: 12px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #ffffff;
}
.wc{
  font-family: Martel;
  font-size: 16px;
  font-weight: 900;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #ffffff;
}
.sunrise-tag{
  font-family: SpoqaHanSans;
  font-size: 16px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #212121;
  position:absolute;
}
.sunrise-time-tag{
  font-family: SpoqaHanSans;
  font-size: 16px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #9b9b9b;
  position:absolute;
  top:263px;
}
.expect{
  width: 23px;
  height: 18px;
  font-family: SpoqaHanSans;
  font-size: 12px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #7a89c2;
}
.dust-amount{
  width: 30px;
  height: 24px;
  font-family: SpoqaHanSans;
  font-size: 16px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #212121;
}
.cell-icon2{
  margin-top:24px !important;
  margin-bottom:21px !important;
}
.cell-tempe{
  font-family: SpoqaHanSans;
  font-size: 16px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #212121;
  padding-bottom:24px;
}
.inside-border{
  border-right: 2px solid rgba(33, 33, 33, 0.1);
}
.cell-icon{
  width: 30px; height: 28px; display:block; margin:28px auto 25px;
}
.cell{
  font-family: SpoqaHanSans;
  font-size: 16px;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #9b9b9b;
}
.first-cell{
  color: #212121;
  font-weight:bold;
}
table{
  width:526px;
  margin:0 auto;
}
.table-subtitle{
  font-family: SpoqaHanSans;
  font-size: 16px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #9b9b9b;
  margin-bottom:49px;
}
h2.table-title{
  color: #212121;
  text-align:center;
  font-family: Martel;
  font-size: 20px;
  font-weight: 900;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
}
div.white-box{
  width: 592px;
  height: 327px;
  border-radius: 10px;
  background-color: #ffffff;
  margin-top:24px;
  margin-left:23px;
  color:black;
  padding-top:32px;
}
#weather-detail{
  height: 20px;
  opacity: 0.8;
  font-family: SpoqaHanSans;
  font-size: 14px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #ffffff;
  margin-top:127px;
  
}
div.wrapa {
  background-color: #f5f5f5;
  color:black;
}

#title{
  font-size:32px;
  text-align:left;
  font-family: Martel;
  font-weight: 900;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #212121;
}

#textinfo{
  padding-top:48px;
  margin-left:39px;
  
}

.date{
  opacity: 0.6;
  font-family: Martel;
  font-size: 17px;
  font-weight: 900;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #212121;
}
#date2{
  opacity: 0.6;
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

#description{
  text-align: left;
  margin-top:24px;
  font-weight:normal;
  font-family: SpoqaHanSans;
  font-size: 16px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #212121;
}

#num{
  margin-top:36px;
  width: 66px;
  height: 62px;
  font-family: SpoqaHanSans;
  font-size: 42px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  display:inline-block;
}

#num sup{
  font-size:20px;
}

#mal{
  width: 57px;
  height: 63px;
  font-family: SpoqaHanSans;
  font-size: 16px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.31;
  letter-spacing: normal;
  text-align: left;
  display:inline-block;
  margin-left:19px;
}

#line{
  width:168px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.4);
}

#next{
  margin-top:14px;
}

#dust{
  display:inline-block;
}

#dust-next{
  display:inline-block;
  margin-left:26px;
}
</style>
