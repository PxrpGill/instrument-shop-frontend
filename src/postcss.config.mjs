const config = {
	plugins: {
		"postcss-import": {
			path: [path.resolve(__dirname, "shared/styles")],
		},
		"postcss-mixins": {
			mixinsDir: path.resolve(__dirname, "shared/styles/mixins"),
		},
		"postcss-simple-vars": {
			variables: {
				"mobile-min": "375px",
				mobile: "767px",

				"desktop-min": "768px",
				desktop: "1440px",

				"mobile-scale-factor": "3.75",
				"standard-desktop-scale-factor": "14.4",
			},
		},
		"postcss-nested": {},
		autoprefixer: {},
	},
};

export default config;
