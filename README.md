### 注意事项  
> xl-cascader基于element-ui开发，所以你的项目需要先安装[element-ui](https://element.eleme.cn/#/zh-CN/component/installation)。当前展示全国所有省市区信息，自定义省市区开发中，敬请期待！
### npm安装
``` js
npm i xl-cascader --save
```
### 开始使用
``` main.js
import xlCascader from 'xl-cascader'

Vue.use(xlCascader)
```

### 代码示例  
``` html
<el-form ref="form" inline :model="form" label-width="80px">
  <el-form-item label="活动名称">
    <el-input v-model="form.name"></el-input>
  </el-form-item>
  <el-form-item label="省市区">
    <xl-cascader v-model="form.ssq" />
  </el-form-item>
</el-form>
```

### Attributes
| 参数 | 类型 | 说明 | 可选值 | 默认值 |
| - | - | - | - | - |
| size | string | 用于控制该表单内组件的尺寸 | `medium`  `small`  `mini` | - |
| clearable | boolean | 是否可清空 | - | true |