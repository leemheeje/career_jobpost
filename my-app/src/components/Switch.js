import React from 'react';
import { styled } from 'components/styles/stitches.config';

export const Label = ({
	children,
	...props
}) => {
	return (
		<MLabel>
			<input type="radio" {...props} />
			<span className="lb">{children}</span>
		</MLabel>
	)
}
export const Switch = ({
	children,
	...props
}) => {
	return (
		<MSwitch className="jbForm" {...props}>
			{children}
		</MSwitch>
	);
}

const MLabel = styled('label', {
	"display": "inline-block",
	"position": "relative",
	"max-width": "100%",
	"& input[type='radio']": {
		"position": "absolute",
		"left": "0",
		"top": "0",
		"width": "0",
		"height": "0",
		"overflow": "hidden",
	},
	"& input[type='radio']+.lb": {
		"display": "inline-block",
		"text-align": "left",
		"font-weight": "300",
		"word-break": "break-all",
		"background": "#fff",
		"min-width": "95px",
		"height": "44px",
		"line-height": "34px",
		"padding": "5px 0",
		"padding-left": "47px",
		"border-radius": "2px",
		"margin-left": "-1px",
		"position": "relative",
		"font-size": "14px",
		"&:before": {
			"content": "",
			"border-radius": "0",
			"background": "none",
			"width": "100%",
			"height": "100%",
			"border": "1px solid #ddd",
			"box-sizing": "border-box",
			"position": "absolute",
			"left": "0",
			"top": "0",
		},
		"&:after": {
			"content": "",
			"width": "17px",
			"height": "17px",
			"position": "absolute",
			"left": "20px",
			"top": "13px",
			"background": `no-repeat left top url(${require("assets/images/jobposts/icoslGrayCircleCheck_17_17.png")})`,
		},

		"&:first-child .lb:before": {
			"border-top-left-radius": "2px",
			"border-bottom-left-radius": "2px",
		},
		"&:last-child .lb:before": {
			"border-top-right-radius": "2px",
			"border-bottom-right-radius": "2px",
		},
		"&+&": {
			"margin-right": 0,
		}
	},
	"& input[type='radio']:checked+.lb:before": {
		"border-color": "#007eff",
	},
	"& input[type='radio']:checked+.lb:after": {
		"background-image": `url(${require("assets/images/jobposts/icoslBlueCircleCheck_17_17.png")})`,
	},
	"& input[type='radio']:checked+.lb": {
		"color": "#0066ff",
		"z-index": "1",
	},
})
const MSwitch = styled('div', {
	"font-size": "0",
	variants: {
		lg: {
			true: {
				"& input[type='radio']+.lb": {
					"height": "54px",
					"line-height": "44px",
					"font-size": "15px",
					"padding-right": "35px",
					"&:after": {
						top: 19
					}
				},
				"& input[type='radio']:checked+.lb:after": {
					backgroundImage: `url(${require("assets/images/jobposts/icoslWhiteCircleCheck_20_20.png")})`,
				},
				"& input[type='radio']:checked+.lb:before": {
					borderColor: '#454545',
				},
				"& input[type='radio']:checked+.lb": {
					background: '#454545',
					color: '#fff'
				}
			}
		},
		tablecell: {
			true: {
				"&": {
					display: 'table',
					tableLayout: 'fixed',
					width: '100%',
					"& label":{
						display: 'table-cell'
					},
					"& .lb":{
						width: '100%',
					}
				}
			}
		}
	}
})


