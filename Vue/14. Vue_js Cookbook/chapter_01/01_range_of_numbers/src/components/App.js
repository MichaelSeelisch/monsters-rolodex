export default {
    name: 'App',
    template: `
        <div>
            <ul>
                <li v-for="n in 4">Hello!</li>
            </ul>

            <ul>
                <li v-for="n in 10">{{11-n}}</li>
                <li>launch missile!</li>
            </ul>
        </div>
    `,
  };