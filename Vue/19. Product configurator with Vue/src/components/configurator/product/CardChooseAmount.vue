<template>
    <div class="form-group">
        <label for="amount">Amount</label>
        <input id="amount" class="form-control" type="number" min=10 max=100 step=10 :value="newAmount" @input="updateParent">
    </div>
</template>

<script>
    export default {
        name: 'CardChooseAmount',
        model: {
            prop: 'newAmount',
            event: 'input-changed'
        },
        props: ['newAmount'],
        methods: {
            updateParent(e) {
                this.$emit('input-changed', parseInt(e.target.value))
            },
        },
    }
</script>
