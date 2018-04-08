<template>
  <div class="wrapa" style="position:relative; overflow:hidden">
    <div id="textinfo">
      <h1 id="title">Weather</h1>
      <p><span class="date">7 Apr.2018 </span><span id="date2" class="date" style="margin-left:16px; display:inline-block;"> 2018년 4월 7일 토요일</span></p>
      <p id="description">
        어디서 무얼 하든 기분 좋은 날씨입니다<br>
        오후에 구름이 낄 예정입니다
      </p>
      <div id="line">
        <div id="num">
          16<sup>o</sup>
        </div>
        <div id="mal" style="margin-top:12px;">
          <div>
            맑음
          </div>
          <div>
            12&#8451;/23&#8451;
          </div>
        </div>
      </div>
      <div id="next">
        <img id="dust" src="../assets/invalid-name.svg">
        <div id="dust-next" style="line-height:1.3">
          <div>
            미세먼지
          </div>
          <div style="font-weight:bold;">
            적음
          </div>
        </div>
      </div>
    </div>
    <img src="../assets/img/clear.png" srcset="../assets/img/clear@2x.png 2x, ../assets/img/clear@3x.png 3x" 
      style="position:absolute; width:514px; height:526px; top:167px; left:283px;">
    <img src="../assets/img/yellow-line.svg" style="width:398px; height:190px; margin-top:64px; margin-left:23px;">
    <p id="weather-detail">오늘의 날씨 자세히 보기</p>
    <div class="white-box">
      <h2 class="table-title">Temperature</h2>
      <h3 class="table-subtitle">날짜별 날씨</h3>
      <table style="border-collapse:collapse;">
        <colgroup>
          <col class="inside-border">
          <col class="inside-border">
          <col class="inside-border">
          <col class="inside-border">
          <col class="inside-border">
        </colgroup>
        <tr>
          <th class="cell first-cell">오늘</th>
          <th class="cell">오늘</th>
          <th class="cell">오늘</th>
          <th class="cell">오늘</th>
          <th class="cell">오늘</th>
          <th class="cell">오늘</th>
        </tr>
        <tr>
          <td class=""><img class="cell-icon" src="../assets/img/sunny-icon.svg"></td>
          <td class=""><img class="cell-icon" src="../assets/img/sunny-icon.svg"></td>
          <td class=""><img class="cell-icon" src="../assets/img/sunny-icon.svg"></td>
          <td class=""><img class="cell-icon" src="../assets/img/sunny-icon.svg"></td>
          <td class=""><img class="cell-icon" src="../assets/img/sunny-icon.svg"></td>
          <td class=""><img class="cell-icon" src="../assets/img/sunny-icon.svg"></td>
        </tr>
        <tr>
          <td class="cell-tempe">12/13</td>
          <td class="cell-tempe">12/13</td>
          <td class="cell-tempe">12/13</td>
          <td class="cell-tempe">12/13</td>
          <td class="cell-tempe">12/13</td>
          <td class="cell-tempe">12/13</td>
        </tr>
      </table>
    </div>
    <div class="white-box">
      <h2 class="table-title">Fine dust</h2>
      <h3 class="table-subtitle">미세먼지 농도</h3>
      <table style="border-collapse:collapse;">
        <colgroup>
          <col class="inside-border">
          <col class="inside-border">
          <col class="inside-border">
          <col class="inside-border">
          <col class="inside-border">
        </colgroup>
        <tr>
          <th class="cell first-cell">오늘</th>
          <th class="cell">14일</th>
          <th class="cell">15일</th>
          <th class="cell">16일</th>
          <th class="cell">17일</th>
          <th class="cell">18일</th>
        </tr>
        <tr>
          <td class=""><img class="cell-icon cell-icon2" src="../assets/img/dust.svg" style="opacity:0.1;"></td>
          <td class=""><img class="cell-icon" src="../assets/img/dust.svg" style="opacity:0.4;"></td>
          <td class=""><img class="cell-icon" src="../assets/img/dust.svg" style="opacity:0.4"></td>
          <td class=""><img class="cell-icon" src="../assets/img/dust.svg"></td>
          <td class=""><img class="cell-icon" src="../assets/img/dust.svg"></td>
          <td class=""><img class="cell-icon" src="../assets/img/dust.svg"></td>
        </tr>
        <tr>
          <td class="dust-amount">적음</td>
          <td class="dust-amount">보통</td>
          <td class="dust-amount">보통</td>
          <td class="dust-amount">많음</td>
          <td class="dust-amount">많음</td>
          <td class="dust-amount">많음</td>
        </tr>
        <tr>
          <td class="expect"></td>
          <td class="expect"></td>
          <td class="expect">예상</td>
          <td class="expect">예상</td>
          <td class="expect">예상</td>
          <td class="expect">예상</td>
        </tr>
      </table>
    </div>
    <div class="white-box" style="position:relative;">
      <h2 class="table-title">BMNT/EENT</h2>
      <h3 class="table-subtitle" style="margin-bottom:29px;">일출 · 일몰</h3>
      <img src="../assets/img/sunrise.svg" style="display:block; margin:0 auto;">
      <div class="sunrise-tag" style="top:242px; left:88px;">일출</div>
      <div class="sunrise-tag" style="top:242px; right:88px;">일출</div>
      <div class="sunrise-time-tag" style="left:82px;">07:12</div>
      <div class="sunrise-time-tag" style="right:82px">18:13</div>
    </div>
    <address style="margin-top:138px; margin-left:39px;">
      <div style="margin-bottom:30px;">
        <h2 class="wc">Weather Chatbot</h2>
        <div class="copy">Copyright@2018 DPM All rights reserved.</div>
      </div>
      <div>
        <div><span class="front">Front-end</span><span class="contr">최형석 &nbsp;&nbsp;박종훈</span></div>
        <div><span class="front">Back-end</span><span class="contr">오기환 &nbsp;&nbsp;김민호</span></div>
        <div><span class="front">Designer</span><span class="contr">임철규</span></div>
      </div>
    </address>
  </div>
  
</template>

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
  color: #ffffff;
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
  color: #ffffff;
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
  background-color: #2855ff;
}

#title{
  width:146px;
  height:54px;
  font-size:32px;
  text-align:left;
  font-family: Martel;
  font-weight: 900;
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
}

#description{
  height: 48px;
  font-family: SpoqaHanSans;
  font-size: 16px;
  text-align: left;
  color: #ffffff;
  margin-top:24px;
  font-weight:normal;
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
