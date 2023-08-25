import '@mdi/font/css/materialdesignicons.css';
import 'vuetify/styles';

// Composables
import { createVuetify } from 'vuetify';
import { getSavedTheme } from '@/helpers/Theme';

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    defaultTheme: getSavedTheme(),
    themes: {
      light: {
        colors: {
          primary: '#ff5250',
          secondary: '#1923DC',
        },
      },
      dark: {
        colors: {
          primary: '#ff5250',
          secondary: '#1923DC',
        },
      },
    },
  },
});
