<template>
    <div>
        <div class="container my-3">
            <h3 class="text-center">Show Product</h3>
            <div class="row">
                <div class="col-md-2"></div>
                <div class="col-md-8">
                    <div class="card">
                        <div class="card-header">
                            <h4>
                                {{ product.name }}
                                <router-link
                                    :to="{ name: 'products' }"
                                    class="btn btn-secondary float-end"
                                    >Back</router-link
                                >
                            </h4>
                        </div>
                        <div class="card-body">
                            {{ product.description }}
                        </div>
                    </div>
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
};
</script>
