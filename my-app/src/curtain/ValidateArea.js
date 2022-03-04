import { styled } from '@stitches/react';
import React from 'react';
import InnerWrapping from "components/InnerWrapping";

const ValidateArea = () => {
	return (
		<>
			{/* 미등록식 보이는 영역:S*/}
			<MtValueChkArea>
				<InnerWrapping>
					<InxwTxs>
						{/* foreach:S */}
						<Intx>모집분야 </Intx>
						<Intx>모집분야1 </Intx>
						<Intx>모집분야2 </Intx>
						{/* foreach:E */}
						<span className="VTOP ML10">이 등록되지 않았습니다.</span>
					</InxwTxs>
				</InnerWrapping>
			</MtValueChkArea>
			{/* 미등록식 보이는 영역:E */}
		</>
	);
}

const Intx = styled('button', {
	"background": "none",
	"border-radius": "0",
	"font-weight": "bold",
	"text-decoration": "underline",
	"border": "none",
	"color": "#fff",
	"font-size": "14px",
	"vertical-align": "top",
	"line-height": "17px",
	"&+button":{
		"marginLeft" : "10px"
	}
});
const InxwTxs = styled('div', {
	"font-size": "14px",
	"color": "#fff",
	"line-height": "17px",
	"padding": "13px 0 13px",
	"text-align": "center",
});
const MtValueChkArea = styled('div', {
	"background": "#f67066",
	"border-top": "1px solid #ff0000",
});
export default ValidateArea;
