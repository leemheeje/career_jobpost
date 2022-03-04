import { rem } from "polished";
import { createStitches } from "@stitches/react";


export const { styled, css, theme, createTheme, globalCss, config, keyframes } = createStitches({
	theme: {
		colors: {
			white: '#fff',
		}
	},
	utils: {
		sectionTitle: () => ({
			"font-family": "'Black Han Sans',-apple-system-font, 'Apple SD Gothic Neo', sans-serif",
			"line-height": "47px",
			"color": "#000",
			"text-align": "center",
			"display": "block",
			"font-size": "45px",
		}),
		sectionSTitle: () => ({
			"font-family": "'Noto Sans KR',-apple-system-font, 'Apple SD Gothic Neo', sans-serif",
			"text-align": "center ",
			"font-size": "22px ",
			"line-height": "25px ",
			"display": "block ",
			"color": "#999 ",
		}),
		centered: () => ({
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center'
		})
	}
});
