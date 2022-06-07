<template>
  <div class="ratings" ref="ratingView">
    <div class="ratings-wrapper">
      <div class="overview">
        <div class="overview-left">
          <div class="comment-score">
              <p class="score">{{ratings.comment_score}}</p>
              <p class="text">商家评分</p>
          </div>
          <div class="other-score">
            <div class="quality-score item">
              <span class="text">口味</span>
              <Star :score="ratings.quality_score" class='star'></Star>
              <span class="score"></span>
            </div>
            <div class="pack-score item">
              <span class="text">包装</span>
              <Star :score="ratings.pack_score" class='star'></Star>
              <span class="score"></span>
            </div>
          </div>
        </div>
        <div class="overview-right">
          <div class="delivery-score">
            <p class="score">{{ratings.delivery_score}}</p>
            <p class="text">配送评分</p>
          </div>
        </div>
      </div>

      <Split></Split>

      <div class="content">
        <div class="rating-select" v-if="ratings.tab">
          <span 
            class="item" 
            :class="{'active':selectType==2}"
            @click="selectTypeFn(2)">
            {{ratings.tab[0].comment_score_title}}
          </span>
          <span 
            class="item" 
             :class="{'active':selectType==1}"
            @click="selectTypeFn(1)">
            {{ratings.tab[1].comment_score_title}}
          </span>
          <span 
            class="item" 
            :class="{'active':selectType==0}"
            @click="selectTypeFn(0)">
            <img v-show="selectType != 0" src="./img/icon_sub_tab_dp_normal@2x.png"/>
            <img v-show="selectType == 0" src="./img/icon_sub_tab_dp_highlighted@2x.png"/>
            {{ratings.tab[2].comment_score_title}}
          </span>
        </div>

        <div class="labels-view">
          <span
            class="item" 
            v-for="(item,index) in ratings.labels" 
            :key="index"
            :class="{'heigligh':item.label_star>0}"
            >
            {{item.content}}{{item.label_count}}
          </span>
        </div>

        <ul class="rating-list">
            <li 
              v-for="(comment,index) in selectComments" 
              :key="index"
              class="comment-item"
              >
              <div class="comment-header">
                <img :src="comment.user_pic_url" v-if="comment.user_pic_url" />
                <img src="./img/anonymity.png" v-if="!comment.user_pic_url"  />
              </div>
              <div class="comment-main">
                <div class="user">
                  {{comment.user_name}}
                </div>
                <div class="time">
                  {{formatDate(comment.comment_time)}}
                </div>
                <div class="star-wrapper">
                  <span class="text">评分</span>
                  <Star :score="comment.order_comment_score" class="star"></Star>
                </div>
                <div class="content">
                  {{comment.comment}}
                </div>
              </div>
            </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import Split from '../split/Split'
import Star from '../star/Star'

const ALL = 2
const PICTURE = 1
const COMMENT = 0
export default {
  data(){
    return {
      ratings:{},
      selectType:ALL
    }
  },
  components:{
    Split,
    Star
  },
  created(){
    fetch("/api/ratings")
      .then(res => {
        return res.json()
      })
      .then(response =>{
        if(response.code == 0){
          this.ratings = response.data
          this.$nextTick(()=>{
            if(!this.scroll){
              this.scroll = new BScroll(this.$refs.ratingView,{
                click:true
              })
            }else{
              this.scroll.refresh()
            }
          })
        }
      })
  },
  methods:{
    selectTypeFn(type){
      this.selectType = type
    },
    formatDate(time){
        let date = new Date(time * 1000);
				let fmt = 'yyyy.MM.dd';
				if(/(y+)/.test(fmt)) { // 年
					let year = date.getFullYear().toString();
					fmt = fmt.replace(RegExp.$1, year);
				}
				if(/(M+)/.test(fmt)) { // 月
					let mouth = date.getMonth() + 1;
					if(mouth < 10) {
						mouth = '0' + mouth;
					}
					fmt = fmt.replace(RegExp.$1, mouth);
				}
				if(/(d+)/.test(fmt)) { // 日
					let mydate = date.getDate();
					if(mydate < 10) {
						mydate = '0' + mydate;
					}
					fmt = fmt.replace(RegExp.$1, mydate);
				}
				return fmt;
    }
  },
  computed:{
    selectComments(){
      if(this.selectType == ALL){
        return this.ratings.comments
      }else if(this.selectType == PICTURE){
        let arr = []

        this.ratings.comments.forEach(comment => {
          if(comment.comment_pics.length){
            arr.push(comment)
          }
        });
        return arr
      }else{
        return this.ratings.comments_dp.comments
      }
    }
  }
}
</script>

