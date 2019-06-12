<template>
    <div>
        <div class="row">
            <div class="col-md-12">
                <SingleProduct
                    v-for="product in products"
                    :key="product.id"
                    :id="product.id"
                    v-model="product.config"
                    @product-updated="notifyParent"
                    @reset-product="resetProduct"
                    @remove-product="removeProduct"
                />
            </div>
        </div>

        <div class="row">
            <div class="col-md-12">
                <AddProduct
                    :products="products"
                    @add-product="addProduct"
                />
            </div>
        </div>
    </div>
</template>

<script>
    import SingleProduct from './SingleProduct';
    import AddProduct from './AddProduct';

    export default {
        name: 'ProductList',
        props: ['products'],
        components: {
            SingleProduct,
            AddProduct,
        },
        methods: {
            notifyParent() {
                this.$emit('update-price')
            },
            resetProduct(id) {
                this.$emit('reset-product', id)
            },
            removeProduct(id) {
                this.$emit('remove-product', id)
            },
            addProduct() {
                this.$emit('add-product')
            },
        },
    }
</script>

<style lang="less" scoped>

</style>