export default {
    name: 'App',
    props: ['myProp'],
    template: `
        <div>
            <ul>
                <li v-for="n in countdown">{{11-n}}</li>
                <li>launch missile! {{ myProp }}</li>
            </ul>
        </div>
    `,
  };