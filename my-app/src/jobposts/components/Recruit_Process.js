import React from 'react';
import { styled } from 'components/styles/stitches.config';

const RecruitProcess = () => {
	return (
		<MRecruitProcess className="jbToggStepAdmArea">
			<div className="tsInners">

				{/* 고정영역1:S */}
				<div className="stepbarAr static">
					<div className="sbFntArea">
						<div className="sinnert">
							<div className="tnet_rx">
								<span className="lbes">서류</span>
								<div className="intxw">서류전형 <span className="lt">2022-01-28 ~ 2022-04-28</span></div>
							</div>
						</div>
					</div>
				</div>
				{/* 고정영역1:E */}

				{/* 확장영역:S */}
				<div className="stepbarAr ">
					<div className="sbFntArea">
						<div className="sinnert">
							<button className="tnet_rx">
								<span className="lbes">1차</span>
								<div className="intxw">실무 및 기술면접</div>
							</button>
							<div className="sne_rt">
								<button className="sne_btn tp3" title="삭제"></button>
								<button className="sne_btn tp2" disabled title="이전으로"></button>
								<button className="sne_btn tp1" title="다음으로"></button>
							</div>
						</div>
					</div>
				</div>
				{/* 확장영역:E */}

				{/* 고정영역2:S */}
				<div className="stepbarAr static">
					<div className="sbFntArea">
						<div className="sinnert">
							<div className="tnet_rx">
								<span className="lbes">합격</span>
								<div className="intxw">최종합격</div>
							</div>
						</div>
					</div>
				</div>
				{/* 고정영역2:E */}

			</div>
			<button className="jbSectAddButton">+채용절차 추가</button>
		</MRecruitProcess>
	);
}

const MRecruitProcess = styled('div', {
	"& .tsInners": {
		"font-size": "0",
		"padding": "20px",
		"background": "#eef2f7",
		"border-top-left-radius": "2px",
		"border-top-right-radius": "2px",
		"margin-bottom": "-5px",
	},
	"& .stepbarAr": {
		"position": "relative",
		"display": "inline-block",
		"vertical-align": "top",
		"width": "20%",
		"padding-right": "5px",
		"padding-bottom": "5px",
		"&.static .sbFntArea .sinnert .tnet_rx .lbes": {
			"background-color": "#454545",
		}
	},
	"& .sbFntArea": {
		"& .tnet_rx": {
			"border": "none",
			"background": "none",
			"display": "block",
			"width": "100%",
			"& .lbes": {
				"display": "block",
				"height": "54px",
				"line-height": "54px",
				"font-size": "15px",
				"color": "#fff",
				"font-weight": "bold",
				"text-align": "center",
				"background": "#38405c",
				"border-top-left-radius": "2px",
				"border-top-right-radius": "2px",
			},
			"& .intxw": {
				"height": "146px",
				"color": "#333",
				"font-size": "15px",
				"font-weight": "bold",
				"text-align": "center",
				"border": "1px solid #cbd1db",
				"border-top": "none",
				"border-bottom-left-radius": "2px",
				"border-bottom-right-radius": "2px",
				"display": "flex",
				"flex-direction": "column",
				"justify-content": "center",
				"background-color": "#fff",
				"& .tt": {
					display: 'block',
				},
				"& .lt": {
					"color": "#999",
					"font-size": "13px",
					"font-weight": "normal",
					"display": "block",
				},
			}
		},
		"& .sne_rt": {
			"& .sne_btn": {
				"width": "30px",
				"height": "30px",
				"display": "inline-block",
				"border": "none",
				"background": "transparent no-repeat center center",
				"position": "absolute",
				"&.tp1": {
					"background-image": `url(${require("assets/images/jobposts/sne_btn_down.png")})`,
					"right": "0",
					"top": "12px",
				},
				"&.tp2": {
					"background-image": `url(${require("assets/images/jobposts/sne_btn_up.png")})`,
					"left": "0",
					"top": "9px",
				},
				"&.tp3": {
					"background-image": `url(${require("assets/images/jobposts/sne_btn_del.png")})`,
					"right": "10px",
					"bottom": "9px",
				},
				"&.tp4": {
					"background-image": `url(${require("assets/images/jobposts/sne_btn_mod.png")})`,
				},
				"&:disabled": {
					"cursor": "default",
					"opacity": ".20",
				},
			}
		}
	},
	"& .jbSectAddButton": {
		"display": "block",
		"width": "100%",
		"clear": "both",
		"font-size": "16px",
		"font-weight": "bold",
		"color": "#333",
		"border": "1px solid #38405c",
		"border-radius": "2px",
		"background": "#fff",
		"height": "65px",
	}
})
export default RecruitProcess;




