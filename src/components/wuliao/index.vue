<template>
  <div>
    <el-button type="success" size="mini" round @click="addMsg">新增</el-button>
    <el-table :data="userMsg" border style="width: 100%">
      <el-table-column prop="custIndustry" label="行业"></el-table-column>
      <el-table-column prop="custName" label="姓名"></el-table-column>
      <el-table-column prop="custPhone" label="电话"></el-table-column>
      <el-table-column prop="custLevel" label="级别"></el-table-column>
      <el-table-column prop="custSource" label="来源"></el-table-column>
      <el-table-column prop="custAddress" label="地址"></el-table-column>
    </el-table>
    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose"
    >
      <dialog-component :isEdit="isEdit"></dialog-component>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false"
          >确 定</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>
<script>
import DialogComponent from './component/index'
export default {
  components: {
    DialogComponent
  },
  data () {
    return {
      userMsg: [],
      dialogVisible: false,
      isEdit: false
    }
  },
  created () {
    this.cilckFun()
  },
  methods: {
    cilckFun () {
      this.$axios.get('/aa').then(res => {
        this.userMsg = res.data
        console.log(res, 'kkkkkkkkkkkkkkkkkk')
      })
    },
    handleClose (done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done()
        })
        .catch(_ => { })
    },
    addMsg () {
      this.dialogVisible = true
      this.isEdit = false
    }
  }
}
</script>
