<!-- 合伙人规则页面 -->
<template>
	<div class="teacher">
    <!-- 课程介绍 -->
    <div class="info">
      <div class="info-left" :class="{'course-up': courseArrowShow,'course-down': !courseArrowShow}" >
        <div class="info-course">
          <div class="course-img">
            <img :src="baseUrl + teacher_detail.head_img"/>
          </div>
          <div class="course-info">
            <div class="course-name">{{ course_list[0].name }}</div>
            <div class="course-price">{{ course_list[0].price }}元/ 节课</div>
          </div>
        </div>
        <div class="course-intro" :class="{'course-up': courseArrowShow,'course-down': !courseArrowShow}" v-html="teacher.course_list[0].introduce">
        </div>
        <div class="course-direction" @click="changeCourseArrow">
          <img v-if="courseArrowShow" src="../../static/images/evaluate/course-arrow-down.png"/>
          <img v-if="!courseArrowShow" src="../../static/images/evaluate/course-arrow-up.png"/>
        </div>
      </div>
      <div class="info-right" :class="{'info-right-up': courseArrowShow,'info-right-down': !courseArrowShow}">
        
      </div>
      <router-link :to="'/orderTeacher?tid=' + teacher_detail.id">
        <div class="submit">
            点击购买
        </div>
      </router-link>
    </div>’
    <!-- 课程详情 -->
    <div class="detail">
      <div class="detail-left" :class="{'detail-up': detailArrowShow,'detail-down': !detailArrowShow}" v-html="teacher_detail.detail_desc">
        
      </div>
      <div class="detail-right" @click="changeDetailArrow" :class="{'detail-right-up': detailArrowShow,'detail-right-down': !detailArrowShow}">
        <img v-if="detailArrowShow" src="../../static/images/evaluate/honor-arrow-down.png"/>
        <img v-if="!detailArrowShow" src="../../static/images/evaluate/honor-arrow-up.png"/>
      </div>
    </div>
    <div class="show">
      <div class="lesson">
        <div class="lesson-left">
          <div class="lesson-name">授课课程: {{ teacher_detail.name }}</div>
          <div class="lesson-time">
            <img src="../../static/images/mainIndex/calendar_icon.png"/>
            {{ teacher_detail.startDate }} - {{ teacher_detail.endDate }}
          </div>
        </div>
        <div class="lesson-right">
          <img :src="baseUrl + teacher_detail.head_img"/>
        </div>
      </div>
      <div class="awards">
        <div class="detail-left" :class="{'detail-up': awardsArrowShow,'detail-down': !awardsArrowShow}" v-html="teacher_detail.honor_info">
          
        </div>
        <div class="detail-right" @click="changeAwardsArrow" :class="{'detail-right-up': awardsArrowShow,'detail-right-down': !awardsArrowShow}">
          <img v-if="awardsArrowShow" src="../../static/images/evaluate/awards-down.png"/>
          <img v-if="!awardsArrowShow" src="../../static/images/evaluate/awards-up.png"/>
        </div>
      </div>
    </div>
    <div class="picture">
      <div class="title">老师照片<span>/{{ teacher_pic.length }}</span></div>
      <div class="list">
        <div class="list-item" v-for="item in teacher_pic">
          <img :src="baseUrl + item.base_url"/>
        </div>
      </div>
    </div>
	</div>
</template>
<script>
  var env = 'product';// set env type for debug or product
  import ajax from '../../config/ajax'
  import utils from '../../config/utils'
  import ApiControl from '../../config/envConfig.home'
  export default {
    name: 'profile',
    data(){
    	return {
        courseArrowShow: true,
        detailArrowShow: true,
        awardsArrowShow: true,
        baseUrl: 'http://www.studyyx.com',
        teacher:{
          teacher_detail:{},
          course_list: [
            {
              name: 'test',
              price: 330.34
            }
          ],
          teacher_pic: []
        },
        teacher_detail: {

        },
        course_list: [
          {
            name: 'test',
            price: 3443.23
          }
        ],
        teacher_pic: [
          {
            base_url: 'test'
          }
        ]
      }
    },
    created:function(){
     	document.title = "老师详情"
      var tid = this.$route.query.id
      console.log(tid)
      var _vue = this;
      _vue.$ajax.get(ApiControl.getApi(env, "teacherDetail"), {
          params:{
              act: 'teacherDetail',
              tid: tid
          }
      }).
      then(res => {
          // if(res.data.code == 0){
          //     console.log(res.data.data)
          //     _vue.mainIndexData = res.data.data;
          // }else{
          //     _vue.setErrorMessage(res.data.message);
          // }
          _vue.teacher = res.data.status;
          _vue.teacher_detail = res.data.status.teacher_detail;
          _vue.course_list = res.data.status.course_list;
          _vue.teacher_pic = res.data.status.teacher_pic  == null ? [] : res.data.status.teacher_pic;
      })

    },
    methods:{
      changeCourseArrow: function(){
        this.courseArrowShow = !this.courseArrowShow;
      },
      changeDetailArrow: function(){
        this.detailArrowShow = !this.detailArrowShow;
      },
      changeAwardsArrow: function(){
        this.awardsArrowShow = !this.awardsArrowShow;
      }
    },
    computed:{
    },
    mounted(){
    }
  }
