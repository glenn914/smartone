<template>
  <el-container>
    <el-aside width="200px">
      <el-menu mode="vertical" style="height: 100vh" :default-active="$route.path" router>
        <el-submenu v-for="(item, index) in menu.items"
          :index= "`menu-item-${index}`"
          :key="`menu-item-${index}`">
          <template slot="title">{{item.title}}</template>
          <el-menu-item 
          v-for="(subItem, subIndex) in item.items"
          :key="`menu-item-${index}-${subIndex}`"
            :index="subItem.path">
              {{subItem.title}}
          </el-menu-item>
        </el-submenu>
      </el-menu>
      
    </el-aside>
    <el-container>
      <el-header height="">
        <!-- 后台管理界面 -->
        <!-- Header content -->
      </el-header>
      <el-main height="">
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
  
</template>

<script lang="ts">
import {Vue, Component} from "vue-property-decorator";

@Component({})
export default class Main extends Vue {
  menu = {
    items: [
      {
        title: 'Project Manage',
        items: [
          {title:'Home Page',path:'/'},
          {title:'Lunch for children',path:'/projects/lfc/SchoolBrief'},
          {title:'Scholarship',path:'/projects/scholarship'},
        ]
      },
       {
        title: 'User Manage',
        items: [
          {title:'User List',path:'/users/manage'}
        ]
      }
    ]
  }
}
</script>

<style>
body{
  margin: 0;
}
</style>