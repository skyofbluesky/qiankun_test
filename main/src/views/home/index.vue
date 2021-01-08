<template>
  <div>
    <div class="x-header">
      <div class="header-title-container">
        <b class="header-title">
          WIWO车联网平台
        </b>
        <el-button class="menu-collapse-btn" type="text" @click="isCollapse = !isCollapse">
          <i :class="isCollapse?'el-icon-s-unfold':'el-icon-s-fold'"></i>
        </el-button>
      </div>
      <div>
        <el-menu :default-active="activeIndex" class="x-header-menu" mode="horizontal" @select="handleSelect">
          <el-menu-item index="1" @click="changeView('/sub-app-1')">中控台</el-menu-item>
          <el-submenu index="2">
            <template slot="title">设备管理</template>
            <el-menu-item index="2-1" @click="changeView('/central-controller')">终端绑定</el-menu-item>
            <el-menu-item index="2-2">选项2</el-menu-item>
            <el-menu-item index="2-3">选项3</el-menu-item>
            <el-submenu index="2-4">
              <template slot="title">选项4</template>
              <el-menu-item index="2-4-1">选项1</el-menu-item>
              <el-menu-item index="2-4-2">选项2</el-menu-item>
              <el-menu-item index="2-4-3">选项3</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-menu-item index="3">消息中心</el-menu-item>
          <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
        </el-menu>
      </div>
      <!--<el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">-->
      <!--<el-radio-button :label="false">展开</el-radio-button>-->
      <!--<el-radio-button :label="true">收起</el-radio-button>-->
      <!--</el-radio-group>-->
    </div>
    <div class="x-main">
      <div class="x-aside" ref="xAside">
        <div class="user-info-wrapper" v-if="!isCollapse">
          <div class="avatar-wrapper">
            <img class="img-avatar" src="@/assets/avatar/avatar.png" alt="">
          </div>
          <div class="info-list">
            <div class="info-list-name">{{userName}}</div>
            <div class="info-list-role">{{userRole}}</div>
            <!--<div class="operate-panel">-->
            <!--<div>-->
            <!--<i class=""></i>-->
            <!--<span>在线</span>-->
            <!--</div>-->
            <!--<div>-->
            <!--<i></i>-->
            <!--<span>注销</span>-->
            <!--</div>-->
            <!--</div>-->
          </div>
        </div>
        <el-menu
          v-cloak
          default-active="1-4-1"
          class="el-menu-vertical-demo v-cloak"
          @open="handleOpen"
          @close="handleClose"
          :collapse="isCollapse"
          :collapse-transition="false"
        >
          <el-menu-item index="2" @click="changeView('/central-controller')">
            <i class="el-icon-menu"></i>
            <span>中控台</span>
          </el-menu-item>
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span slot="title">设备管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-1" @click="changeView('/sub-app-1')">
                子应用1
              </el-menu-item>
              <el-menu-item index="1-2" @click="changeView('/central-controller')">
                子应用2
              </el-menu-item>
              <el-menu-item index="1-3" @click="changeView('/sub-app-html-1')">
                子应用-纯HTML
              </el-menu-item>
            </el-menu-item-group>
            <el-submenu index="1-4">
              <span slot="title">选项4</span>
              <el-menu-item index="1-4-1">选项1</el-menu-item>
            </el-submenu>
          </el-submenu>

        </el-menu>
      </div>
      <div class="x-content" ref="xContent">
        <div id="micro-view"></div>
      </div>
    </div>
    <!--<el-container>-->
    <!--<el-header>Header</el-header>-->
    <!--<el-container>-->
    <!--<el-aside>-->
    <!--<el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">-->
    <!--<el-radio-button :label="false">展开</el-radio-button>-->
    <!--<el-radio-button :label="true">收起</el-radio-button>-->
    <!--</el-radio-group>-->
    <!--<el-menu v-cloak default-active="1-4-1" class="el-menu-vertical-demo v-cloak" @open="handleOpen" @close="handleClose" :collapse="isCollapse">-->
    <!--<el-submenu index="1">-->
    <!--<template slot="title">-->
    <!--<i class="el-icon-location"></i>-->
    <!--<span slot="title">导航一</span>-->
    <!--</template>-->
    <!--<el-menu-item-group>-->
    <!--<el-menu-item index="1-1" @click="changeView('/sub-app-1')">-->
    <!--子应用1-->
    <!--</el-menu-item>-->
    <!--<el-menu-item index="1-2" @click="changeView('/sub-app-2')">-->
    <!--子应用2-->
    <!--</el-menu-item>-->
    <!--<el-menu-item index="1-3" @click="changeView('/sub-app-html-1')">-->
    <!--子应用-纯HTML-->
    <!--</el-menu-item>-->
    <!--</el-menu-item-group>-->
    <!--<el-submenu index="1-4">-->
    <!--<span slot="title">选项4</span>-->
    <!--<el-menu-item index="1-4-1">选项1</el-menu-item>-->
    <!--</el-submenu>-->
    <!--</el-submenu>-->
    <!--<el-menu-item index="2" @click="changeView('/sub-app-2')">-->
    <!--<i class="el-icon-menu"></i>-->
    <!--<span>中控台</span>-->
    <!--</el-menu-item>-->
    <!--</el-menu>-->
    <!---->
    <!---->
    <!--</el-aside>-->
    <!--<el-main>-->
    <!--<div id="micro-view"></div>-->
    <!--</el-main>-->
    <!--</el-container>-->
    <!--</el-container>-->
    <!--<button @click="changeState(1)">修改state = 1</button>-->
    <!--<button @click="changeState(2)" class="ml20">修改state = 2</button>-->
  </div>
