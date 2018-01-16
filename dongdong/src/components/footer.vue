<template>
  <div class="foo" v-show="footflage">
      <div class="" v-show="userflage">
          <el-row :gutter="30">
              <el-col :span="12">
                  <div class="grid-content bg-purple" @click="loginflage=true;userflage=false">
                      <router-link :to="{ name: '', params: {} }">我是用户</router-link>
                  </div>
              </el-col>
              <el-col :span="12">
                  <div class="grid-content bg-purple" @click="userflage=false;loginflage=true">
                      <router-link :to="{ name: 'setcard', params: {id:123} }">我是供应商</router-link>
                  </div>
              </el-col>
         </el-row>
      </div>
      <div class="" v-show="loginflage">
          <el-row :gutter="10">
              <el-col :span="8">
                  <div class="grid-content bg-purple">
                      <router-link :to="{ name: 'randomlist', params: {} }">首页</router-link>
                  </div>
              </el-col>
              <el-col :span="8">
                  <div class="grid-content bg-purple">
                      <router-link :to="{ name: 'newslist', params: {} }">消息</router-link>
                  </div>
              </el-col>
              <el-col :span="8">
                  <div class="grid-content bg-purple">
                      <router-link :to="{ name: 'personal', params: {} }">我</router-link>
                  </div>
              </el-col>
         </el-row>
      </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
        footflage:true,
        loginflage:false,
        userflage:true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.foo {
    position: fixed;
    width: 100%;
    bottom: 0;
    height: 30px;
    line-height: 30px;
}
</style>
