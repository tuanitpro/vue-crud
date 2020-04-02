<template>
<el-main>
  <el-tabs v-model="activeName" @tab-click="handleClick" >
    <el-tab-pane label="Customers" name="first">
    </el-tab-pane>
      <el-tab-pane label="Paging Server" name="second">
      </el-tab-pane>
      <el-tab-pane label="GraphQL" name="third">
         <GraphQlList />
      </el-tab-pane>
  </el-tabs>
  </el-main>
</template>
<script>
const GraphQlList = () => import('./GraphQlList')
export default {
  name: 'GraphQLPage',
  components: {
    GraphQlList
  },
  data() {
    return {
      activeName: 'third'
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
        case 'Customers':
          this.$router.push({
            name: 'customer'
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
