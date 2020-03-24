<template>
<el-main>
  <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="Customers" name="first">
    <CustomerList />
    </el-tab-pane>
      <el-tab-pane label="Paging Server" name="second">
        <PagingServer />
      </el-tab-pane>
      <el-tab-pane label="GraphQL" name="third">
        <GraphQlList />
      </el-tab-pane>
  </el-tabs>
  </el-main>
</template>
<script>
const CustomerList = () => import('./CustomerList')
const PagingServer = () => import('./PagingServer')
const GraphQlList = () => import('./GraphQlList')
export default {
  name: 'CustomerPage',
  components: {
    CustomerList,
    PagingServer,
    GraphQlList
  },
  data() {
    return {
      activeName: 'first'
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  }
};
</script>
<style lang="scss" scoped>
@import "customer.scss";
</style>
