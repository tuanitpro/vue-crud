<template>
<el-main>
  <el-tabs v-model="activeName" @tab-click="handleClick" >
    <el-tab-pane label="Customers" name="first">
    </el-tab-pane>
      <el-tab-pane label="Paging Server" name="second">
       <PagingServer />
      </el-tab-pane>
      <el-tab-pane label="GraphQL" name="third">
      </el-tab-pane>
  </el-tabs>
  </el-main>
</template>
<script>
const PagingServer = () => import('./PagingServer')
export default {
  name: 'Paging',
  components: {
    PagingServer
  },
  data() {
    return {
      activeName: 'second'
    };
  },
  methods: {
    handleClick(tab, event) {
      var pageName = event.target.innerText
      switch (pageName) {
        case 'Customers':
          this.$router.push({
            name: 'customer'
          });
          break;
        case 'GraphQL':
          this.$router.push({
            name: 'graphql'
          });
          break;
      }
    }
  }
};
</script>
<style lang="scss" scoped>
@import "customer.scss";
</style>
