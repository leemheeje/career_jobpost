import React from 'react';
import { styled } from 'components/styles/stitches.config';


export const Tag = ({
	children,
	...props
}) => {
	return (
		<MTag>
			<input type="checkbox" name="" value="" id="" />
			<span className="lb">{children}</span>
		</MTag>
	);
}

export const TagGroup = ({
	children,
	...props
}) => {
	return (
		<MTagGroup>
			{
				typeof children === 'object' && Array.isArray(children) ? children.map((item, index) => {
					return (
						<div className='tpws' key={index}>
							{item}
						</div>
					)
				}) : ''
			}
		</MTagGroup>
	);
}

const MTagGroup = styled('div', {
	"&:after": {
		"content": "",
		"display": "table",
		"clear": "both",
	},
	"& .tpws": {
		"float": "left",
		"margin-right": "4px",
		"margin-top": "10px",
	},
})

const MTag = styled('label', {
	"border-radius": "37px",
	"height": "37px",
	"display": "block",
	"background": "#fff",
	"border": "1px solid #cbd1db",
	"color": "#333",
	"font-size": "14px",
	"text-align": "center",
	"font-weight": "normal",
	"padding": "0 20px",
	"position": "relative",
	"&.active": {
		"border-color": "#007eff",
		"color": "#007eff",
		"font-weight": "bold",

	},
	"& input": {
		"position": "absolute",
		"left": "0",
		"top": "0",
		"width": "0",
		"height": "0",
		"opacity": "0",
	},
	"& .lb": {
		"line-height": "35px",
	},
	"& input:checked+.lb": {
		"color": "#007eff",
	},
	"& input:checked+.lb:before": {
		"content": "",
		"width": "100%",
		"height": "100%",
		"position": "absolute",
		"left": "-1px",
		"top": "-1px",
		"border": "1px solid #007eff",
		"border-radius": "37px",
	}
})