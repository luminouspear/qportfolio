/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx}"],
	mode: "jit",
	theme: {
		extend: {
			fontFamily: {
				gloock: ["Gloock", "serif"],
				activo: ["Activo", "sans-serif"],
			},
			textDecorationColor: {
				primary: "#122111",
				secondary: "#aaa6c3",
				tertiary: "#151030",
				red: "red",
			},

			colors: {
				"primary-green": "#122111",
				"secondary-green": "#2FB1A2",
				"qportfolio-white": "#F5F2ED",
<<<<<<< HEAD
				"qportfolio-sage": "#B5B07D",
=======
<<<<<<< HEAD
				"qportfolio-sage": "#B5B07D",
=======
				"qportfolio-sage": "#D8E8C1",
>>>>>>> 5b195a3 (Some visual updates/stability changes)
>>>>>>> 53893bb (updates to UI)
				"qportfolio-black": "#0C0E07",
				"black-100": "#100d25",
				"black-200": "#090325",
				"white-100": "#f3f3f3",
			},
			boxShadow: {
				card: "0px 35px 120px -15px #211e35",
			},
			screens: {
				xs: "450px",
			},
			backgroundImage: {
				"hero-pattern": "url('/src/assets/herobg.png')",
			},
		},
	},
	variants: {
		extend: {
			textDecorationColor: ["responsive"],
		},
	},
	plugins: [],
};
