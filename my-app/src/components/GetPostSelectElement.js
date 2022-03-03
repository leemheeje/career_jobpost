import React, { useState } from 'react';
import { styled } from 'components/styles/stitches.config';

const GetPostSelectElement = () => {
	const [IsSelectExtend, setIsSelectExtend] = useState(true);
	return (
		<JbPveSelects>
			<JoUntxs onClick={() => {
				if (IsSelectExtend) {
					setIsSelectExtend(false);
				} else {
					setIsSelectExtend(true);
				}
			}}>이전공고 불러오기</JoUntxs>
			<Listed className={IsSelectExtend ? 'active' : ''} />
		</JbPveSelects>
	);
}

const Listed = props => {
	return (
		<UlxLsts {...props}>
			<InsUrs>
				{/* foreach:S */}
				<Utps>
					{/*
					className=ame
					채용마감  gry
					미완성    red
					대기중    org
						*/}
					<Lwb className='gry'>채용마감</Lwb>
					<Lwt className='lwt'>웹 서비스 기획 경력자 채용웹 서비스 기획 경력자 채웹 서비스 기획 경력자 채용웹 서비스 기획 경력자 채웹 서비스 기획 경력자 채용웹 서비스 기획 경력자 채</Lwt>
					<Dwt>03-14</Dwt>
				</Utps>
				<Utps>
					{/*
					className=ame
					채용마감  gry
					미완성    red
					대기중    org
						*/}
					<Lwb className='red'>채용마감</Lwb>
					<Lwt className='lwt'>웹 서비스 기획 경력자 채용웹 서비스 기획 경력자 채웹 서비스 기획 경력자 채용웹 서비스 기획 경력자 채웹 서비스 기획 경력자 채용웹 서비스 기획 경력자 채</Lwt>
					<Dwt>03-14</Dwt>
				</Utps>
				{/* foreach:E */}
			</InsUrs>
		</UlxLsts>
	)
}
const Dwt = styled('span', {
	"font-size": "13px",
	"text-align": "right",
	"position": "absolute",
	"right": "10px",
	"top": "5px",
	"width": "90px",
	"color": "#999",
});
const Lwt = styled('span', {
	"font-size": "14px",
	"text-align": "left",
	"display": "block",
	"overflow": "hidden",
	"text-overflow": "ellipsis",
	"white-space": "nowrap",
	"font-weight": "bold",
});
const Lwb = styled('span', {
	"font-size": "13px",
	"text-align": "center",
	"position": "absolute",
	"left": "0",
	"top": "5px",
	"width": "100px",
	"&.gry": {
		"color": "#999",
	},
	"&.red": {
		"color": "#ff0000",
	},
	"&.org": {
		"color": "#ff6600",
	},
});
const Utps = styled('button', {
	"width" : "100%",
	"position": "relative",
	"padding": "5px 0",
	"padding-left": "100px",
	"padding-right": "100px",
	"line-height": "40px",
	"display": "block",
	"font-weight": "normal",
	"min-height": "50px",
	"background" : "#fff",
	"border" : "none",
	"text-align" : "left",
	"&+button": {
		"border-top": "1px solid #cbd1db",
	},
	"&:hover .lwt":{
		"text-decoration": "underline"
	}
});
const UlxLsts = styled('div', {
	"position": "absolute",
	"left": "0",
	"top": "100%",
	"top": "calc(100% + 5px)",
	"width": "100%",
	"z-index": "1",
	"display": "none",
	"&.active": {
		"display": "block",
	}
});
const InsUrs = styled('div', {
	"background": "#fff",
	"border": "1px solid #454545",
	"padding": "0",
	"border-radius": "2px",
	"box-shadow": "0 5px 10px rgba(0,0,0,0.13)",
});
const JbPveSelects = styled('div', {
	"width": "650px",
	"position": "relative",
});
const JoUntxs = styled('button', {
	"height": "50px",
	"border": "1px solid #cbd1db",
	"background": "#eef2f7",
	"text-align": "left",
	"font-size": "15px",
	"color": "#333",
	"border-radius": "2px",
	"text-indent": "20px",
	"font-weight": "normal",
	"padding-right": "40px",
	"position": "relative",
	"display": "block",
	"width": "100%",
	"&:after": {
		"content": "''",
		"width": "40px",
		"height": "100%",
		"position": "absolute",
		"right": "0",
		"top": "0",
		"background": "no-repeat center center",
		"backgroundImage" : `url(${require("assets/images/icos/icocGrayArrowBottom_15_9.png")})`,
	}
});
export default GetPostSelectElement;
