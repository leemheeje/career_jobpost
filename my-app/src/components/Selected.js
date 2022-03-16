import React from 'react';
import { styled } from 'components/styles/stitches.config';

const Selected = ({
	children,
	...props
}) => {
	return (
		<>
			<MSelected className="fboTpsw">
				<span className="wlbwx">{children}</span>
				<button className="wlbde" title="삭제" {...props}></button>
			</MSelected>
		</>
	);
}

export const SelectedWrapping = ({children}) => {
	return (
		<MfbOriStvsArea className='fbOriStvsArea clearfix'>
			{children}
		</MfbOriStvsArea>
	)
}

const MfbOriStvsArea = styled('div',{
	"min-height": "52px",
    "padding": "11px 20px 11px",
	"& .fboTpsw":{
		float: 'left',
	}
})

const MSelected = styled('div', {
	"text-align": "left",
	"display": "inline-block",
	"vertical-align": "top",
	"margin-right": "15px",
	"& .wlbwx": {
		"font-size": "15px",
		"line-height": "30px",
		"display": "inline-block",
		"vertical-align": "middle",
		"color": "#333",
	},
	"& .wlbde": {
		"width": "17px",
		"height": "17px",
		"background": `transparent no-repeat center center url(${require("assets/images/icos/icosBlackClose_7.png")})`,
		"border": "none",
		"display": "inline-block",
		"vertical-align": "middle",
	},
})

export default Selected;
