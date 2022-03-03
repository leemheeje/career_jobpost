import React from 'react';
import { styled } from "components/styles/stitches.config";
import InnerWrapping from "components/InnerWrapping";
import GetPostSelectElement from "components/GetPostSelectElement";


const Header = () => {
	return (
		<JbHeadersArea>
			<JbHdRowsArn>
				<InnerWrapping>
					{/* 이전공고 불러오기 selectbox:S */}
					<GetPostSelectElement/>
					{/* 이전공고 불러오기 selectbox:E */}
					{/* 버튼그룹:S */}
					<div className="btnwWrap">
						<button className="htd_btn outline">미리보기</button>
						<button className="htd_btn org">저장하기</button>
					</div>
					{/* 버튼그룹:E */}
				</InnerWrapping>
				<div className="jbGlInners">
					<div className="navtaArea">
						{/* foreach:S */}
						<div className="tpsw_tp active" data-params="0">
							<button className="tbtw">모집분야</button>
						</div>
						<div className="tpsw_tp active" data-params="1">
							<button className="tbtw">지원자격</button>
						</div>
						<div className="tpsw_tp active" data-params="2">
							<button className="tbtw">근무조건</button>
						</div>
						<div className="tpsw_tp active" data-params="3">
							<button className="tbtw">접수방법</button>
						</div>
						<div className="tpsw_tp" data-params="4">
							<button className="tbtw">담당자 정보</button>
						</div>
						<div className="tpsw_tp" data-params="5">
							<button className="tbtw">기업정보</button>
						</div>
						<div className="tpsw_tp" data-params="6">
							<button className="tbtw">템플릿 반영</button>
						</div>
						<div className="tpsw_tp" data-params="7">
							<button className="tbtw">채용 인사담 </button>
						</div>
						{/* foreach:E */}
					</div>
				</div>
			</JbHdRowsArn>
			<div className="jbHdRowsBrn">
				{/* 미등록식 보이는 영역:S*/}
				<div className="mtValueChkArea">
					<div className="jbGlInners">
						<div className="inxwTxs">
							{/* foreach:S */}
							<button className="inbt">모집분야 </button>
							<button className="inbt">모집분야1 </button>
							<button className="inbt">모집분야2 </button>
							{/* foreach:E */}
							<span className="tlbw">이 등록되지 않았습니다.</span>
						</div>
					</div>
				</div>
				{/* 미등록식 보이는 영역:E */}
			</div>
		</JbHeadersArea>
	)
}


const JbHeadersArea = styled('div');
const JbHdRowsArn = styled('div', {
	backgroundColor: "#fff",
	padding: "22px 0 25px",
});


export default Header