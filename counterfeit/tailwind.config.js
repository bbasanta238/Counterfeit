/** @type {import('tailwindcss').Config} */
module.exports = {
	mode: "jit",
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				"theme-black": "#272727",
				"theme-green-light": "#fbfefb",
			},
			height: {
				"screen-75": "90vh",
				"screen-70": "70vh",
			},
			fontFamily: {
				main: ['"Open Sans"'],
			},
			boxShadow: {
				"3xl": "-30px 30px 8px  rgba(255, 255, 255, 0.3)",
			},
		},
	},
	plugins: [
		require("postcss-import"),
		require("tailwindcss"),
		require("autoprefixer"),
	],
};
