import { styled } from 'components/styles/stitches.config';
import React from 'react';
let input_css = {
	"border": "1px solid #cbd1db",
	"border-radius": "2px",
	"height": "54px",
	"font-size": "15px",
	"color": "#333",
	"text-indent": "20px",
	"width": "100%",
	"vertical-align": "top",
	"background-color": "#fff",
};
const Input = ({
	type = 'text',
	...props
}) => {
	return (
		<JbForm>
			<input type={type} {...props} />
		</JbForm>
	);
}

const JbForm = styled('div', {
	"position" : "relative",
	"&.inline" : {
		"display": "inline-block",
		"vertical-align": "middle",
	},
	"& input[type='text']": input_css,
	"& input[type='number']": input_css,
});

export default Input;
