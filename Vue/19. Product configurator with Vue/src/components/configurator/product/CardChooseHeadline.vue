<template>
    <div class="form-group">
        <label for="headline">Headline</label>
        <input id="headline" class="form-control" type="text" placeholder="Your headline" :value="value" @input="updateParent">
    </div>
</template>

<script>
    export default {
        name: 'CardChooseHeadline',
        props: ['value'],
        methods: {
            updateParent(e) {
                this.$emit('input', e.target.value)
            },
        },
    }
</script>

<style lang="less" scoped>

</style>