</template>

<script>
  export default {
    data () {
      return {
        isCollapse: false,
        activeIndex: '1',
        activeIndex2: '1',
        userName:'川建国',
        userRole:'系统管理员'
      }
    },
    methods: {
      changeView (who) {
        window.history.pushState(null, '', who)
      },
      changeState (value) {
        // 按一级属性设置全局状态，微应用中只能修改已存在的一级属性
        this.$actions.setGlobalState({
          mt: value
        })
      },
      handleOpen (key, keyPath) {
        console.log(key, keyPath)
      },
      handleClose (key, keyPath) {
        console.log(key, keyPath)
      },
      handleSelect (key, keyPath) {
        console.log(key, keyPath)
      }
    }
  }
</script>

<style lang="scss">
  [v-vloak] {
    display: none;
  }

  .header-title, .aside-btn {
    color: #fff;
  }

  .menu-collapse-btn {
    font-size: 20px;
    color: #b7e0ff;
  }

  .x-aside {
    .el-menu {
      height: 100%;
      max-width: 220px;
      span{
        padding-right:30px;
      }
    }
  }

  #micro-view {
    height:100%;
  }

  #micro-view>div {
    position: relative;
    height:inherit;
  }


  .user-info-wrapper{
    width: 100%;
    display: flex;
    background-color: #fff;
    border-right: 1px solid #e6e6e6;
    padding: 10px 4px;
    min-width: 220px;
    .avatar-wrapper{
      .img-avatar{
        width: 70px;
        height: 70px;
        padding: 2px;
        /*border: 4px solid #eaeaea;*/
        margin: 4px;
      }
    }
    .info-list{
      padding: 10px;
      .info-list-name{
        font-size: 26px;
        margin: 6px 0;
      }
      .info-list-role{
        font-size:14px;
        color:#999;
      }
    }
  }

  .x-header {
    height: 60px;
    line-height: 60px;
    position: absolute;
    display: flex;
    top: 0;
    left: 0;
    right: 0;
    background-color: #0d569a;
    .x-header-menu {
      height: 100%;
      background-color: transparent;
      border-bottom:0;
      margin-left:24px;
      li{
        &:hover,&:focus{
          background-color: rgba(12,12,12,0.2)!important;
        }
        color:#fff!important;
        font-size:22px;
        div.el-submenu__title{
          color:#fff!important;
          font-size:22px;
          &:hover{
            background-color: rgba(12,12,12,0.2)!important;
          }
        }
      }
    }
  }
  .x-main {
    position: absolute;
    top: 60px;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    min-height: 600px;
    overflow: hidden;
  }

  .header-title-container {
    padding: 0 12px;
    .header-title {
      font-size: 32px;
    }
    .menu-collapse-btn {
      font-size: 20px;
      color: #ffffff;
      margin-left: 12px;
    }
  }

  .x-content {
    flex: 1;
  }
</style>
