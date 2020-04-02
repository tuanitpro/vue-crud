<template>
<el-main>
  <el-tabs v-model="activeName" @tab-click="handleClick" >
    <el-tab-pane label="Customers" name="first">
    <CustomerList />
    </el-tab-pane>
      <el-tab-pane label="Paging Server" name="second">
      </el-tab-pane>
      <el-tab-pane label="GraphQL" name="third">
      </el-tab-pane>
  </el-tabs>
  </el-main>
</template>
<script>
const CustomerList = () => import('./CustomerList')
export default {
  name: 'CustomerPage',
  components: {
    CustomerList
  },
  data() {
    return {
      activeName: 'first'
    };
  },
  methods: {
    handleClick(tab, event) {
      var pageName = event.target.innerText
      switch (pageName) {
        case 'Paging Server':
          this.$router.push({
            name: 'paging'
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
