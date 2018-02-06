<template>
  <div id="scoreList">
    <!-- 第零屏 -->
    <div class="screen0">
      <p>{{student.name}}同学：</p>
      <p>这是网校英语老师</p>
      <p>发给你的2017成绩单哦，</p>
      <p>快看看你这一年的</p>
      <p>优秀表现吧！</p>
    </div>
    <!-- 第一屏 -->
    <div class="screen1">
      <p class="time textAlign">{{student.joinTime}}</p>
      <p class="textAlign">{{student.name}}同学</p>
      <p class="textAlign">在 <span style="color: #fa2944; font-size: 5vw;">{{student.joinTime}}</span> 你加入了</p>
      <p class="textAlign">学而思网校大家庭</p>
      <p class="textAlign">自那天起，老师就在想</p>
      <p class="textAlign">什么时候才能在英语课堂上</p>
      <p class="textAlign">见到可爱的你呢</p>
      <p class="textAlign" style="color: #fd7c27">（这一天好像很快了呢）</p>
    </div>
    <!-- 第二屏 -->
    <div class="screen2">
      <p class="time textAlign">{{student.firstClassTime}}</p>
      <p class="textAlign">你在课堂上第一次见面的</p>
      <p class="textAlign">主讲老师是</p>
      <div class="teacherDiv">
        <img class="textAlign teacher" src="../assets/mainTeacher.png" alt="">
        <img class="crown" src="../assets/crown.png" alt="">
      </div>
      <p class="textAlign" style="color: black; font-family: '微软雅黑';">{{student.mainTeacher}}</p>
      <p class="textAlign">你提交的第一份作业时</p>
      <p class="textAlign">由ta替你批改的</p>
      <div class="teacherDiv">
        <img class="textAlign teacher" src="../assets/nbTeacher.png" alt="">
        <img class="crown" src="../assets/crown.png" alt="">
      </div>
      <!-- <img class="textAlign teacher" src="../assets/nbTeacher.png" alt=""> -->
      <p class="textAlign" style="color: black; font-family: '微软雅黑';">{{student.workTeacher}}</p>
      <div style="padding: 1vw">
        <p class="textAlign" style="color: #fd7c27">她们都很喜欢你</p>
        <p class="textAlign" style="color: #fd7c27">也希望你能发个微信告诉她们</p>
        <p class="textAlign" style="color: #fd7c27">你这一年进步了</p>
        <p class="textAlign" style="color: #fd7c27">考你一个小问题</p>
        <p class="textAlign" style="color: #fd7c27">你还记得你的外教老师是谁么？</p>
      </div>
    </div>
    <!-- 第三屏 -->
    <div class="screen3">
      <p class="time textAlign">{{student.fullMarkTime}}</p>
      <p class="textAlign">你的课后作业拿到了<span style="color: #e4001d; font-size: 5vw;">第一个</span>满分！</p>
      <p class="textAlign">太棒了！还记得那节课的内容吗？</p>
      <p class="textAlign">双优英语 <span style="color: #e4001d; font-size: 5vw;">{{student.fullMarkClass}}</span></p>
      <p class="textAlign">这一年，你总共提交了</p>
      <p class="textAlign"><span style="color: #e4001d; font-size: 5vw;">{{student.submitTime}}</span>分作业，并认真订正了<span style="color: #e4001d; font-size: 5vw;">{{student.modifyTime}}</span>次。</p>
      <div style="padding: 6vw;">
        <p class="textAlign" style="color: #fd7c27">明明可以靠颜值，</p>
        <p class="textAlign" style="color: #fd7c27">你却非要靠实力征服老师。</p>
      </div>
    </div>
    <!-- 第四屏 -->
    <div class="screen4">
      <p class="time textAlign">{{student.totalYear}}年</p>
      <p class="textAlign">这一年，你的实力让我们赞叹</p>
      <p class="textAlign">你共出席了 <span style="color: #e4001d; font-size: 5vw;">{{student.joinClassTime}}</span> 节英语课</p>
      <p class="textAlign">上课时长高达 <span style="color: #e4001d; font-size: 5vw;">{{student.totalClassTime}}</span> 个小时</p>
      <p class="textAlign">开口英语的时间竟有 <span style="color: #e4001d; font-size: 5vw;">{{student.speakTime}}</span> 小时</p>
      <p class="textAlign">那可是 <span style="color: #e4001d; font-size: 5vw;">{{student.speakTime*60}}</span> 分钟</p>
      <p class="textAlign">你还读了 <span style="color: #e4001d; font-size: 5vw;">{{student.readBook}}</span> 本绘本</p>
      <div style="padding: 6vw;">
        <p class="textAlign" style="color: #fd7c27">不知道你有没有为自己鼓一下掌</p>
      </div>
    </div>
    <!-- 第五屏 -->
    <div class="screen5">
      <p class="textAlign" style="font-size: 6.5vw; line-height: 6vw; margin 11vw 0 12vw 0;">2018年</p>
      <p class="textAlign">老师送你一个英语学习关键词</p>
      <p class="textAlign" style="margin: 7vw 0; color: #db3831;">{{student.keyWord}}</p>
      <p class="textAlign">2018年你会收获更多知识。</p>
      <p class="textAlign">认真听课，仔细完成课后作业，</p>
      <p class="textAlign">勤奋的努力下，</p>
      <p class="textAlign">相信你会获得更多知识。</p>
    </div>
    <!-- 第六屏 -->
    <div class="screen6">
      <button class="share">share</button>
    </div>
  </div>
</template>

<script>
import store from '../vuex/store.js'
import '../assets/style.css'
export default {
  store: store,
  data: function () {
    return {

    }
  },
  computed: {
    student: function () {
      return this.$store.getters.getStudent
    }
  }
}
</script>

<style>
</style>
