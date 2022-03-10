import React from 'react';
import { styled } from 'components/styles/stitches.config';
import DartTheme from 'components/styles/theme/DarkTheme';


console.log(DartTheme);


const Button = ({
	children,
	isIco,
	...props
}) => {
	return (
		<MButton {...props}>
			{
				isIco && typeof isIco === 'string'
					? <MIco className={isIco}></MIco>
					: false
			}
			<MIntxt className='intxtsw'>{children}</MIntxt>
		</MButton>
	)
}

const MIntxt = styled('span', {
	"font-size": "16px",
	"display": "inline-block",
	"vertical-align": "top",
	"color": '$white',
});
const MIco = styled('span', {
	"display": "inline-block",
	"vertical-align": "middle",
	"&.reload": {
		"width": "21px",
		"height": "21px",
		"background": `no-repeat center center url(${require('assets/images/jobposts/jbbtns_reload.png')})`,
		"margin-right": "5px",
	}
});
const MButton = styled('button', {
	"padding": "0 22px",
	"background": "#454545",
	"border-radius": "2px",
	"display": "inline-block",
	"vertical-align": "middle",
	"height": "54px",
	"text-align": "center",
	"border": "1px solid #454545",
	"white-space": "nowrap",
	"overflow": "hidden",
	"min-width": "135px",
	"&.gray": {
		"border-color": "#949fa5",
		"background": "#949fa5",
		"color": "#fff",
	},
	"&.org": {
		"border-color": "#ff6600",
		"background": "#ff6600",
		"color": "#fff",
	},
	"&.outline": {
		"border-color": "#bbc8d8",
		"background": "#fff",
		"color": "#fff",
		"& .intxtsw": {
			color: "#333",
		}
	},
	variants: {
		size: {
			sm: { 
				"height": "32px", 
				"min-width": "80px", 
				"padding": 0, 
				"& .intxtsw": {
					fontSize: "12px",
				}
			},
			md: { "height": "50px" },
			lg: { "height": "80px" },
		}
	}
});

export default Button;