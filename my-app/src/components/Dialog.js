import React from 'react';
import { styled } from 'components/styles/stitches.config';
import Button from 'components/Button';

const Dialog = ({
	children,
	title = 'sdf',
	subtitle = '',
	onClickCancelButton = () => { },
	onClickConfirmButton = () => { },
	...props
}) => {
	return (
		<MDialog {...props}>
			<div className='dimm' onClick={() => onClickCancelButton()}></div>
			<DjGiContents css={{
				"position": "relative",
			}}>
				<DjGiInners>
					<div className="djHedAre">
						<div className="dintx">
							<span className="inw">{title}<small className="sm">{subtitle}</small></span>
						</div>
					</div>
					<div className='djConAre'>
						{children}
					</div>
					<div className='djFotAre'>
						<div className="btwGrp">
							<Button className="outline" onClick={() => onClickCancelButton()} size="md">취소</Button>
							<Button className="ML05" onClick={() => onClickConfirmButton()} size="md">확인</Button>
							<button className='diClse' title="팝업닫기" onClick={() => onClickCancelButton()}></button>
						</div>
					</div>
				</DjGiInners>
			</DjGiContents>
		</MDialog>
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
const MDialog = styled('div', {
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
	"& .djHedAre": {
		"text-align": "left",
		"padding": "11px 0",
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
