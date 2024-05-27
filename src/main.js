import '@/assets/main.css'
import store from '@/store'
import components from '@/components/UI/index.js'

import { createApp } from 'vue'
import App from './App.vue'

import { createI18n } from 'vue-i18n'

const i18n = createI18n({
  pluralizationRules: {
    'ru': function(choice, choicesLength) {
      if (choice === 0) {
        return 0;
      }

      const teen = choice > 10 && choice < 20;
      const endsWithOne = choice % 10 === 1;

      if (choicesLength < 4) {
        return (!teen && endsWithOne) ? 1 : 2;
      }
      if (!teen && endsWithOne) {
        return 1;
      }
      if (!teen && choice % 10 >= 2 && choice % 10 <= 4) {
        return 2;
      }

      return (choicesLength < 4) ? 2 : 3;
    }
  },
  locale: 'ru',
  fullbackLocale: 'en',
  messages: {
    ru: {
      goods: 'нет товаров | {n} товар | {n} товара | {n} товаров'
    }
  }
})

const app = createApp(App)

components.forEach((component) => {
  app.component(component.name, component);
});

app
  .use(store)
  .use(i18n)
  .mount('#app')
