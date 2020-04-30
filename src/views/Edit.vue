<!-- 文章编辑页面：再如果一个前端的MarkDowm编辑器 -->
<template>
  <div>
    <!-- 文章标题 -->
    <el-input placeholder="输入标题…" v-model.trim="post.title"></el-input>
    <!-- Markdown编辑器 -->
    <mavon-editor
      ref="md"
      @imgAdd="$imgAdd"
      v-model.trim="post.markdownContent"
      placeholder="输入正文…"
      @save="$save"
    ></mavon-editor>
    <br />
    <span>标签:</span>
    <!-- 点一下这个标签的就把，点击的标签加入到post.tags -->
    <el-tag type="info" v-for="tag in optionTags" :key="tag.id" @click="selectTag(tag)">{{tag.name}}</el-tag>
    <el-input
      class="input-new-tag"
      v-if="inputVisible"
      v-model="newTag"
      ref="saveTagInput"
      size="small"
      @keyup.enter.native="handleInputConfirm"
    ></el-input>
    <el-button v-else class="button-new-tag" size="small" @click="showInput">+ New Tag</el-button>
    <br />
    <span>已选择标签：</span>
    <!-- 关闭的时候就把标签移除掉 -->
    <el-tag
      v-for="(tag,index) in this.post.tags"
      :key="tag.id+'d'"
      closable
      :disable-transitions="false"
      @close="handleClose(index)"
    >{{tag.name}}</el-tag>
    <br />
    分类：
    <select name="category" id="category" v-model="post.category">
      <option
        v-for="category in categoryList"
        :key="category.id"
        :value="category"
      >{{category.name}}</option>
    </select>
  </div>
</template>

<script>
//引入网络模块
import { instance1, instance2, instance3 } from "../network/index";

export default {
  name: "Edit",
  data() {
    return {
      newTag: "",
      inputVisible: false,
      //该用户所有可选的标签
      optionTags: [],
      //该用户所有可选的标签
      categoryList: [],
      post: {
        title: "",
        markdownContent: "",
        //这篇文章的标签
        tags: [],
        //新建文章的分类
        category: null
      },
      token: ""
    };
  },
  created() {
    instance3({
      url: "/tag",
      method: "GET"
    })
      .then(res => {
        this.optionTags = res.data;
      })
      .catch(err => {
        console.log("获取标签列表失败");
      });
    instance3({
      url: "/category",
      method: "GET"
    })
      .then(res => {
        this.categoryList = res.data;
      })
      .catch(err => {
        console.log("获取分类列表失败");
      });
  },
  methods: {
    // 绑定@imgAdd event，编辑器中图片上传事件
    async $imgAdd(pos, $file) {
      //第一步：到业务服务器中请求一个token
      await instance1({
        url: "/upToken/postImage",
        method: "GET"
      })
        .then(res => {
          //将token存起来，下一个请求要使用
          this.token = res.data;
        })
        .catch(err => {
          //获取上传凭证失败消息提示
          this.$message.error("获取失败");
        });
      //第二步：手持上传凭证将图片上传到七牛云图床
      let formdata = new FormData();
      formdata.append("file", $file);
      formdata.append("token", this.token);
      await instance2({
        //华南存储区域：客户端上传
        url: "http://upload-z2.qiniup.com",
        method: "POST",
        data: formdata
      })
        .then(res => {
          // 将返回的url替换到文本原位置![...](0) -> ![...](url)
          /**
           * $vm 指为mavonEditor实例，可以通过如下两种方式获取
           * 1. 通过引入对象获取: `import {mavonEditor} from ...` 等方式引入后，`$vm`为`mavonEditor`
           * 2. 通过$refs获取: html声明ref : `<mavon-editor ref=md ></mavon-editor>，`$vm`为 `this.$refs.md`
           */
          this.$refs.md.$img2Url(
            pos,
            "http://cdn.hikariblog.cn/" + res.data.hash
          );
        })
        .catch(err => {
          //上传失败消息提示
          this.$message.error("上传失败");
        });
    },
    //两种情况，到时候在进行区分
    //一、保存文章 二、修改文章
    //可以通过路径参数传递进来一个值，然后根据这个值判断是保存还是修改
    //或者使用子组件占位的方式，切换两个组件，感觉后面这个工作量更大
    //明明一个if语句能解决的问题，不要搞得那么复杂
    $save() {
      //首先对参数进行校验
      //标题校验
      if (this.post.title.length < 2 || this.post.title.length > 50) {
        this.$message.error("标题长度最短为2个字符，最长为50个字符");
      } else {
        //内容校验
        if (this.post.markdownContent.length < 2) {
          this.$message.error("内容最少要有两个字符");
        } else {
          instance3({
            url: "/post",
            method: "POST",
            data: {
              title: this.post.title,
              markdownContent: this.post.markdownContent,
              tags: this.post.tags,
              category:this.post.category
            }
          })
            .then(res => {
              //这里我要跳转到查看文章页面，查看新建的文章
              //点击之后不能返回
              console.log(this.post.title);
              this.$router.replace("/post/" + res.data);
            })
            .catch(err => {
              //注册失败消息提示
              this.$message.error(err.response.data.message);
            });
        }
      }
    },
    selectTag(tag) {
      this.post.tags.push(tag);
    },
    handleClose(index) {
      this.post.tags.splice(index, 1);
    },
    handleInputConfirm() {
      //新建标签，成功的时候再申请新的标签列表
      let newTag = this.newTag;
      if (newTag) {
        instance3({
          url: "/tag/" + newTag,
          method: "POST"
        })
          .then(res => {
            instance3({
              url: "/tag",
              method: "GET"
            })
              .then(res => {
                this.optionTags = res.data;
              })
              .catch(err => {
                console.log("获取标签失败");
              });
          })
          .catch(err => {
            console.log("创建失败");
          });
      }
      this.inputVisible = false;
      this.newTag = "";
    },
    showInput() {
      this.inputVisible = true;
    }
  },
  components: {
    showInput() {
      this.inputVisible = true;
    }
  }
};
</script>
<style scoped>
.el-tag + .el-tag {
  margin-left: 10px;
}
.button-new-tag {
  margin-left: 10px;
  height: 32px;
  line-height: 30px;
  padding-top: 0;
  padding-bottom: 0;
}
.input-new-tag {
  width: 90px;
  margin-left: 10px;
  vertical-align: bottom;
}
</style>