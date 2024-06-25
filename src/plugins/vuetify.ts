import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify)

export default new Vuetify({
    theme: {
        themes: {
            light: {
                "primary": "#07BDC6",
                "primary-2": "#E6F8F9",
                "secondary-1": "#626687",
                "secondary-2": "#3C3F52",
                "gray-1": "#FAFAFA",
                "gray-2": "#D9D9D9",
                "warning": "#FFE699",
            },
        },
    },
})
