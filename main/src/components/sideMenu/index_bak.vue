<template>
  <div>
    <el-container>
      <el-header>Header</el-header>
      <el-container>
        <el-aside>
          <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
            <el-radio-button :label="false">展开</el-radio-button>
            <el-radio-button :label="true">收起</el-radio-button>
          </el-radio-group>
          <el-menu v-cloak default-active="1-4-1" class="el-menu-vertical-demo v-cloak" @open="handleOpen"
                   @close="handleClose" :collapse="isCollapse">
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span slot="title">导航一</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="1-1" @click="changeView('/sub-app-1')">
                  子应用1
                </el-menu-item>
                <el-menu-item index="1-2" @click="changeView('/central-controller')">
                  子应用2
                </el-menu-item>

                <el-menu-item index="1-2" @click="changeView('/sub-app-html-1')">
                  子应用-纯HTML
                </el-menu-item>
              </el-menu-item-group>
              <el-submenu index="1-4">
                <span slot="title">选项4</span>
                <el-menu-item index="1-4-1">选项1</el-menu-item>
              </el-submenu>
            </el-submenu>
            <el-menu-item index="2" @click="changeView('/central-controller')">
              <i class="el-icon-menu"></i>
              <span>中控台</span>
            </el-menu-item>
          </el-menu>
        </el-aside>
        <el-main>
          <div id="micro-view"></div>
        </el-main>
      </el-container>
    </el-container>
    <!--<button @click="changeState(1)">修改state = 1</button>-->
    <!--<button @click="changeState(2)" class="ml20">修改state = 2</button>-->
  </div>
</template>

<script>
  export default {
    data () {
      return {
        isCollapse: false
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
      }
    }
  }
</script>

<style lang="scss" scoped>
  [v-vloak] {
    display: none;
  }


</style>
