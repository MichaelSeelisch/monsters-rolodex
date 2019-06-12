const uuidv4 = require('uuid/v4')
const state = {
    products: [
        {
            id: uuidv4(),
            config: {
                heading: 'A fancy headline',
                body: 'lorem ipsum amit set dolores. Help!',
                amount: 10,
                shape: 'portrait', // options: 'rect', 'diamond', 'circle', portrait' or 'landscape'
                size: 'a4', // other options: 'a5'/'a6'
                quality: 'normal' // other option 'extra'
            },
        }
    ],
    price: 1.50, // base price
}
const actions = {
    addProduct({commit}) {
        commit('addProductMut')
        commit('updatePriceMut')
    },
    removeProduct({commit}, index) {
        commit('removeProductMut', index)
        commit('updatePriceMut')
    },
    addToCart({commit}) {
        commit('addToCartMut')
    },
    updatePrice({commit}) {
        commit('updatePriceMut')
    },
    resetProduct({commit}, productId) {
        commit('resetProductMut', productId)
    }
}
const mutations = {
    addProductMut({products}) {
        products.push(createNewProduct())
    },
    removeProductMut({products}, productId) {
        const index = products.findIndex(prod => prod.id === productId)
        products.splice(index, 1)
    },
    addToCartMut(state) {
        // reset state?
        console.log('addToCart mutation does nothing')
    },
    updatePriceMut(state) {
        state.price = state.products.reduce((previous, product) => previous + productPrice(product), 0)
    },
    resetProductMut({ products }, productId) {
        const index = products.findIndex(prod => prod.id === productId)
        const newProduct = createNewProduct()
        products.splice(index, 1, newProduct)
    },
}

export default {
    namespaced: true,
    state,
    actions,
    mutations,
} 

const productPrice = ({config}) => {
    let price = 1.50
    if (config.size === 'a5') {
        price = 1.0
    } else if (config.size === 'a6') {
        price = 0.75
    }
    price += 0.01 * config.heading.length // 1 cent per letter in headline
    price += 0.02 * config.body.split(' ').length // 2 cent per word in body
    if (config.quality === 'extra') {
        price *= 1.25
    }
    price *= config.amount
    return price
}

const createNewProduct = () => ({
    id: uuidv4(),
    config: {
        heading: '',
        body:  Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),
        amount: 10,
        shape: 'square',
        size: 'a4',
        quality: 'normal',
    }
})