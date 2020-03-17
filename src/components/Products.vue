<template>
  <div class="products">
    <h3>Products</h3>
    <div class="card">
      <div class="card-header">Add a new product</div>
      <div class="card-body">
        <form class="form-inline" v-on:submit.prevent="onSubmit">
          <div class="form-group">
            <label>ID</label>
            <el-input placeholder="Please input" v-model="productData.product_id"></el-input>
          </div>
          <div class="form-group">
            <label>Name</label>
            <input
              v-model="productData.product_name"
              type="text"
              class="form-control ml-sm-2 mr-sm-4 my-2"
              required
            />
          </div>
          <div class="form-group">
            <label>Price</label>
            <input
              v-model="productData.product_price"
              type="text"
              class="form-control ml-sm-2 mr-sm-4 my-2"
              required
            />
          </div>
          <div class="ml-auto text-right">
            <button type="submit" class="btn btn-primary my-2">Add</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Products",
  data() {
    return {
      editId: "",
      productData: {
        id: "",
        product_id: "",
        product_name: "",
        product_price: ""
      }
    };
  }
};
</script>