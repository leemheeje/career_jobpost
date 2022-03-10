import React from 'react';
import { styled } from 'components/styles/stitches.config';
import Button from 'components/Button';
import Selected from 'components/Selected';
import { Checkbox } from 'components/Input';

export const SortCateDicButton = ({
	children,
	...props
}) => {
	return (
		<div className="tpw ">
			<MDicButton {...props}>
				<span className="d_intx">{children}</span>
			</MDicButton>
		</div>
	)
}

export const SortContDicButton = ({
	children,
	...props
}) => {
	return (
		<div className="tpw">
			<Checkbox size="sm" {...props}>{children}</Checkbox>
		</div>
	)
}
export const SortIndialogWrapping = ({
	children,
	sortCategoryArea = [],
	sortContentArea = [],
	...props
}) => {
	return (
		<MSortIndialogWrapping className="jbChkLavwArea">
			<div className="jbcRowsCont">
				<div className="jbcColLt">
					<div className="jbcInConte">
						<div className="ltsLst">
							{sortCategoryArea}
						</div>
					</div>
				</div>
				<div className="jbcColRt">
					<div className="jbcInConte bordernone">
						<div className="ltsTits">ㆍ취업보호.장려</div>
						<div className="ltsLst">
							{/*  foreach:S  */}
							{sortContentArea}
							{/*  foreach:E  */}
						</div>
					</div>
				</div>

			</div>
			<div className="jbcRowsRest">
				<div className="jbresInner">
					<div className="rexwConte">
						{/*  선택된영역이있을때:S  */}
						{/*  foreach:S  */}
						<Selected>책임연구원</Selected>
						{/*  foreach:E  */}
						{/*  선택된영역이있을때:E  */}
						{/*  선택된영역이없을때:S  */}
						<div className="tmNulIns">선택한 항목이 없습니다.</div>
						{/*  선택된영역이없을때:E  */}
					</div>
					<div className="rexwBte">
						<Button size="sm" className="gray">초기화</Button>
					</div>
				</div>
			</div>
		</MSortIndialogWrapping>
	);
}
const MDicButton = styled('button', {
	"text-align": "left",
	"border": "none",
	"background": "none",
	"padding": "15px 21px",
	"position": "relative",
	"display": "block",
	"width": "100%",
	"&:before": {
		"width": "6px",
		"height": "100%",
		"position": "absolute",
		"right": "21px",
		"top": "0",
		"background": `no-repeat center center url(${require("assets/images/jobposts/dic_bt.png")})`,
	},
	"& .d_intx": {
		'font-size': "14px",
		'text-align': "left",
		'line-height': "17px",
		'padding-left': "27px",
		'position': "relative",
		'font-weight': "normal",
		'color': "#333",
		"&:before": {
			"content": "",
			"width": "27px",
			"height": "100%",
			"position": "absolute",
			"left": "0",
			"top": "0",
			"background": `no-repeat left center url(${require("assets/images/jobposts/icoslGrayCircleCheck_20_20.png")})`,
		}
	},
	"&.active": {
		"& .d_intx": {
			"color": "#007eff",
			"font-weight": "bold",
			"&:before": {
				"background-image": `url(${require("assets/images/jobposts/icoslBlueCircleCheck_20_20.png")})`,
			}
		}
	}
})
const MSortIndialogWrapping = styled('div', {
	"& .jbcInConte": {
		"height": "240px",
		"overflow": "hidden",
		"overflow-y": "auto",
		"border-right": "1px solid #eaeaea",
		"&.bordernone": { border: "none" },
	},
	"& .jbcRowsCont": {
		"border": "1px solid #454545",
		"border-left": "none",
		"border-right": "none",
		"&:after": {
			"content": "",
			"display": "table",
			"clear": "both",
		}
	},
	"& .jbcColLt": {
		"float": "left",
		"width": "207px",
		"& .ltsLst": {
			"& .tpw+.tpw": {
				"border-top": "1px solid #eaeaea",
			}
		}
	},
	"& .jbcColRt": {
		"float": "left",
		"width": "calc(100% - 207px)",
		"& .ltsTits": {
			"font-size": "16px",
			"line-height": "17px",
			"text-indent": "-16px",
			"color": "#333",
			"font-weight": "bold",
			"text-align": "left",
			"display": "block",
			"white-space": "nowrap",
			"overflow": "hidden",
			"text-overflow": "ellipsis",
			"padding": "15px 30px 2px",
		},
		"& .ltsLst": {
			"padding": "15px 30px",
			"&:after": {
				"content": "",
				"display": "table",
				"clear": "both",
			},
			"& .tpw": {
				"padding": "6px 0",
				"float": "left",
				"width": "33.333%",
				"& .lb": {
					"white-space": "nowrap",
					"overflow": "hidden",
					"text-overflow": "ellipsis",
					"max-width": "100%",
				}
			},
			"&.col4 .tpw": {
				"width": "25%",
			}
		},
	},
	"& .jbcRowsRest": {
		"margin-top": "10px",
		"& .jbresInner": {
			"border": "1px solid #cbd1db",
			"background": "#f1f3f5",
			"text-align": "left",
			"padding": "10px 20px",
			"padding-right": "100px",
			"position": "relative",
		},
		"& .rexwBte": {
			"position": "absolute",
			"right": "10px",
			"top": "10px",
		},
		"& .rexwConte": {
			"min-height": "32px",
			"& .tmNulIns": {
				"font-size": "15px",
				"line-height": "32px",
				"text-align": "left",
				"color": "#bbb",
			}
		}
	}
})
