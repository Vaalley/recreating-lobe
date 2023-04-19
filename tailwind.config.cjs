/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			screens: {
				// '-2xl': { max: '1439px' },
				'-xl': { max: '1279px' },
				'-lg': { max: '1023px' },
				'-md': { max: '767px' },
				'-sm': { max: '639px' }
			},
			colors: {
				primary: '#04ddb2',
				dark: '#767676',
				darker: '#333',
				white: '#fff'
			},
			fontFamily: {}
		}
	},
	plugins: []
};
