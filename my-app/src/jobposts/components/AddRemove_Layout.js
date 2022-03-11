import React from 'react';
import { styled } from 'components/styles/stitches.config';

const AddremoveLayout = ({
	children,
	initialize,
	className,
	...props
}) => {
	return (
		<MAddremoveLayout className={`jbAddMinArea ${className}`}>
			{/* foreach:S */}
			{
				Array.isArray(initialize)
					?
					initialize.map((item, key) => {
						return (
							<AddremoveContent key={key} {...props}>{item}</AddremoveContent>
						)
					})
					: ''
			}
			{/* foreach:E */}
		</MAddremoveLayout>
	);
}
const AddremoveContent = ({
	children,
	fnAddButtonClicked,
	fnDelButtonClicked,
	antHTMLAppend,
	...props
}) => {
	return (
		<div className="amSectListsArea">
			<div className="amSectDivAre">
				{children}
			</div>
			<div className="amSectBtnAre">
				<MButton className="ad" title="추가" onClick={() => fnAddButtonClicked('1123123')} />
				<MButton className="mn" title="삭제" onClick={() => fnDelButtonClicked()} />
			</div>
			<div className='amSectAntAre'>
				{antHTMLAppend}
			</div>
		</div>
	)
}
const MButton = styled('button', {
	"background": "transparent no-repeat center center",
	"border": "1px solid #cbd1db",
	"border-radius": "2px",
	"font-size": "0",
	"height": "46px",
	"width": "46px",
	"display": "inline-block",
	"vertical-align": "middle",
	"&+&": {
		marginLeft: 5
	},
	"&.mn": {
		"background-image": `url(${require("assets/images/jobposts/ansbtn_mn.png")})`,
	},
	"&.ad": {
		"background-image": `url(${require("assets/images/jobposts/ansbtn_ad.png")})`,
	},

})

const MAddremoveLayout = styled('div', {
	"& .amSectDivAre": {
		float: 'left',
	},
	"& .amSectBtnAre": {
		float: 'left',
		paddingLeft: 10,
		marginTop: 4,
	},
	"& .amSectListsArea": {
		"&:after": {
			"content": "",
			"clear": "both",
			"display": "table",
		},
		"&+&": {
			marginTop: 5,
		},
		"& .amSectAntAre": {
			"clear": "both",
			"display": "block",
			"margin-top": "5px",
			"float": "left",
			"width": "100%",
		},
	}
})

export default AddremoveLayout;
