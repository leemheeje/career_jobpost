import React from 'react';
import { styled } from 'components/styles/stitches.config';
import Button from 'components/Button';
import Selected from 'components/Selected';

const Result = ({
	children,
	...props
}) => {
	return (
		<MResult>
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
		</MResult>
	);
}


const MResult = styled('div', {
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
})

export default Result;
