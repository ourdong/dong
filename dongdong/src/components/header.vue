<template>
  <div class="head" v-show="headflage">
      <div>
          <el-input placeholder="请输入内容" v-model="input" class="input-with-select">

            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>
      </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
        input: '',
        headflage:true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.head {
    padding: 10px 20px;
}
</style>
