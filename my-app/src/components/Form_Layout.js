import { styled } from 'components/styles/stitches.config';
import React from 'react';

const FormLayout = ({
	children,
	label = '레이블',
	...props
}) => {
	return (
		<JbLayoutLabs className='required'>
			<Jblabs className="jblabs">
				<Ints className="ints">{label}</Ints>
			</Jblabs>
			<JbDivs className="jbDivs">

				{children}

			</JbDivs>
		</JbLayoutLabs>
	);
}
const JbLayoutLabs = styled('div', {
	"margin-top": 40,
	"&:after": {
		"content": '',
		"display": "table",
		"clear": "both",
	},
	"&.required .jblabs .ints": {
		"&:after": {
			"content": '필수',
			"color": "#ff0000",
			"font-size": "12px",
			"margin-left": "5px",
			"font-weight": "normal",
		}
	}
});
const Jblabs = styled('div', {
	"width": "140px",
	"float": "left",
	"text-align": "left",
	"padding": "16px 0 17px",
});
const Ints = styled('div', {
	"font-size": "16px",
	"color": "#333",
	"font-weight": "bold",
	"line-height": "20px",
});
const JbDivs = styled('div', {
	"float": "left",
	"width": "calc(100% - 140px)",
});

export default FormLayout;