<template>
<div>
  <avue-crud :data="data.data" 
  :option= "option"
  @row-save= "create"
  @row-update= "update"
  @row-del = "remove"
  >
  <template  slot="menuLeft">
      <el-button type="primary" size="small" @click="downLoadTemplate">下载模板</el-button> 
      <el-upload  action="/stuinfo/upload" accept="*.csv">
        <el-button size="small" type="primary">批量上传</el-button>
      </el-upload>
  </template>
  </avue-crud>
</div>
</template>

<script lang="ts">
import {Vue, Component} from "vue-property-decorator";

@Component({})
export default class LFC extends Vue{
  data={};
  option = {
    
    title:'lfcList',
    addBtnText:'Create',
    editBtnText:'Edit',
    delBtnText:'Delete',
    excelBtnText:'Excel',
    excelBtn:true,
    column: [
      {prop:"stuName", label: "Name"},
      {prop:"stuAge", label: "Age"},
      {prop:"stuClass", label: "Class"}
    ]
  }

    async create (row,done,loading ){
    await this.$http.post('stuinfo', row)
    this.$message.success("创建成功")
    this.fetch()
    done()
    loading()
  }

  async update (row,index,done,loading){
    const data = JSON.parse(JSON.stringify(row))
    delete data.$index
    await this.$http.put(`stuinfo/${row._id}`,data)
    this.$message.success("更新成功")
    this.fetch()
    done()
    loading()
  }

  async remove(row){
    try {
      await this.$confirm("是否确认删除？")
    }catch (e) {
      return
    }
    await this.$http.delete(`stuinfo/${row._id}`)
    this.$message.success('删除成功')
    this.fetch()
  }

  downLoadTemplate(){
    this.$message.success('下载模板')
  }

  // uploadCsv(){
  //   this.$message.success('上传数据')
  // }
    
  async fetch(){
    const res = await this.$http.get('stuinfo')
    this.data = res
  }

  created(){
    this.fetch()
  }
}
</script>

<style>

</style>