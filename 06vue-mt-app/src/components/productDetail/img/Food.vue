<template>
	<transition name="food-detail">
		<div class="food" v-show="showFlag" ref="foodView">
			<div class="food-wrapper">

				<div class="food-content">
					<div class="img-wrapper">
						<img class="food-img" :src="food.picture" />

						<span class="close-bt icon-close" @click="closeView"></span>
						<img class="share-bt" src="./share.png" />
						<img class="more-bt" src="./more.png" />
					</div>
					<div class="content-wrapper">
						<h3 class="name">{{food.name}}</h3>
						<p class="saled">{{food.month_saled_content}}</p>
						<img class="product" v-show="food.product_label_picture" :src="food.product_label_picture" />
						<p class="price">
							<span class="text">￥{{food.min_price}}</span>
							<span class="unit">/{{food.unit}}</span>
						</p>
						<div class="cartcontrol-wrapper">
							<Cartcontrol :food="food"></Cartcontrol>
						</div>
						<div class="buy" v-show="!food.count || food.count==0" @click="addFirst">
							选规格
						</div>
					</div>
				</div>

				<Split></Split>

				<div class="rating-wrapper">
					<div class="rating-title">
						<div class="like-ratio" v-if="food.rating">
							<span class="title">{{food.rating.title}}</span>
							<span class="ratio">
							(
								{{food.rating.like_ratio_desc}}
								<i>{{food.rating.like_ratio}}</i>
							)
						</span>
						</div>
						<div class="snd-title" v-if="food.rating">
							<span class="text">{{food.rating.snd_title}}</span>
							<span class="icon icon-keyboard_arrow_right"></span>
						</div>
					</div>

					<ul class="rating-content" v-if="food.rating">
						<li v-for="comment in food.rating.comment_list" class="comment-item">
							<div class="comment-header">
								<img :src="comment.user_icon" v-if="comment.user_icon" />
								<img src="./anonymity.png" v-if="!comment.user_icon" />
							</div>
							<div class="comment-main">
								<div class="user">
									{{comment.user_name}}
								</div>
								<div class="time">
									{{comment.comment_time}}
								</div>
								<div class="content">
									{{comment.comment_content}}
								</div>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</transition>
</template>

<script>
	// 导入BScroll
	import BScroll from 'better-scroll';
	// 导入Cartcontrol
	import Cartcontrol from 'components/Cartcontrol/Cartcontrol';
	// 导入Vue
	import Vue from 'vue';
	// 导入Split
	import Split from 'components/Split/Split';

	export default {
		data() {
			return {
				showFlag: false
			}
		},
		props: {
			food: {
				type: Object
			}
		},
		methods: {
			// 父组件是可以调用子组件的方法
			showView() {
				this.showFlag = true;

				// BScroll初始化
				this.$nextTick(() => {
					if(!this.scroll) {
						this.scroll = new BScroll(this.$refs.foodView, {
							click: true
						});
					} else {
						this.scroll.refresh();
					}
				});
			},
			closeView() {
				this.showFlag = false;
			},
			addFirst() {
				Vue.set(this.food, 'count', 1);
			}
		},
		components: {
			Cartcontrol,
			BScroll,
			Split
		}
	}
</script>

<style>
.food{
	position: fixed;
	left: 0;
	top: 0;
	bottom: 51px;
	background: white;
	width: 100%;
	z-index: 90;
}

.food-detail-enter-active, .food-detail-leave-active {
  transition:  1.0s
}
.food-detail-enter, .food-detail-leave-to {
  transform: translateX(100%);
}

.food .food-wrapper .food-content{
	
}
.food .food-wrapper .food-content .img-wrapper{
	position: relative;
	width: 100%;
	height: 0;
	
	/* 高度如何撑开？
	 在定位中，使用padding-top或padding-bottom设置为100%，其实盒子高度会根据盒子的宽度进行计算
	 */
	padding-top: 100%;
}
.food .food-wrapper .food-content .img-wrapper .food-img{
	position: absolute;
	left: 0;
	bottom: 0;
	width: 100%;
	height: 100%;
}
.food .food-wrapper .food-content .img-wrapper .close-bt{
	width: 30px;
	height: 30px;
	position: absolute;
	left: 10px;
	top: 10px;
	text-align: center;
	font-size: 30px;
	color: white;
	background: #7f7f7f;
	border-radius: 50%;
}
.food .food-wrapper .food-content .img-wrapper .share-bt,
.food .food-wrapper .food-content .img-wrapper .more-bt
{
	width: 30px;
	height: 30px;
	position: absolute;
	top: 10px;
}
.food .food-wrapper .food-content .img-wrapper .share-bt{
	right: 50px;
}
.food .food-wrapper .food-content .img-wrapper .more-bt{
	right: 10px;
}

