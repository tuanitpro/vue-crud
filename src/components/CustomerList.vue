<template>
<el-main>
  <el-tabs v-model="activeName">
    <el-tab-pane label="Customers" name="first">Customers</el-tab-pane>
  </el-tabs>
  </el-main>
</template>
<script>
export default {
  name: 'CustomerList',
  data() {
    return {
      editId: '',
      activeName: 'first',
      productData: {
        id: '',
        product_id: '',
        product_name: '',
        product_price: ''
      }
    };
  }
};
</script>
