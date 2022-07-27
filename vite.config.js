/* eslint-disable max-len */
import {defineConfig} from 'vite';
import vue from '@vitejs/plugin-vue';
import {quasar, transformAssetUrls} from '@quasar/vite-plugin';
import {resolve} from 'path';
import Unocss from 'unocss/vite';
import {
  presetAttributify,
  presetIcons,
  presetUno,
} from 'unocss';


// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'meddiLib.js'),
      name: 'meddiLib',
      // the proper extensions will be added
      fileName: 'meddi-lib',
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['vue'],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
  resolve: {
    alias: {
      '~/': `${resolve(__dirname, 'src')}/`,
    },
  },
  plugins: [
    vue({
      template: {transformAssetUrls},
    }),

    quasar({
      sassVariables: 'src/quasar-variables.sass',
    }),
    // eslint-disable-next-line new-cap
    Unocss({
      presets: [
        presetUno(),
        presetAttributify(),
        presetIcons({
          scale: 1.2,
          cdn: 'https://esm.sh/',
        }),
      ],
      // rules: [
      //   ['custom-rule', {color: 'red'}],
      // ],
      shortcuts: {
        'primary_btn': 'flex flex-inline justify-center w-1/3 gap-x-4 items-center bg-blue-200 dark:bg-light-blue-800 py-2 px-4 rounded-md hover:ring-light-blue-600 hover:ring-2 transition-all focus:drop-shadow-none ',
        'flex-containter': 'flex-grow flex-shrink-0 basis-0',
      },
    }),
  ],
});
