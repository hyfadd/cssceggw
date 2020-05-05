<template>
  <div style="padding: 20px;">
    <div>
      <div style="display: flex;justify-content: flex-start;align-items: center">
        <strong style="width: 80px">物料选择:</strong>
        <el-select v-model="value" placeholder="请选择" filterable multiple value="" @change="handleChanges"
                   style="width: 100%;flex: 1">
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
              <el-form-item :label="item.material_name + 'ts值'" :prop="'numArr.' + index + '.material_ts'"
                            :rules="[{required: true, message: '请填写ts值', trigger: 'blur'}]">
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
      <!--<p v-if="pVal1">参考意见：{{ pVal1 }}</p>-->
    </div>
    <div id="flowchart">
    </div>
  </div>
</template>
<script>
/* eslint-disable indent,new-cap,quotes */
import dagreD3 from 'dagre-d3'
import * as d3 from 'd3'

export default {
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
      document.getElementById('flowchart').innerHTML = ''
      this.$axios.post('getMassage/' + this.radio, this.params)
        .then(res => {
          console.log(res.data, '返回数据')
          if (res.status === 200) {
            this.$message({
              type: 'success',
              message: '提交成功'
            })
            this.pVal1 = res.data
            // 获取D3
            var g = new dagreD3.graphlib.Graph().setGraph({})
            console.log(g, 'gg')
            // 添加节点
            this.pVal1.forEach((item, index) => {
              item.rx = item.ry = 5// 圆角
              g.setNode(item.tn_id, item)
              // 节点颜色 fill指节点背景色，stroke指节点描边颜色
               g.node(item.tn_id).style = 'fill:' + 'green' + ';stroke: green;'
            })
            // 链接关系
            this.pVal1.forEach(item => {
              g.setEdge(item.tn_id, item.next_node, {
                // 连线上的条件字
                label: item.label,
                // 连线的颜色
                style: 'stroke: #0fb2cc; fill: none;',
                // 箭头颜色
                arrowheadStyle: 'fill: #0fb2cc;stroke: #0fb2cc;',
                // 箭头形状（vee表示箭头是尖的，默认是平的）
                arrowhead: 'vee'
              })
            })
            g.nodes().forEach(function (v, index) {
              // 去除第一个为undefined的node，造成undefined的具体原因还不明确，假如后面不报错了，把这一行删掉
              if (index === 0) {
                g.removeNode(v)
              }
              console.log('Node ' + v + ': ' + JSON.stringify(g.node(v)))
            })
            g.edges().forEach(function (e) {
              console.log('Edge ' + e.v + ' -> ' + e.w + ': ' + JSON.stringify(g.edge(e)))
            })
            // 绘制图形(此处和darg中的不同)
            var svg = d3.select('#flowchart')
              .append('svg')
              .attr('width', 1000)
              .attr('height', 1500)
            var inner = svg.append('g')
            // 缩放
            var zoom = d3.zoom().on('zoom', function () {
              inner.attr('transform', d3.event.transform)
            })
            svg.call(zoom)
            var render = new dagreD3.render()
            render(inner, g)
            let code
            inner.selectAll('g.node')
              .on('click', e => { // 点击事件
                code = this.list.nodeInfos.filter(item => {
                  return item.id === e
                })
                console.log(code)
              })
              .on('mouseover', e => { // 鼠标经过事件
                let curNode = g.node(e)
                console.log(curNode, 'curNode')
              })
            // 初始化缩放比例
            var initialScale = 1
            // 设置宽高
            svg.call(
              zoom.transform,
              d3.zoomIdentity
                .translate(
                  (svg.attr('width') - g.graph().width * initialScale) / 2,
                  20
                )
                .scale(initialScale)
            )
            svg.attr('height', g.graph().height * initialScale + 40)
            this.$forceUpdate()
          }
        })
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
  .borderSty {
    border: 1px solid #DCDFE6;
    padding: 20px 20px 0 20px;
    margin-top: 10px;
    border-radius: 4px
  }

  .el-radio {
    margin-bottom: 0;
  }
  svg {
    font-size: 14px;
  }
  .node rect {
    stroke: #606266;
    fill: #fff;
  }
  .edgePath path {
    stroke: #606266;
    fill: #333;
    stroke-width: 1.5px;
  }
</style>
