import { styled } from 'components/styles/stitches.config';
import React from 'react';

export const Input = ({
	type = 'text',
	...props
}) => {
	return (
		<JbForm>
			<input type={type} {...props} />
		</JbForm>
	);
}

export const Textarea = ({
	...props
}) => {
	return (
		<JbForm>
			<textarea {...props}></textarea>
		</JbForm>
	)
}

export const Checkbox = ({
	children,
	size,
	label = "",
	...props
}) => {
	return (
		<JbForm size={size}>
			<label>
				<input type="checkbox" {...props} />
				<Label className='lb' checkbox>
					{children || label}
				</Label>
			</label>
		</JbForm>
	)
}
export const Radio = ({
	children,
	label = "",
	...props
}) => {
	return (
		<JbForm>
			<label>
				<input type="radio" {...props} />
				<Label className='lb' radio>
					{children || label}
				</Label>
			</label>
		</JbForm>
	)
}


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
const Label = styled('span', {
	"display": "inline-block",
	"padding": "5px 0",
	"padding-left": "40px",
	"line-height": "20px",
	"font-size": "15px",
	"font-weight": "300",
	"color": "#333",
	"text-align": "left",
	"word-break": "break-all",
	variants: {
		checkbox: {
			true: {
				"&:before": {
					"content": '',
					"width": "30px",
					"height": "30px",
					"border-radius": "2px",
					"border": "1px solid #cfcfcf",
					"background": `no-repeat #fff center center url(${require("assets/images/jobposts/icosWhiteCheck_8.png")})`,
					"position": "absolute",
					"left": "0",
					"top": "0",
					"box-sizing": "border-box",
				},
			}
		},
		radio: {
			true: {
				"&:before": {
					"content": '',
					"position": "absolute",
					"left": "0",
					"top": "0",
					"width": "30px",
					"height": "30px",
					"border-radius": "50%",
					"background": "#fff",
					"border": "1px solid #ddd",
					"box-sizing": "border-box",
				}
			}
		}
	}
});
const JbForm = styled('div', {
	"position": "relative",
	"&.inline": {
		"display": "inline-block",
		"vertical-align": "middle",
	},
	"& input[type='text'],& input[type='number']": input_css,
	"& input[type='checkbox'], & input[type='radio']": {
		"position": "absolute",
		"left": "0",
		"top": "0",
		"width": "0",
		"height": "0",
		"overflow": "hidden",
	},
	"& input[type='checkbox']:checked+.lb:before": {
		"background-color": "#0161ff",
		"border-color": "#0161ff",
	},
	"& input[type='radio']:checked+.lb:before": {
		"border-color": "#0161ff",
	},
	"& input[type='radio']:checked+.lb:after": {
		"content": '',
		"width": "14px",
		"height": "14px",
		"border-radius": "50%",
		"background": "#007eff",
		"position": "absolute",
		"left": "8px",
		"top": "8px",
	},
	"& textarea": {
		...input_css, ...{
			"height": "200px",
			"textIndent": 0,
			"padding": 20,
			"resize": "vertical",
			"min-height": 200
		}
	},
	variants: {
		"size": {
			"sm": {
				"& .lb":{
					"font-size": "13px",
					"line-height": "16px",
					"padding": "1px 0",
					"padding-left": "24px",
				},
				"& input[type='checkbox']+.lb:before":{
					"width": "18px",
					"height": "18px",
					"background-image": `url(${require("assets/images/icos/icosWhiteCheck_8.png")})`,
				},
				"& input[type='checkbox']:checked+.lb:before":{
					"background-color": "#5f9dff",
					"border-color": "#5f9dff",
				}
			}
		}
	}
});