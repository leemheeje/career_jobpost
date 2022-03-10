import React from 'react';
import { styled } from 'components/styles/stitches.config';
import Button from 'components/Button';
import { Tag, TagGroup } from 'components/Tag';

export const SortWrapping = ({
	children,
	...props
}) => {
	return (
		<MSortLayout className='jbChicCmArea'>
			{children}
		</MSortLayout>
	);
}

export const Sorted = ({
	children,
	...props
}) => {
	return (
		<>
			<MSorted className="tmATInn">
				{/* 선택된영역이있을때:S */}
				{children}
				{/* 선택된영역이있을때:E */}
				{/* 선택된영역이없을때:S */}
				<div className="tmNulIns">직급/직책을 선택해주세요. (3개까지 입력 가능)</div>
				{/* 선택된영역이없을때:E */}
				{/* <Sort_Tooltip /> */}
			</MSorted>
			<div className="btnwArea">
				<Button size="sm">전체보기</Button>
			</div>
		</>
	)
}

export const Sort_Tooltip = ({
	...props
}) => {
	return (
		<MSortTooltip className='jbChikTotiArea'>
			<div className="jbcGlInners">
				<div className="jbcHdAec">
					<div className="colst w5">
						<div className="intxs">
							<span className="int">직급</span>
						</div>
					</div>
					<div className="colst w5">
						<div className="intxs">
							<span className="int">직책</span>
						</div>
					</div>
				</div>
				<div className='jbcCtAec'>
					<div className='colst w5'>
						<div className='jbcDepArea'>
							{/* foreach:S */}
							<div className='colst w3'>

								<div className="jbForm sm">
									<label>
										<input type="checkbox" id="" name="" value="" />
										<span className="lb">사원</span>
									</label>
								</div>

							</div>
							{/* foreach:E */}
						</div>
					</div>
					<div className='colst w5'>
						<div className='jbcDepArea'>
							{/* foreach:S */}
							<div className='colst w3'>

								<div className="jbForm sm">
									<label>
										<input type="checkbox" id="" name="" value="" />
										<span className="lb">사원</span>
									</label>
								</div>

							</div>
							{/* foreach:E */}
						</div>
					</div>
				</div>
				<div className="jbcBtAec">
					<div className="btwGrs">
						<Button size="md" className="outline">취소</Button>
						<Button size="md">확인</Button>
					</div>
				</div>
			</div>
		</MSortTooltip>
	)
}

export const FavSorted = ({ ...props }) => {
	return (
		<MFavSorted className="useBtArea">
			<span className="tpwLabs">자주 사용하는 외국어 선택</span>
			<TagGroup>
				{
					['+JLPT', '+HSK'].map((item, index) => <Tag key={index}>{item}</Tag>)
				}
			</TagGroup>
		</MFavSorted>
	)
}

const MSortTooltip = styled('div', {
	"position": "absolute",
	"left": "calc(0% - 1px)",
	"top": "100%",
	"width": "calc(100% + 2px)",
	"z-index": "1",
	"& .colst": {
		"float": "left",
		"&.w5": { "width": "50%" },
		"&.w3": { "width": "33.333%" },
		"&.w5+&.w5": { "border-left": "1px solid #eaeaea", }
	},
	"& .jbcGlInners": {
		"display": "block",
		"border": "1px solid #454545",
		"border-radius": "2px",
	},
	"& .jbcHdAec": {
		"background": "#fafafa",
		"border-bottom": "1px solid #eaeaea",
		"&:after": {
			"content": "",
			"display": "table",
			"clear": "both",
		},
		"& .intxs": {
			"text-align": "center",
			"padding": "13px 5px",
			"min-height": "46px",
			"& .int": {
				"font-size": "15px",
				"line-height": "20px",
				"color": "#333",
				"font-weight": "bold",
				"display": "inline-block",
				"vertical-align": "middle",
			}
		}
	},
	"& .jbcCtAec": {
		"border-bottom": "1px solid #eaeaea",
		"&:after": {
			"content": "",
			"display": "table",
			"clear": "both",
		},
		"& .jbcDepArea": {
			"height": "260px",
			"overflow": "hidden",
			"overflow-y": "auto",
			"background": "#fff",
			"padding": "10px",
			"& .colst": {
				"padding": "6px 10px",
			}
		}
	},
	"& .jbcBtAec": {
		"background": "#fff",
		"padding": "10px",
		"& .btwGrs": {
			"text-align": "right",
			"font-size": "0",
			"& button+button": {
				marginLeft: 5
			}
		}
	}
})
const MFavSorted = styled('div', {
	"padding": "20px",
	"& .tpwLabs": {
		"display": "block",
		"text-align": "left",
		"color": "#666",
		"font-size": "14px",
		"font-weight": "normal",
		"line-height": "20px",
		"&:before": {
			"content": 'ㆍ',
		}
	}
})
const MSorted = styled('div', {
	"min-height": "51px",
	"padding-right": "90px",
	"background": "#f1f3f5",
	"position": "relative",
	"& .tmNulIns": {
		"font-size": "15px",
		"line-height": "25px",
		"color": "#bbb",
		"text-align": "left",
		"display": "block",
		"padding": "14px 20px 13px",
	}
})
const MSortLayout = styled('div', {
	"border": "1px solid #cbd1db",
	"border-radius": "2px",
	"position": "relative",
	"& .btnwArea": {
		"position": "absolute",
		"right": "10px",
		"top": "10px",
	},
})

