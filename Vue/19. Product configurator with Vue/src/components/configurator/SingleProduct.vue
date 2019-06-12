<template>
    <div class="single-product">
        <div class="row">
            <div class="col-md-12">
                <button class="remove-product-button pull-right" @click="removeProduct"><span class="glyphicon glyphicon-remove-circle"></span></button>
            </div>
        </div>

        <div class="row">
            <div class="col-md-6">
                <CardChooseShape v-model="config.shape" @changed="updateParent" :id="id"/>
                <CardChoosePapersize v-model="config.size" @chosen="updateParent" />
                <CardChooseAmount v-model="config.amount" @input-changed="updateParent"/>
                <CardChoosePaperquality v-model="config.quality" @chosen="updateParent" :id="id"/>
            </div>
            <div class="col-md-6">
                <CardChooseHeadline v-model="config.heading" @input="updateParent" />
                <CardChooseMaintext v-model="config.body" @input="updateParent" />

                <button class="btn-link pull-right" @click="resetProduct">Clear configuration</button>
            </div>
        </div>
    </div>
</template>

<script>
    import CardChooseShape from './product/CardChooseShape';
    import CardChoosePapersize from './product/CardChoosePapersize';
    import CardChooseAmount from './product/CardChooseAmount';
    import CardChoosePaperquality from './product/CardChoosePaperquality';
    import CardChooseHeadline from './product/CardChooseHeadline';
    import CardChooseMaintext from './product/CardChooseMaintext';

    export default {
        name: 'Product',
        components: {
            CardChooseShape,
            CardChoosePapersize,
            CardChooseAmount,
            CardChoosePaperquality,
            CardChooseHeadline,
            CardChooseMaintext,
        },
        model: {
            prop: 'config',
        },
        props: ['id', 'config'],
        computed: {},
        methods: {
            updateParent() {
                this.$emit('product-updated')
            },
            resetProduct() {
                this.$emit('reset-product', this.id)
            },
            removeProduct() {
                this.$emit('remove-product', this.id)
            },
        },
    }
</script>

<style lang="less" scoped>
    .single-product {
        height: 400px;
        padding: 10px 30px 30px 30px;
        border: 1px solid #dcdcdc;
        margin-bottom: 20px;

        .remove-product-button {
            background: none;
            border: none;

            span {
                font-size: 25px;
                color: #aaa;
            }

            &:hover {
                outline: none;
                color: #878787;
            }
        }

        .btn-link {
            background: none;
            border: none;
            color: #FF9900;
            text-decoration: underline;
            font-size: 14px;

            &:hover {
                outline: none;
                color: #cc7a00;
            }
        }
    }
</style>