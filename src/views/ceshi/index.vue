<template>
  <div style="padding: 20px;">
    <div v-if="isShow">
      <div style="display: flex;justify-content: flex-start;align-items: center">
        <strong style="width: 80px">物料选择:</strong>
        <el-select v-model="value" placeholder="请选择" filterable multiple value="" @change="handleChanges" style="width: 100%;flex: 1">
          <el-option
            v-for="item in options"
            :key="item.material_id"
            :label="item.material_name"
            :value="item.material_id">
          </el-option>
        </el-select>
      </div>
      <el-form v-if="ruleForm.numArr.length > 0" :model="ruleForm" ref="ruleForm" label-width="100px" class="borderSty">
        <div v-for="(item,index) in ruleForm.numArr" :key="index">
          <el-row>
            <el-col :span="12">
              <el-form-item :label="item.material_name + 'ts值'" :prop="'numArr.' + index + '.material_ts'" :rules="[{required: true, message: '请填写ts值', trigger: 'blur'}]">
                <el-input-number v-model="item.material_ts" :precision="2"></el-input-number>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="日上料量" :prop="'numArr.' + index + '.riShangLL'">
                <el-input-number v-model="item.riShangLL" :precision="2"></el-input-number>
              </el-form-item>
            </el-col>
          </el-row>
        </div>
        <el-form-item>
          <el-button type="success" round @click="submitForm('ruleForm')">立即创建</el-button>
          <el-button round @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div v-if="!isShow">
      <div style="display: flex;justify-content:flex-start;align-items: center">
        <strong style="padding-right: 10px">工艺选择:</strong>
        <el-radio-group v-model="radio">
          <el-radio :label="1">干式工艺</el-radio>
          <el-radio :label="2">湿式工艺</el-radio>
        </el-radio-group>
      </div>
      <el-button type="success" round @click="submitRadio">提交</el-button>
    </div>
  </div>
</template>
<script>
import ElRow from 'element-ui/packages/row/src/row'
import ElCol from 'element-ui/packages/col/src/col'

export default {
  components: {
    ElCol,
    ElRow},
  name: '',
  data () {
    return {
      isShow: true,
      radio: 1,
      options: [],
      value: '',
      material_ts: '',
      obj: {},
      ruleForm: {
        numArr: []
      },
      rules: {
        material_ts: [
          {required: true, message: '请填写ts值', trigger: 'blur'}
        ]
      }
    }
  },
  created () {
    this.getVal()
  },
  methods: {
    // 获取物料种类
    getVal () {
      this.$axios.get('getMaterialName')
        .then(res => {
          if (res.status === 200) {
            this.options = res.data
          }
        })
    },
    handleChanges (val) {
      this.obj = {}
      this.ruleForm.numArr = []
      for (let i = 0; i < val.length; i++) {
        this.options.forEach(item => {
          if (item.material_id === val[i]) {
            this.obj.material_ts = item.material_ts
            this.obj.material_id = item.material_id
            this.obj.material_name = item.material_name
            this.ruleForm.numArr.push(this.obj)
            this.obj = {}
          }
        })
      }
      console.log(this.ruleForm.numArr, '5555555555555555')
    },
    submitRadio () {
      let val = {}
      val.gonyi = this.radio
      this.$axios.post('getMassage', val)
        .then(res => {
          console.log(res, '返回数据')
          if (res.status === 200) {
            this.$message({
              type: 'success',
              message: '提交成功'
            })
          }
        })
    },
    submitForm (formName) {
      //      console.log(this.ruleForm.numArr, 'numArr')
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$axios.post('getMethod', this.ruleForm.numArr)
            .then(res => {
              console.log(res, '返回数据')
              if (res.status === 200) {
                this.$message({
                  type: 'success',
                  message: '提交成功'
                })
                this.isShow = false
              }
            })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>
<style scoped>
  .borderSty{
    border:1px solid #DCDFE6;
    padding: 20px 20px 0 20px;
    margin-top: 10px;
    border-radius: 4px
  }
  .el-radio{
    margin-bottom: 0;
  }
</style>
