import React from 'react';
import { styled } from 'components/styles/stitches.config';

const RecruitDuplicate = ({
	initalize,
	...props
}) => {
	return (
		<MRecruitDuplicate className='jbGlbNmAreaWrapping'>
			{/* foreach:S */}
			{
				Array.isArray(initalize)
					?
					initalize.map((item, key) => {
						return (
							<RecruitDuplicateList isShow={(key === 0 ? true : false)} key={key} item={item} />
						)
					})
					: ''
			}
			{/* foreach:E */}
			{/* 모집분야 추가 버튼:S */}
			<button className="jbSectAddButton MT20" style={{
				"display": "block",
				"width": "100%",
				"clear": "both",
				"fontSize": "16px",
				"fontWeight": "bold",
				"color": "#333",
				"border": "1px solid #38405c",
				"borderRadius": "2px",
				"background": "#fff",
				"height": "65px",
			}}>+모집분야 추가</button>
			{/* 모집분야 추가 버튼:E */}
		</MRecruitDuplicate>
	);
}
const RecruitDuplicateList = ({
	isShow,
	item,
	...props
}) => {
	return (
		<MRecruitDuplicateList className={`jbGlbNmLists ${isShow ? 'show' : ''}`}>
			{/* 모집분야명 입력:S */}
			<div className="jbGlbNmArea">
				<div className="insrtNmArea">
					<input type="text" placeholder="모집분야명을 입력해주세요." readOnly />
					<div className="btnswa">
						<button className="tnbx tp1" title="모집분야 복사"></button>
						<button className="tnbx tp2" title="모집분야 삭제"></button>
						<button className="tnbx tp3" title="모집분야 확장"></button>
					</div>
				</div>
			</div>
			{/* 모집분야명 입력:E */}
			<div className="jbGlbTogArea">
				{item}
			</div>
		</MRecruitDuplicateList>
	)
}

const MRecruitDuplicateList = styled('div', {
	marginTop: 48,
	"&+&": {
		marginTop: 20,
	},
	"& .jbGlbTogArea": {
		display: "none",
	},
	"& .insrtNmArea": {
		"border": "1px solid #b2b2b2",
		"border-radius": "2px",
		"overflow": "hidden",
		"background": "#fff",
		"box-shadow": "0 5px 15px rgba(0,0,0,0.11)",
		"padding-right": "210px",
		"position": "relative",
		"& input": {
			"border": "none",
			"background": "none",
			"box-shadow": "none",
			"display": "block",
			"height": "72px",
			"font-size": "22px",
			"text-indent": "30px",
			"color": "#000",
			"width": "100%",
		},
		"& .btnswa": {
			"position": "absolute",
			"right": "0",
			"top": "0",
			"&:after": {
				"content": "",
				"display": "table",
				"clear": "both",
			},
			"& .tnbx": {
				"width": "70px",
				"height": "72px",
				"border": "none",
				"border-left": "1px solid #ddd",
				"background": "#fff no-repeat center center",
				"float": "left",
				"&.tp1": {
					backgroundImage: `url(${require("assets/images/jobposts/btnswa_tp1.png")})`,
				},
				"&.tp2": {
					backgroundImage: `url(${require("assets/images/jobposts/btnswa_tp2.png")})`,
				},
				"&.tp3": {
					backgroundImage: `url(${require("assets/images/jobposts/btnswa_tp3.png")})`,
				},
			}
		}
	}
})
const MRecruitDuplicate = styled('div', {
	"& .jbGlbNmLists.show .jbGlbTogArea": {
		display: 'block',
	},
	"& .jbGlbNmLists.show .jbGlbNmArea .insrtNmArea": {
		borderColor: "#454545",
	},
	"& .jbGlbNmLists.show .jbGlbNmArea .insrtNmArea .btnswa .tnbx.tp3": {
		backgroundImage: `url(${require("assets/images/jobposts/btnswa_tp3_up.png")})`,
	}
})

export default RecruitDuplicate;
