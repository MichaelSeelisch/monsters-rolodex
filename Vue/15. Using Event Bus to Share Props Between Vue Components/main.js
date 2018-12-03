export function main () {
    new Vue({
        el: '#app',
        data() {
            return {
                count: 0,
                text: '',
                entry: 3
            }
        },

        created() {
            eventBus.$on('count-incremented', () => {
                this.text = `Count was increased`
                setTimeout(() => {
                    this.text = '';
                }, 3000);
            })

            eventBus.$on('count-decremented', () => {
                this.text = `Count was decreased`
                setTimeout(() => {
                    this.text = '';
                }, 3000);
            })
        },

        methods: {
            handleIncrement() {
                this.count += parseInt(this.entry, 10);
                eventBus.$emit('count-incremented')
                this.entry = 0;
            },

            handleDecrement() {
                this.count -= parseInt(this.entry, 10);
                eventBus.$emit('count-decremented')
                this.entry = 0;
            }
        }
    });
}
