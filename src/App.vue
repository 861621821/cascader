<template>
  <div id="app" style="height: 100vh;">
    <el-form ref="form" inline :model="form" :rules="rules">
      <el-form-item label="姓名" prop="name">
        <el-input v-model="form.name" clearable placeholder="请输入姓名" />
      </el-form-item>
      <el-form-item label="省市区" prop="ssq">
        <xl-cascader v-model="form.ssq" :data="ssqData" clearable />
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import xlCascader from './components/Cascader'
export default {
  components: {
    xlCascader
  },
  data () {
    const validateSsq = (rule, value, callback) => {
      if (value.length) {
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
      },
      ssqData: [
        {
          name: '湖北省',
          districtList: [
            {
              name: '武汉市',
              districtList: [
                { name: '江夏区' },
                { name: '洪山区' },
                { name: '武昌区' }
              ]
            },
            {
              name: '荆门市',
              districtList: [
                { name: '东宝区' },
                { name: '掇刀区' },
                { name: '沙洋县' }
              ]
            }
          ]
        },
        {
          name: '广东省',
          districtList: [
            {
              name: '深圳市',
              districtList: [
                { name: '南山区' },
                { name: '宝安区' },
                { name: '福田区' }
              ]
            },
            {
              name: '广州市',
              districtList: [
                { name: '天河区' },
                { name: '番禺区' },
                { name: '越秀区' }
              ]
            }
          ]
        },
        {
          name: '河南省',
          districtList: [
            {
              name: '信阳市',
              districtList: [
                { name: '淮滨县' },
                { name: '罗山县' }
              ]
            },
            {
              name: '南阳市',
              districtList: [
                { name: '西峡县' },
                { name: '卧龙区' }
              ]
            }
          ]
        }
      ]
    }
  },
  methods: {

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
