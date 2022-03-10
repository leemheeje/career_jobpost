import React from 'react';
import { styled } from 'components/styles/stitches.config';

export const AddformRow = ({
	children,
	label = "ㆍJLPT",
	...props
}) => {
	return (
		<MAddform className="jbTps">
			<div className="jblts">
				<span className="intx">{label}</span>
			</div>
			<div className="jbcots">
				{children}
			</div>
		</MAddform>
	)
}
export const AddformWrapping = ({
	children,
	...props
}) => {
	return (
		<MAddformWrapping className={`jbAddFormArea ${props.className}`}>
			<div className="jbaFormInners">
				{/* foreach:S */}
				{children}
				{/* foreach:E */}
			</div>
		</MAddformWrapping>
	);
}

const MAddform = styled('div', {
	"padding-left": "10px",
	"text-align": "left",
	"&:after": {
		"content": "",
		"display": "table",
		"clear": "both",
	},
	"&+&": {
		"margin-top": "10px"
	},
	"& .jblts": {
		"float": "left",
		"width": "155px",
		"padding": "17px 0",
		"min-height": "54px",
		"& .intx": {
			"font-size": "14px",
			"color": "#666",
			"font-weight": "normal",
			"line-height": "20px",
			"display": "block",
			"white-space": "nowrap",
			"text-overflow": "ellipsis",
		}
	},
	"& .jbcots": {
		"float": "left",
		"width": "calc(100% - 155px)",
		"& .jbls_de": {
			"width": "17px",
			"height": "17px",
			"background": `transparent no-repeat center center url(${require("assets/images/jobposts/icosBlackClose_9.png")})`,
			"border": "none",
			"display": "inline-block",
			"vertical-align": "middle",
			"margin-left": "10px",
		}
	}
});
const MAddformWrapping = styled('div', {
	"& .jbaFormInners": {
		"background": "#eef2f7",
		"padding": "20px",
		"&:after": {
			"content": "",
			"display": "table",
			"clear": "both",
		}
	}
});

