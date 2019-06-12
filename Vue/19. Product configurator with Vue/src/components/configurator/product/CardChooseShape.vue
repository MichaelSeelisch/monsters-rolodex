<template>
    <div class="form-group">
        <label for="shape">Papershape</label>
        <div>
            <CardCustomRadioShape theshape="square" :current="shape" @shape-chosen="chosen" :id="id"/>
            <CardCustomRadioShape theshape="portrait" :current="shape" @shape-chosen="chosen" :id="id"/>
            <CardCustomRadioShape theshape="landscape" :current="shape" @shape-chosen="chosen" :id="id"/>
            <CardCustomRadioShape theshape="diamond" :current="shape" @shape-chosen="chosen" :id="id"/>
            <CardCustomRadioShape theshape="circle" :current="shape" @shape-chosen="chosen" :id="id"/>
        </div>
    </div>
</template>

<script>
    import CardCustomRadioShape from './CardCustomRadioShape';

    export default {
        name: 'CardChooseShape',
        components: {CardCustomRadioShape},
        model: {
            prop: 'shape',
            event: 'changed'
        },
        props: ['shape', 'id'],
        methods: {
            chosen(cardShape) {
                this.$emit('changed', cardShape)
            },
        },
    }
</script>
