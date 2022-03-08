import React from 'react';
import { styled } from 'components/styles/stitches.config';
import Button from 'components/Button';

const Dialog = ({
	children,
	title = 'sdf',
	subtitle = '',
	...props
}) => {
	return (
		<M_Dialog {...props}>
			<div className='dimm'></div>
			<DjGiContents css={{
				"position": "relative",
			}}>
				<DjGiInners>
					<div class="djHedAre">
						<div class="dintx">
							<span class="inw">{title}<small class="sm">{subtitle}</small></span>
						</div>
					</div>
					<div className='djConAre'>
						{children}
					</div>
					<div className='djFotAre'>
						<div class="btwGrp">
							<Button className="outline" md>취소</Button>
							<Button className="ML05" md>확인</Button>
							<button className='diClse' title="팝업닫기"></button>
						</div>
					</div>
				</DjGiInners>
			</DjGiContents>
		</M_Dialog>
	);
}
const DjGiInners = styled('div', {
	"border-radius": "20px",
	"width": "920px",
	"background": "#fff",
	"box-shadow": "0 0 15px rgba(0,0,0,0.2)",
	"padding": "32px 50px",
});
const DjGiContents = styled('div');
const M_Dialog = styled('div', {
	"position": "fixed",
	"width": "100%",
	"left": "0",
	"top": "0",
	"bottom": "0",
	"padding": "20px 0",
	"z-index": "10",
	"height": "100%",
	"display": "flex",
	"justify-content": "center",
	"align-items": "center",
	"overflow-y": "auto",
	"flex-wrap": "wrap",
	"& .dimm": {
		"position": "fixed",
		"left": "0",
		"top": "0",
		"width": "100%",
		"height": "100%",
		"background": "#000",
		"opacity": ".7",
	},
	"& .djHedAre .inw": {
		"font-size": "22px",
		"font-weight": "bold",
		"line-height": "30px",
		"color": "#333",
		"&.lg": {
			"font-size": "30px",
			"font-weight": "normal",
		},
		"& .sm": {
			"font-size": "14px",
			"color": "#999",
			"margin-left": "7px",
			"font-weight": "normal",
		}
	},
	"& .djFotAre": {
		"padding": "20px 0",
		"& .btwGrp": {
			"text-align": "center",
			"font-size": "0",
		},
		"& .diClse": {
			"width": "35px",
			"height": "35px",
			"background": `transparent no-repeat center center url(${require("assets/images/jobposts/djFotAre.png")})`,
			"border": "none",
			"position": "absolute",
			"right": "25px",
			"top": "25px",

		}
	}
});

export default Dialog;