<style scoped>
.ratings {
		position: absolute;
		left: 0;
		top: 191px;
		bottom: 0;
		width: 100%;
		overflow: hidden;
	}
	
	.ratings .ratings-wrapper .overview {
		padding: 20px 0 18px 0;
		display: flex;
	}
	
	.ratings .ratings-wrapper .overview .overview-left {
		flex: 1;
		padding-left: 26px;
	}
	
	.ratings .ratings-wrapper .overview .overview-left .comment-score {
		float: left;
		width: 48px;
		text-align: center;
		margin-right: 26px;
	}
	
	.ratings .ratings-wrapper .overview .overview-left .comment-score .score {
		font-size: 23px;
		font-weight: 800;
		color: #ffb000;
		margin-bottom: 9px;
	}
	
	.ratings .ratings-wrapper .overview .overview-left .comment-score .text {
		font-size: 11px;
		color: #666666;
	}
	
	.ratings .ratings-wrapper .overview .overview-left .other-score {
		float: left;
		margin-top: 3px;
	}
	
	.ratings .ratings-wrapper .overview .overview-left .other-score .item {
		height: 11px;
	}
	
	.ratings .ratings-wrapper .overview .overview-left .other-score .item .text {
		font-size: 11px;
		color: #666666;
		margin-right: 11px;
		float: left;
	}
	
	.ratings .ratings-wrapper .overview .overview-left .other-score .item .star {
		float: left;
		margin-right: 11px;
	}
	
	.ratings .ratings-wrapper .overview .overview-left .other-score .item .score {
		font-size: 11px;
		color: #FFB000;
		float: left;
	}
	
	.ratings .ratings-wrapper .overview .overview-left .other-score .quality-score {
		margin-bottom: 14px;
	}
	
	.ratings .ratings-wrapper .overview .overview-right {
		flex: 0 0 100px;
		text-align: center;
		border-left: 1px solid #9D9D9D;
	}
	
	.ratings .ratings-wrapper .overview .overview-right .delivery-score {}
	
	.ratings .ratings-wrapper .overview .overview-right .delivery-score .score {
		font-size: 19px;
		font-weight: 500;
		color: #999999;
		margin-bottom: 10px;
		margin-top: 3px;
	}
	
	.ratings .ratings-wrapper .overview .overview-right .delivery-score .text {
		font-size: 11px;
		color: #999999;
	}

  .ratings .ratings-wrapper .content {
		padding: 16px;
	}
	
	.ratings .ratings-wrapper .content .rating-select {
		width: 100%;
		box-sizing: border-box;
		font-size: 0;
		border: 1px solid #FFB000;
		border-right: 0;
		margin-bottom: 11px;
		border-radius: 3px;
	}
	
	.ratings .ratings-wrapper .content .rating-select .item {
		width: 33.3%;
		display: inline-block;
		height: 33px;
		line-height: 33px;
		font-size: 14px;
		text-align: center;
		border-right: 1px solid #FFB000;
		box-sizing: border-box;
		color: #FFB000;
	}

	
	.ratings .ratings-wrapper .content .rating-select .item:last-child img {
		height: 14px;
		vertical-align: middle;
	}
	
	.ratings .ratings-wrapper .content .rating-select .item.active {
		background: #FFB000;
		color: black;
	}
	
	.ratings .ratings-wrapper .content .labels-view {
		/*margin-bottom: 14px;*/
	}
	
	.ratings .ratings-wrapper .content .labels-view .item {
		display: inline-block;
		height: 27px;
		line-height: 27px;
		padding: 0 10px;
		font-size: 12px;
		background: #F4F4F4;
		margin-right: 6px;
		margin-bottom: 6px;
		border-radius: 3px;
		color: #999999;
	}
	
	.ratings .ratings-wrapper .content .labels-view .item.highligh {
		color: #656565;
	}

  .ratings .ratings-wrapper .content .rating-list {}
	
.ratings .ratings-wrapper .content .rating-list .comment-item {
	padding: 16px 16px 16px 0;
	border-bottom: 1px solid #F4F4F4;
	width: 100%;
	box-sizing: border-box;
	display: flex;
}

.ratings .ratings-wrapper .content .rating-list .comment-item .comment-header {
	flex: 0 0 35px;
	margin-right: 11px;
}

.ratings .ratings-wrapper .content .rating-list .comment-item .comment-header img {
	width: 35px;
	height: 35px;
	border-radius: 50%;
}

.ratings .ratings-wrapper .content .rating-list .comment-item .comment-main {
	flex: 1;
}

.ratings .ratings-wrapper .content .rating-list .comment-item .comment-main .user {
	width: 50%;
	float: left;
	font-size: 11px;
	color: #333333;
}

.ratings .ratings-wrapper .content .rating-list .comment-item .comment-main .time {
	width: 50%;
	float: right;
	text-align: right;
	font-size: 9px;
	color: #666666;
}

.ratings .ratings-wrapper .content .rating-list .comment-item .comment-main .star-wrapper {
	float: left;
	margin-top: 12px;
	margin-bottom: 15px;
	width: 100%;
}

.ratings .ratings-wrapper .content .rating-list .comment-item .comment-main .star-wrapper .text {
	color: #999999;
	font-size: 11px;
	float: left;
}

.ratings .ratings-wrapper .content .rating-list .comment-item .comment-main .star-wrapper .star {
	float: left;
	margin-left: 7px;
}

.ratings .ratings-wrapper .content .rating-list .comment-item .comment-main .c_content {
	font-size: 13px;
	line-height: 19px;
	float: left;
	width: 100%;
}

.ratings .ratings-wrapper .content .rating-list .comment-item .comment-main .c_content i {
	color: #576b95;
}

.ratings .ratings-wrapper .content .rating-list .comment-item .comment-main .img-wrapper {
	margin-top: 9px;
	float: left;
}

.ratings .ratings-wrapper .content .rating-list .comment-item .comment-main .img-wrapper img {
	width: 175px;
}
</style>
