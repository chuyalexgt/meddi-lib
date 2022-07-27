// 1) Importar el componente
import AsyncBtn from './components/AsyncBtn.vue';

/*
2) Configurar la istalación por defecto de la libreria, esto permite intslar
todos los componentes de manera global en un nuevo proyecto utilizando
app.use()
 */

export default {
  install: (app, options) => {
    // 3) Instalar el componente
    app.component('AsyncBtn', AsyncBtn);
  },
};

/*
 4) Exporta los componentes en un objeto para poder
 utilizarlos de manera individual
 */
export {
  AsyncBtn,
};
