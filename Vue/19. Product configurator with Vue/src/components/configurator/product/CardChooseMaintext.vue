<template>
    <div class="form-group">
        <label for="body">Main text</label>
        <textarea id="body" class="form-control" placeholder="Your text here" :value="value" @input="updateParent"></textarea>
    </div>
</template>

<script>
    export default {
        name: 'CardChooseMaintext',
        props: ['value'],
        methods: {
            updateParent(e) {
                this.$emit('input', e.target.value)
            },
        },
    }
</script>

<style lang="less" scoped>
    .form-group {
        margin-bottom: 10px;
    }

    #body {
        height: 200px;
    }
</style>