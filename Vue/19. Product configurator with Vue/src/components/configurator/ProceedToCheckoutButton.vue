<template>
    <div>
        <button class="btn btn-primary pull-right"><i class="fa fa-chevron-right"></i> Proceed to checkout</button>
    </div>
</template>

<script>
    export default {
        name: 'CheckoutButton',
    }
</script>

<style lang="less" scoped>
    .btn-primary {
        background: #ff9900;
        border: 1px solid #cc7a00;
        width: 180px;
        font-weight: bold;
    }
</style>