</script>
<style lang="less" scoped>
  .teacher{
    .info{
      position: relative;
      margin: 0 0 0 12px;
      .submit{
        position: absolute;
        top: 10px;
        right: 20px;
        width: 80px;
        height: 30px;
        color: #fff;
        font-size: 14px;
        font-weight: bolder;
      }
      .info-left{
        display: inline-block;
        width: calc(~"100% - 23px");
        background: #f6ab2c;
        padding: 0 27px;
        height: 150px;
        position: relative;
        overflow: hidden;
        .info-course{
          padding-top: 30px;
          padding-bottom: 25px;
          .course-img{
            display: inline-block;
            width: 54px;
            height: 54px;
            vertical-align: top;
            margin-right: 12px;
            img{
              width: 100%;
              height: 54px;
              border-radius: 54px;
            }
          }
          .course-info{
            display: inline-block;
            .course-name{
              font-size: 15px;
              font-weight: bolder;
              color: #fff;
              padding-bottom: 10px;
            }
            .course-price{
              font-size: 12px;
              color: #fff;
            }
          }
        }
        .course-intro{
          font-size: 11px;
          line-height: 24px;
          color: #fff;
          overflow: hidden;
        }
        .course-intro.course-up{
          height: 150px;
        }
        .course-intro.course-down{
          height: 273px;
        }
        .course-direction{
          text-align: center;
          height: 20px;
          margin: 10px 0;
          position: absolute;
          bottom: 5px;
          left: 50%;
          img{
            height: 15px;
          }
        }
      }
      .info-left.course-up{
        height: 150px;
      }
      .info-left.course-down{
        height: 273px;
      }
      .info-right{
        width: 14px;
        background: #43a072;
        float: right;
      }
      .info-right-up{
        height: 150px;
      }
      .info-right-down{
        height: 273px;
      }
    }
    .detail{
      background: #eee;
      color: #cbcbcb;
      font-size: 11px;
      .detail-left{
        display: inline-block;
        margin-top:20px;
        margin-bottom: 20px;
        padding-right: 15px;
        padding-left:20px;
        
        width: calc(~"100% - 80px");
        overflow: hidden;
      }
      .detail-left.detail-up{
        max-height: 50px;
      }
      .detail-left.detail-down{
        max-height: 80px;
      }
      .detail-right{
        display: inline-block;
        float: right;
        margin-top: 20px;
        width: 20px;
        text-align: center;
        padding-right: 50px;
        border-left: 1px solid orange;
        img{
          width: 10px;
          margin-left: 8px;
        }
      }
      .detail-right-down{
        // margin-top: 40px;
      }
    }
    .show{
      overflow: hidden;
      background: #fff;
      border-bottom: 1px solid #ddd;
      .lesson{
        background: #fff;
        padding: 20px 20px;
        height: 100px;
        .lesson-left{
          display: inline-block;
          vertical-align: bottom;
          .lesson-name{
            font-size: 15px;
            font-weight: bolder;
            color: #303134;
            line-height: 30px;
          }
          .lesson-time{
            img{
              width: 10px;
            }
            font-size: 12px;
            color: #303134;
          }
        }
        .lesson-right{
          display: inline-block;
          float: right;
          width: 52px;
          img{
            width: 52px;
            height: 52px;
            border-radius: 52px;
          }
        }
      }
      .awards{
        margin: 20px;
        background: #eee;
        .detail-left{
          display: inline-block;
          margin-top:20px;
          margin-bottom: 20px;
          padding-right: 15px;
          width: calc(~"100% - 30px");
          overflow: hidden;
          padding-left: 10px;
          font-size: 11px;
        }
        .detail-left.detail-up{
          max-height: 50px;
        }
        .detail-left.detail-down{
          max-height: 80px;
        }
        .detail-right{
          display: inline-block;
          float: right;
          margin-top: 30px;
          width: 20px;
          text-align: center;
          margin-right: 10px;
        }
        .detail-right-down{
          margin-top: 40px;
        }
      }
    }
    .picture{
      background: #fff;
      padding-bottom: 40px;
      .title{
        padding: 30px;
        font-size: 15px;
        font-weight: bolder;
        color: #303134;
        span{
          font-weight: normal;
          font-size: 12px;
        }
      }
      .list{
        overflow-y: auto;
        white-space: nowrap;
        &::-webkit-scrollbar {
          background: transparent;
          display:none;
        }
        .list-item{
          position: relative;
          display: inline-block;
          width: 210px;
          height: 133px;
          vertical-align: middle;
          img{
            width: 200px;
            height: 133px;
          }
        }
        .list-item:first-child{
          padding-left: 10px;
          width: 220px;
        }
        .list-item:last-child{
          border-right: none;
        }

      }
    }
  }
</style>