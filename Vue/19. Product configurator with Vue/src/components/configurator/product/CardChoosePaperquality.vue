<template>
    <div class="form-group">
        <label for="quality">Paperquality</label>
        <div>
            <div class="custom-input inline">
                <input :id="normalId" type="radio" value="normal" :checked="quality === 'normal'" @change="chosen"><label :for="normalId">Normal</label>
            </div>
            <div class="custom-input inline">
                <input :id="extraId" type="radio" value="extra" :checked="quality === 'extra'" @change="chosen"><label :for="extraId">Extra</label>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'CardChoosePaperquality',
        model: {
            prop: 'quality',
            event: 'chosen'
        },
        props: ['id', 'quality'],
        computed: {
            normalId() {
                return `normal_${this.id}`
            },
            extraId() {
                return `extra_${this.id}`
            },
        },
        methods: {
            chosen(e) {
                this.$emit('chosen', e.target.value)
            },
        },
    }
</script>

<style lang="less" scoped>
    input[type=radio] + label {
        margin-left: 5px;
        margin-right: 20px;
        font-weight: normal;

        &:hover {
            cursor: pointer;
        }
    }
</style>