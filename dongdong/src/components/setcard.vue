<template>
  <div class="form">
      <span>{{this.$route.params.id}}</span>
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" size="small" label-width="80px" class="demo-ruleForm">
          <el-form-item label="活动名称" prop="name">
            <el-input v-model="ruleForm.name"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
            <el-button @click="resetForm('ruleForm')">重置</el-button>
          </el-form-item>
      </el-form>
      <div class="squrie">
          测试测试测试测试测试测试测试测试测试测试测试
      </div>
  </div>
</template>

<script>
//import { mapState } from 'vuex'

export default {
  data () {
    return {
        ruleForm: {
          name: ''
      },
      rules: {
            name: [
              { required: true, message: '请输入活动名称', trigger: 'blur' },
              { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
            ]
        }
      }
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
    },
    // removehead() {
    //     this.$store.commit("headhide",false);
    // },
    // removefoot() {
    //     this.$store.commit("foothide",false);
    // }
  },
//   computed:{
//           ...mapState(['headflage','footflage'])
//         },
//   mounted () {
//     this.removehead();
//     this.removefoot();
// }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.form {
    width: 80%;
    margin: 0 auto;
}
.squrie {

}
</style>
