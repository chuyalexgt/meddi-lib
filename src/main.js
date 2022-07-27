import {createApp} from 'vue';
import {Quasar} from 'quasar';
import './style.css';
import App from './App.vue';
import meddiLib from './components';
import 'uno.css';
import '@unocss/reset/tailwind.css';
import '@quasar/extras/material-icons/material-icons.css';
import 'quasar/src/css/index.sass';

const app = createApp(App);
app.use(meddiLib);

app.use(Quasar, {
  plugins: {

  },
  config: {

  },
  boot: [

  ],
});

app.mount('#app');

