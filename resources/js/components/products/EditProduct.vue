<template>
    <div>
        <div class="container my-3">
            <h3 class="text-center">Edit Product</h3>
            <div class="row">
                <div class="col-md-2"></div>
                <div class="col-md-8">
                    <form @submit.prevent="updateProduct" class="design-form">
                        <div class="form-group mb-3">
                            <label>Name</label>
                            <input
                                type="text"
                                class="form-control"
                                v-model="product.name"
                            />
                        </div>
                        <div class="form-group mb-3">
                            <label>Description</label>
                            <input
                                type="text"
                                class="form-control"
                                v-model="product.description"
                            />
                        </div>
                        <button type="submit" class="btn btn-primary">
                            Update
                        </button>
                        <router-link
                            :to="{ name: 'products' }"
                            class="btn btn-secondary float-end"
                        >
                            Back
                        </router-link>
                    </form>
                </div>
                <div class="col-md-2"></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            product: {},
        };
    },
    created() {
        this.axios
            .get(`http://localhost:8000/api/products/${this.$route.params.id}`)
            .then((res) => {
                this.product = res.data;
            });
    },
    methods: {
        updateProduct() {
            this.axios
                .patch(
                    `http://localhost:8000/api/products/${this.$route.params.id}`,
                    this.product
                )
                .then((res) => {
                    this.$router.push({ name: "products" });
                });
        },
    },
};
</script>
