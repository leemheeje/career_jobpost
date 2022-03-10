import { styled } from 'components/styles/stitches.config';


const Text = styled('span', {
	"font-size": "15px",
	"color": "#333",
	"display": "inline-block",
	"vertical-align": "middle",
	"& button": {
		background: 'none',
		border: 'none',
		textAlign: 'left',
		fontSize: 'inherit',
		fontWeight: 'bold',
		textDecoration: 'underline',
		lineHeight: 'inherit',
		color: "#333",
	},
	variants: {
		sm: {
			true: {
				fontSize: 13,
				lineHeight: '24px',
				fontWeight: 'normal',
				color: "#999"
			}
		},
		md: {
			true: {
				fontSize: 14,
				lineHeight: '37px',
				fontWeight: 'normal',
				color: "#666"
			}
		},
		color: {
			'c333': {
				color: '#333',
			}
		}
	}
});

export default Text