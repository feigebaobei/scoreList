import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    num: 0,
    students: {
      name: '常瑜',
      joinTime: '2016年2月9日',
      firstClassTime: '2017年1月5日',
      mainTeacher: '刘娟',
      workTeacher: '郭义婷',
      fullMarkTime: '2017年3月8日',
      fullMarkClass: 'Level6-unit2-lesson1',
      submitTime: 289,
      modifyTime: 185,
      totalYear: 2017,
      joinClassTime: 78,
      totalClassTime: 134,
      speakTime: 85,
      readBook: 52,
      keyWord: '一分耕耘  一分收获'
    },
    imgUrl: [
    ]
  },
  getters: {
    getNum: state => state.num,
    getStudent: state => state.students
  },
  mutations: {},
  actions: {}
})

export default store
