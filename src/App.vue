<template>
  <div id="app" style="height: 100vh;">
    <el-form ref="form" inline :model="form" :rules="rules">
      <el-form-item label="姓名" prop="name">
        <el-input clearable v-model="form.name" placeholder="请输入姓名"></el-input>
      </el-form-item>
      <el-form-item label="省市区" prop="ssq">
        <xl-cascader clearable v-model="form.ssq"/>
      </el-form-item>
    </el-form>
    <el-button @click="fn">Submit</el-button>
  </div>
</template>

<script>
import xlCascader from './components/Cascader'
export default {
  components: {
    xlCascader
  },
  data () {
    const validateSsq = (rule, value, callback)=> {
      console.log(value);
      if (value.length){
        callback()
      } else {
        callback(new Error('请选择省市区'))
      }
    }
    return {
      rules: {
        name: [{ required: true, message: '请输入活动名称' }],
        ssq: [{ required: true, validator: validateSsq }]
      },
      form: {
        name: '',
        ssq: []
      }
    }
  },
  methods: {
    fn(){
      console.log(this.form);
      this.$refs.form.validate(v=>{
        console.log(v);
      })
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  margin-top: 500px;
  margin-left: 50px;
}
.el-form-item__content{
  width: 200px;
}
</style>
