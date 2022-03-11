import React from 'react';
import { styled } from "components/styles/stitches.config";
import InnerWrapping from "components/InnerWrapping";
import Button from "components/Button";
import Row from "components/Row";
import { PostSelect, Navigator, ValidateArea } from "curtain";

const Header = () => {
	return (
		<>
			<JbHdRowsArn>
				<InnerWrapping>
					<Row rowJustifyBetween>
						{/* 이전공고 불러오기 selectbox:S */}
						<PostSelect />
						{/* 이전공고 불러오기 selectbox:E */}
						{/* 버튼그룹:S */}
						<div className="btnwWrap">
							<Button size="md" className="outline">미리보기</Button>
							<Button size="md" className="org ML05">저장하기</Button>
						</div>
						{/* 버튼그룹:E */}
					</Row>
				</InnerWrapping>
				<Navigator />
			</JbHdRowsArn>
			{/* 미등록식 보이는 영역:S*/}
			<ValidateArea />
			{/* 미등록식 보이는 영역:E*/}
		</>
	)
}


const JbHdRowsArn = styled('div', {
	backgroundColor: "#fff",
	padding: "22px 0 25px",
});


export default Header