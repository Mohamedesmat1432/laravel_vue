<template>
    <div>
        <div class="container my-3">
            <h2 class="text-center">Products List</h2>
            <table class="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody v-if="products.data && products.data.length > 0">
                    <tr v-for="product in products.data" :key="product.id">
                        <td>{{ product.id }}</td>
                        <td>{{ product.name }}</td>
                        <td>{{ product.description }}</td>
                        <td>
                            <div class="btn-group" role="group">
                                <router-link
                                    :to="{
                                        name: 'edit',
                                        params: { id: product.id },
                                    }"
                                    class="btn btn-primary btn-sm"
                                    >Edit</router-link
                                >
                                <router-link
                                    :to="{
                                        name: 'show',
                                        params: { id: product.id },
                                    }"
                                    class="btn btn-info btn-sm"
                                    >Show</router-link
                                >
                                <button
                                    @click.prevent="deleteProduct(product.id)"
                                    class="btn btn-danger btn-sm"
                                >
                                    Delete
                                </button>
                            </div>
                        </td>
                    </tr>
                </tbody>
                <tbody v-else>
                    <h4 class="text-center p-3">no product</h4>
                </tbody>
            </table>
            <pagination
                :data="products"
                @pagination-change-page="getProducts"
            ></pagination>
            <router-link to="/create" class="btn btn-success"
                >Create Product</router-link
            >
        </div>
    </div>
</template>

<script>
import { ref } from "vue";
import pagination from "laravel-vue-pagination";
export default {
    components: { pagination },
    data() {
        return {
            products: {},
        };
    },
    mounted() {
        this.getProducts();
    },
    methods: {
        getProducts(page) {
            this.axios
                .get(`http://localhost:8000/api/products?page=${page}`)
                .then((response) => {
                    this.products = response.data;
                    // console.log(page);
                })
                .catch((err) => {
                    console.log(err);
                });
        },
        async deleteProduct(id) {
            await this.axios
                .delete(`http://localhost:8000/api/products/${id}`)
                .then((response) => {
                    let i = this.products.data
                        .map((data) => data.id)
                        .indexOf(id);
                    this.products.data.splice(i, 1);
                })
                .catch((err) => {
                    console.log(err);
                });
        },
    },
};
</script>
<style scoped>
.pagination {
    margin-top: 20px;
    border-top: 0;
}
</style>
