<template>
  <div style="padding: 20px;">
    <div>
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
      <el-form v-if="ruleForm.numArr.length > 0" :model="ruleForm" ref="ruleForm" label-width="120px" class="borderSty">
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
        <el-row>
          <el-col :span="12">
            <el-form-item>
              <el-button type="success" round @click="submitForm('ruleForm')">立即创建</el-button>
              <el-button round @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <p v-if="pVal" style="padding-left: 53px">参考意见：{{ pVal }}</p>
          </el-col>
        </el-row>
      </el-form>
    </div>
    <div style="margin-top: 5px">
      <div style="display: flex;justify-content:flex-start;align-items: center">
        <strong style="padding-right: 10px">工艺选择:</strong>
        <el-radio-group v-model="radio">
          <el-radio :label="1">干式工艺</el-radio>
          <el-radio :label="2">湿式工艺</el-radio>
        </el-radio-group>
        <el-button type="success" round @click="submitRadio" style="margin-left: 20px">提交</el-button>
      </div>
      <p v-if="pVal1">参考意见：{{ pVal1 }}</p>
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
      pVal: '',
      pVal1: '',
      radio: 1,
      options: [],
      value: '',
      material_ts: '',
      obj: {},
      ruleForm: {
        numArr: []
      },
      params: [],
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
      this.params = JSON.parse(JSON.stringify(this.ruleForm.numArr))
    },
    submitRadio () {
      let val = {}
      val.gonyi = this.radio
      this.params.push(val)
      console.log(this.ruleForm.numArr, '111111111111111111')
      this.$axios.post('getMassage', this.params)
        .then(res => {
          console.log(res, '返回数据')
          if (res.status === 200) {
            this.$message({
              type: 'success',
              message: '提交成功'
            })
            this.pVal1 = res.data
          }
        })
      console.log(this.ruleForm.numArr, '2222222222222222222')
    },
    submitForm (formName) {
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
                this.pVal = res.data
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
