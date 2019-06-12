<template>
    <div class="container">
        <div class="row">
            <div class="col-md-10 col-md-offset-1">
                <p>
                    Use the configurator below to create your own stunning postcard. Just choose the card’s shape and paper size. Add your headline and main text and we’ll take care of the rest. The price will automatically adjust during your configuration.
                    <br>
                    <br>
                    Simply configure multiple cards by adding another!
                </p>

                <ProductList
                    :products="products"
                    @update-price="updatePrice"
                    @reset-product="resetProduct"
                    @remove-product="removeProduct"
                    @add-product="addProduct"
                />

                <footer class="row">
                    <div class="col-md-6">
                        <PriceContainer :price="price"/>
                    </div>

                    <div class="col-md-6">
                        <ProceedToCheckoutButton />
                    </div>
                </footer>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapState, mapActions } from 'vuex';
    import ProductList from './ProductList';
    import PriceContainer from './PriceContainer';
    import ProceedToCheckoutButton from './ProceedToCheckoutButton';

    export default {
        name: 'PostCardConfigurator',
        components: {
            ProductList,
            PriceContainer,
            ProceedToCheckoutButton,
        },
        computed: {
            ...mapState('configurator', {
                products: 'products',
                price: 'price'
            })
        },
        methods: {
            ...mapActions('configurator', [
                'addProduct',
                'removeProduct',
                'updatePrice',
                'resetProduct'
            ])
        },
        mounted() {
            this.updatePrice()
        },
    }
</script>

<style lang="less">
    @orange: #FF9900;
    p {
        padding: 10px 30px 20px;
    }

    .form-group {
        margin-bottom: 30px;
    }

    .form-control {
        border-radius: 0;
        background: #eee;
    }

    footer {
        margin-bottom: 100px;
    }

    /* Custom radiobuttons and checkboxes */
    div.custom-input {

        &.inline {
            display: inline;
        }

        label {
            font-size: 15px;
            margin-right: 10px;
        }

        /* General icon styling */
        input[type=radio],
        input[type=checkbox] {
            border: 0;
            clip: rect(0 0 0 0);
            height: 1px;
            margin: -1px;
            overflow: hidden;
            padding: 0;
            position: absolute;
            width: 1px;
        }

        /* Unchecked icon styling */
        input[type=radio] ~ label:before,
        input[type=checkbox] ~ label:before {
            font-family: FontAwesome;
            display: inline-block;
            content: "\f10c";
            letter-spacing: 10px;
            font-size: 20px;
            color: @orange;
            width: 1.4em;
            position: relative;
            top: 2px;
        }

        /* Checked radio icon styling */
        input[type=radio]:checked ~ label:before {
            content: "\f192";
        }

        /* Update icon for checkbox (unchecked) */
        input[type=checkbox] ~ label:before {
            content: "\f096";
            top: 3px;
        }

        /* Update icon for checkbox (checked) */
        input[type=checkbox]:checked ~ label:before {
            content: "\f14a";
        }

        input[type=radio]:focus ~ label:before,
        input[type=checkbox]:focus ~ label:before
        {
            color: @orange;
        }
    }
</style>