.food .food-wrapper .food-content .content-wrapper{
	padding: 0 0 16px 16px;
	position: relative;
}
.food .food-wrapper .food-content .content-wrapper .name{
	font-size: 15px;
	color: #333333;
	line-height: 30px;
	font-weight: bold;
}
.food .food-wrapper .food-content .content-wrapper .saled{
	font-size: 11px;
	color: #9d9d9d;
	margin-bottom: 6px;
}
.food .food-wrapper .food-content .content-wrapper .product{
	height: 15px;
	margin-bottom: 16px;
}
.food .food-wrapper .food-content .content-wrapper .price{
	font-size: 0;
}
.food .food-wrapper .food-content .content-wrapper .price .text{
	font-size: 17px;
	color: #FB4E44;
}
.food .food-wrapper .food-content .content-wrapper .price .unit{
	font-size: 11px;
	color: #9D9D9D;
}
.food .food-wrapper .food-content .cartcontrol-wrapper{
	position: absolute;
	right: 12px;
	bottom: 10px;
	padding: 2px;
}
.food .food-wrapper .food-content .buy{
	width: 64px;
	height: 30px;
	font-size: 12px;
	line-height: 30px;
	text-align: center;
	background: #FFD161;
	border-radius: 30px;
	position: absolute;
	right: 12px;
	bottom: 10px;
}


.food .food-wrapper .rating-wrapper{
	padding-left: 16px;
}
.food .food-wrapper .rating-wrapper .rating-title{
	padding: 16px 16px 16px 0;
}
.food .food-wrapper .rating-wrapper .rating-title .like-ratio{
	float: left;
	font-size: 0;
}
.food .food-wrapper .rating-wrapper .rating-title .like-ratio .title{
	font-size: 13px;
}
.food .food-wrapper .rating-wrapper .rating-title .like-ratio .ratio{
	font-size: 11px;
}
.food .food-wrapper .rating-wrapper .rating-title .like-ratio .ratio i{
	color: #FB4E44;
	font-size: 11px;
}

.food .food-wrapper .rating-wrapper .rating-title .snd-title{
	float: right;
	font-size: 0;
}
.food .food-wrapper .rating-wrapper .rating-title .snd-title .text,
.food .food-wrapper .rating-wrapper .rating-title .snd-title .icon
{
	font-size: 13px;
	color: #9D9D9D;
	display: inline-block;
}
.food .food-wrapper .rating-wrapper .rating-title .snd-title .icon{
	margin-left: 12px;
}


.food .food-wrapper .rating-wrapper .comment-item{
	padding: 15px 14px 17px 0;
	border-bottom: 1px solid #F4F4F4;
	width: 100%;
	box-sizing: border-box;
	display: flex;
}
.food .food-wrapper .rating-wrapper .comment-item .comment-header{
	flex: 0 0 41px;
	margin-right: 10px;
}
.food .food-wrapper .rating-wrapper .comment-item .comment-header img{
	width: 41px;
	height: 41px;
	border-radius: 50%;
}

.food .food-wrapper .rating-wrapper .comment-item .comment-main{
	flex: 1;
	margin-top: 6px;
}
.food .food-wrapper .rating-wrapper .comment-item .comment-main .user{
	width: 50%;
	float: left;
	font-size: 12px;
	color: #333333;
}
.food .food-wrapper .rating-wrapper .comment-item .comment-main .time{
	width: 50%;
	float: right;
	text-align: right;
	font-size: 10px;
	color: #666666;
}
.food .food-wrapper .rating-wrapper .comment-item .comment-main .content{
	margin-top: 17px;
	font-size: 13px;
	line-height: 19px;
}

</style>