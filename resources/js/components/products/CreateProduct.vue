<template>
    <div>
        <div class="container my-3">
            <div
                class="alert alert-danger position-relative error"
                v-for="(error, index) in formErrors"
                :key="index"
            >
                {{ error }}
            </div>
            <h3 class="text-center mb-3">Create Product</h3>
            <div class="row">
                <div class="col-md-2"></div>
                <div class="col-md-8">
                    <form @submit.prevent="addProduct" class="design-form">
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
                            Create
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
            formErrors: [],
            maxLength: 10,
        };
    },
    methods: {
        async addProduct() {
            this.formErrors = [];
            if (!this.product.name) {
                this.formErrors.push("name canot be empty ");
            }
            if (!this.product.description) {
                this.formErrors.push("description canot be empty ");
            }
            if (
                this.product.name &&
                this.product.name.length > this.maxLength
            ) {
                this.formErrors.push("name must be max char " + this.maxLength);
            }
            if (
                this.product.description &&
                this.product.description.length > this.max
            ) {
                this.formErrors.push(
                    "description must be max char " + this.max
                );
            }
            if (!this.formErrors.length) {
                await this.axios
                    .post("http://localhost:8000/api/products", this.product)
                    .then((response) => this.$router.push({ name: "products" }))
                    .catch((err) => console.log(err))
                    .finally(() => (this.loading = false));
            }
        },
    },
};
</script>
<style scoped>
.design-form {
    padding: 5px;
    /* background: rgba(174, 173, 173, 0.753); */
    border-radius: 5px;
}
.error {
    top: 20px;
}
</style>
