import React from 'react';
import { styled } from 'components/styles/stitches.config';

const Button = ({
	children,
	...props
}) => {
	return (
		<ButtonWrapping data-params="0">
			<Button_>{children}</Button_>
		</ButtonWrapping>
	)
}
const Navigator = () => {
	return (
		<JbGlInners>
			<NavtaArea>
				{/* foreach:S */}
				<Button>모집분야</Button>
				<Button>지원자격</Button>
				<Button>근무조건</Button>
				<Button>접수방법</Button>
				<Button>담당자 정보</Button>
				<Button>기업정보</Button>
				<Button>템플릿 반영</Button>
				<Button>채용 인사담 </Button>
				{/* foreach:E */}
			</NavtaArea>
		</JbGlInners>
	);
}
const Button_ = styled('button', {
	"background": "none",
	"border": "none",
	"text-align": "center",
	"color": "#a5abb5",
	"font-size": "13px",
	"border-radius": "0",
	"line-height": "15px",
	"padding-bottom": "33px",

});
const ButtonWrapping = styled('div', {
	"display": "inline-block",
	"position": "relative",
	"margin-right": "78px",
	"&:after":{
		"content": "",
		"width":" 25px",
		"height":" 25px",
		"box-sizing":" border-box",
		"border":" 2px solid #d7dbe2",
		"border-radius":" 50%",
		"position":" absolute",
		"left":" 50%",
		"bottom":" 0",
		"margin-left":" -12px",
		"background":" #fff",
	},
});
const JbGlInners = styled('div', {
	"margin-left": "auto",
	"margin-right": "auto",
	"min-width": "1220px",
	"width": "1220px",

});
const NavtaArea = styled('div', {
	"font-family": " 'Noto Sans KR',-apple-system-font, 'Apple SD Gothic Neo', sans-serif ",
	"text-align": " center",
	"font-size": " 0",
	"margin-top": " 17px",
});

export default Navigator;
