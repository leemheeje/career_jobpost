import React from 'react';
import { styled } from 'components/styles/stitches.config';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

export const Datepicker = ({
	children,
	placeholder = 'YYYY.MM.DD',
	type = 'text',
	...props
}) => {
	return (
		<JbForm datepicker>
			{/* <input type={type} placeholder={placeholder} {...props} readOnly /> */}
			<DatePicker placeholder={placeholder} {...props} />
		</JbForm>
	);
}
export const Input = ({
	children,
	type = 'text',
	...props
}) => {
	return (
		<JbForm inlabel={props.inlabel}>
			<input type={type} {...props} />
			{children}
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
	"&:read-only": {
		background: '#f1f3f5',
	}
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
	"& .lbe": {
		"font-size": "13px",
		"color": "#999",
		"vertical-align": "baseline",
		"position": "relative",
		"padding-left": "10px",
		"margin-left": "10px",
		"&:before": {
			"content": "",
			"width": "1px",
			"height": "13px",
			"position": "absolute",
			"left": " 0",
			"top": "50%",
			"margin-top": "-6px",
			"background": "#dadfe6",
		}
	},
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
				"& .lb": {
					"font-size": "13px",
					"line-height": "16px",
					"padding": "1px 0",
					"padding-left": "24px",
				},
				"& input[type='checkbox']+.lb:before": {
					"width": "18px",
					"height": "18px",
					"background-image": `url(${require("assets/images/icos/icosWhiteCheck_8.png")})`,
				},
				"& input[type='checkbox']:checked+.lb:before": {
					"background-color": "#5f9dff",
					"border-color": "#5f9dff",
				}
			}
		},
		inlabel: {
			true: {
				"& input": {
					"padding-right": "50px",
					"text-align": "right",
				},
				"& .inl": {
					"position": "absolute",
					"right": "0",
					"top": "0",
					"line-height": "54px",
					"width": "50px",
					"text-align": "left",
					"font-size": "15px",
					"color": "#999",
					"text-indent": "5px",
				},
			}
		},
		datepicker: {
			true: {
				"& input": {
					"padding-right": "50px",
					"text-align": "left",
					"background": `#fff no-repeat calc(100% - 10px) center url(${require("assets/images/icos/icosGrayDate_21.png")}) !important`,
				},
			}
		}
	}
});