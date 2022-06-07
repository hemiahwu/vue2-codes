const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

const Post = require("../../models/Post");
const Profile = require("../../models/Profiles");


const validatePostInput = require("../../validation/post");


// $route  GET api/posts/test
// @desc   返回的请求的json数据
// @access public
router.get("/test",(req,res) => {
  res.json({msg:"posts works"})
})


// $route  POST api/posts
// @desc   创建一个评论接口
// @access Private
router.post("/",passport.authenticate('jwt', { session: false }),(req,res) => {
  const {errors,isValid} = validatePostInput(req.body);

  // 判断isValid是否通过
  if(!isValid){
    return res.status(400).json(errors);
  }

  const newPost = new Post({
    text:req.body.text,
    name:req.body.name,
    avatar:req.body.avatar,
    user:req.user.id
  });

  newPost.save().then(post => res.json(post));
})


// $route  GET api/posts
// @desc   获取评论信息
// @access public
router.get("/",(req,res) => {
  Post.find()
      .sort({date: -1})
      .then(posts => res.json(posts))
      .catch(err => res.status(404).json({nopostsfound:"找不到任何评论信息"}))
})

// $route  GET api/posts/:id
// @desc   获取单个评论信息
// @access public
router.get("/:id",(req,res) => {
  Post.findById(req.params.id)
      .then(post => res.json(post))
      .catch(err => res.status(404).json({nopostsfound:"找不到该评论信息"}))
})

// $route  DELETE api/posts/:id
// @desc   删除单个评论信息
// @access Private
router.delete("/:id",passport.authenticate('jwt', { session: false }),(req,res) => {
  Profile.findOne({user:req.user.id}).then(profile => {
    Post.findById(req.params.id)
        .then(post => {
          // 判断是否是本人
          if(post.user.toString() !== req.user.id){
            return res.status(401).json({notauthorized:"用户非法操作!"})
          }

          post.remove().then(() => res.json({success:true}))
        })
        .catch(err => res.status(404).json({postnotfound:"没有该评论信息"}))
  })
})


// $route  POST api/posts/like/:id
// @desc   点赞接口
// @access Private
router.post("/like/:id",passport.authenticate('jwt', { session: false }),(req,res) => {
  Profile.findOne({user:req.user.id}).then(profile => {
    Post.findById(req.params.id)
        .then(post => {
          if(post.likes.filter(like => like.user.toString() === req.user.id).length > 0){
            return res.status(400).json({alreadyliked:"该用户已赞过"})
          }

          post.likes.unshift({user:req.user.id})

          post.save().then(post => res.json(post))
        })
        .catch(err => res.status(404).json({likederror:"点赞错误"}))
  })
})


// $route  POST api/posts/unlike/:id
// @desc   取消点赞接口
// @access Private
router.post("/unlike/:id",passport.authenticate('jwt', { session: false }),(req,res) => {
  Profile.findOne({user:req.user.id}).then(profile => {
    Post.findById(req.params.id)
        .then(post => {
          if(post.likes.filter(like => like.user.toString() === req.user.id).length === 0){
            return res.status(400).json({notliked:"该用户没有点过赞"})
          }

          // 获取要删掉的user id
          const removeIndex = post.likes.map(item => item.user.toString()).indexOf(req.user.id);

          post.likes.splice(removeIndex,1);

          post.save().then(post => res.json(post))
        })
        .catch(err => res.status(404).json({likederror:"取消点赞错误"}))
  })
})

// $route  POST api/posts/comment/:id
// @desc   添加评论接口
// @access Private
router.post("/comment/:id",passport.authenticate('jwt', { session: false }),(req,res) => {
  const {errors,isValid} = validatePostInput(req.body);

  // 判断isValid是否通过
  if(!isValid){
    return res.status(400).json(errors);
  }

  Post.findById(req.params.id)
      .then(post => {
        const newComment = {
          text:req.body.text,
          name:req.body.name,
          avatar:req.body.avatar,
          user:req.user.id
        }

        post.comments.unshift(newComment);

        // save
        post.save().then(post => res.json(post));
      })
      .catch(err => res.status(404).json({postnotfound:"添加评论错误"}))
})


// $route  DELETE api/posts/comment/:id
// @desc   删除评论接口
// @access Private
router.delete("/comment/:id/:comment_id",passport.authenticate('jwt', { session: false }),(req,res) => {
  
  Post.findById(req.params.id)
      .then(post => {
        if(post.comments.filter(comment => comment._id.toString() === req.params.comment_id).length === 0){
          return res.status(404).json({commentnotexists:"该评论不存在"})
        }

        // 找到该评论的index
        const removeIndex = post.comments.map(item => item._id.toString()).indexOf(req.params.comment_id);

        post.comments.splice(removeIndex,1);

        // save
        post.save().then(post => res.json(post));
      })
      .catch(err => res.status(404).json({postnotfound:"删除评论错误"}))
})

module.exports = router;