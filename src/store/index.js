import { createStore } from 'vuex';
import axios from 'axios'

export default createStore({
  state: {
      supplies: [
      {
        id: 1,
        img: 'src/assets/img/supply_1.png',
        heading: 'BXC',
        description:
          'Вытяжное устройство для механической системы вентиляции',
        rubPrice: '6 848 ₽ – 56 584 ₽',
        eurPrice: '77.60 € – 643.86 €',
      },
      {
        id: 2,
        img: 'src/assets/img/supply_2.png',
        heading: 'G2H',
        description:
          'Многофункциональное вытяжное устройство для естественной и гибридной вентиляции',
        rubPrice: '6 848 ₽ – 56 584 ₽',
        eurPrice: '77.60 € – 643.86 €',
      },
      {
        id: 3,
        img: 'src/assets/img/supply_3.png',
        heading: 'GHN',
        description:
          'Вытяжное устройство с датчиком присутствия',
        rubPrice: '6 848 ₽ – 56 584 ₽',
        eurPrice: '77.60 € – 643.86 €'
      },
      {
        id: 4,
        img: 'src/assets/img/supply_4.png',
        heading: 'TDA',
        description:
          'Вытяжное устройство с датчиком присутствия',
        rubPrice: '6 848 ₽ – 56 584 ₽',
        eurPrice: '77.60 € – 643.86 €'
      },
    ],
    products: [
      {
        id: 1,
        heading: 'Вытяжное устройство G2H',
        description: '12-72/168 м3/ч / гидрорегулируемый расход / от датчика присутствия',
        vendorCode: 'G2H1065',
        price: 12644,
        imgLink: 'src/assets/img/product_1.png',
        goodsAmount: 1,
      },
      {
        id: 2,
        heading: 'Вытяжное устройство BXC',
        description: '12-72/168 м3/ч / гидрорегулируемый расход / от датчика присутствия',
        vendorCode: 'G2H1065',
        price: 12644,
        imgLink: 'src/assets/img/product_2.png',
        goodsAmount: 2,
      },
      {
        id: 3,
        heading: 'Вытяжное устройство GHN',
        description: '12-72/168 м3/ч / гидрорегулируемый расход / от датчика присутствия',
        vendorCode: 'G2H1065',
        price: 12644,
        imgLink: 'src/assets/img/product_3.png',
        goodsAmount: 1,
      },
    ],
    installation: false,
    slidePosition: 1,
    orderModal: false,
  },
  mutations: {
    cleanCart(state) {
      state.products = [];
    },
    addAmount(state, product_id) {
      const product = state.products.find((prod) => prod.id === product_id);
      product.goodsAmount += 1;
    },
    decreaseAmount(state, product_id) {
      const product = state.products.find((prod) => prod.id === product_id);
      product.goodsAmount -= 1;
      if (product.goodsAmount === 0) {
        state.products = state.products.filter((prod) => prod.id !== product_id);
      }
    },
    deleteCartItem(state, product_id) {
      state.products = state.products.filter((prod) => prod.id !== product_id);
    },
    pickInstallation(state) {
      state.installation = !state.installation;
    },
    switchOrderModal(state) {
      state.orderModal = !state.orderModal;
    },
    changeSliderPosition(state, currentIndex) {
      state.slidePosition = currentIndex + 1;
    }
  },
  actions: {
    async sendCart() {
      try {
        const response =  await axios.post('https://80a62171d2fdc98d.mokky.dev/cartitems', this.state.products)
        if (response.data) {
          console.log(response.data);
          this.state.products = [];
          this.state.orderModal = true;
        }
      }
      catch(e) {
        console.log(e);
      }
    }
  },
  getters: {
    countProducts(state) {
      return state.products.reduce((acc, product) => acc + product.goodsAmount, 0);
    },
    countTotalPrice(state) {
      return state.products.reduce((acc, product) => {
        acc += product.goodsAmount * product.price
        return acc;
      }, 0);
    },
  },
});
