const uuidv4 = require('uuid/v4');

const state = {
    products: [
        {
            id: uuidv4(),
            heading: '',
            body: '',
            amount: 5,
            shape: 'rect', // other options: 'portrait'/'landscape'
            size: 'a4', // other options: 'a5'/'a6'
            quality: 'normal' // other option 'extra'
        }
    ],
    price: 10.0, // base price
};

const actions = {
    addProduct({commit}) {
        commit('addProductMut');
        commit('updatePriceMut');
    },
    removeProduct({commit}, index) {
        commit('removeProductMut', index);
        commit('updatePriceMut');
    },
    addToCart({commit}) {
        commit('addToCartMut');
    },
    updatePrice({commit}) {
        commit('updatePriceMut');
    },
};

const mutations = {
    addProductMut(state) {
        state.products.push({
            id: uuidv4(),
            heading: '',
            body: '',
            amount: 1,
            shape: 'rect',
            size: 'a4',
            quality: 'normal'
        });
    },
    removeProductMut(state, index) {
        state.products.splice(index, 1);
    },
    addToCartMut(state) {
        // reset state?
        console.log('addToCart mutation does nothing');
    },
    updatePriceMut(state) {
        state.price = state.products.reduce((previous, product) => previous + productPrice(product), 0);
    }
};

export default {
    namespaced: true,
    state,
    actions,
    mutations,
};

const productPrice = product => {
    let price = 10.0;

    if (product.size === 'a5') {
        price = 7.5;
    } else if (product.size === 'a6') {
        price = 5.0;
    }

    if (product.quality === 'extra') {
        price *= 1.25;
    }

    return price * product.amount;
};
