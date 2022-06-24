import Home from "./components/Home.vue";
import AllProduct from "./components/products/AllProduct.vue";
import CreateProduct from "./components/products/CreateProduct.vue";
import EditProduct from "./components/products/EditProduct.vue";
import ShowProduct from "./components/products/ShowProduct.vue";

export const routes = [
    {
        name: "home",
        path: "/",
        component: Home,
    },
    {
        name: "products",
        path: "/products",
        component: AllProduct,
    },
    {
        name: "create",
        path: "/create",
        component: CreateProduct,
    },
    {
        name: "edit",
        path: "/edit/:id",
        component: EditProduct,
    },
    {
        name: "show",
        path: "/show/:id",
        component: ShowProduct,
    },
];
