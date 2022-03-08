import React from 'react';
import { styled } from 'components/styles/stitches.config';

const Select = ({
	children,
	...props
}) => {
	return (
		<Select_ {...props}>
			{children}
		</Select_>
	);
}

const Select_ = styled('select', {
	"border": "1px solid #cbd1db",
	"border-radius": "2px",
	"height": "54px",
	"font-size": "15px",
	"color": "#333",
	"text-indent": "20px",
	"width": "100%",
	"vertical-align": "top",
	"background-color": "#fff",
	"padding-right": "30px",
	"background" : `no-repeat right center url(${require("assets/images/icos/icosBlackArrowBottom_8.png")})`,
	"background-position-x": "calc(100% - 15px)",
})

export default Select;


