import React from 'react';
import { styled } from 'components/styles/stitches.config';
import Button from 'components/Button';

export const SortWrapping = ({
	children,
	className,
	...props
}) => {
	return (
		<MSortLayout className={`jbChicCmArea ${className}`}>
			{children}
		</MSortLayout>
	);
}

export const Sorted = ({
	children,
	nullmsg = '직급/직책을 선택해주세요. (3개까지 입력 가능)',
	onClickAnthButton = () => { },
	buttonTitle = '전체보기',
	...props
}) => {
	const handlerAnthButton = (event) => {
		onClickAnthButton(event);
	}
	return (
		<>
			<MSorted className="tmATInn">
				{children || (<div className="tmNulIns">{nullmsg}</div>)}
			</MSorted>
			<div className="btnwArea">
				<Button size="sm" onClick={(event) => handlerAnthButton(event)}>{buttonTitle}</Button>
			</div>
		</>
	)
}

export const SortTooltip = ({
	onClickCancelButton = () => { },
	onClickConfirmButton = () => { },
	onChangeCheckbox = () => { },
	sortdata = [],
	...props
}) => {
	return (
		<MSortTooltip className='jbChikTotiArea'>
			<div className="jbcGlInners">
				<div className="jbcHdAec">
					{
						sortdata.map(({ label }, key) => (
							<div className="colst w5" key={key}>
								<div className="intxs">
									<span className="int">{label}</span>
								</div>
							</div>
						))
					}
				</div>
				<div className='jbcCtAec'>
					{
						sortdata.map(({ content }, key) => (
							<div className='colst w5' key={key}>
								<div className='jbcDepArea'>
									{/* foreach:S */}
									{
										content.map((item, k) => (
											<div className='colst w3' key={k}>
												{item}
											</div>
										))
									}
									{/* foreach:E */}
								</div>
							</div>
						))
					}
				</div>
				<div className="jbcBtAec">
					<div className="btwGrs">
						<Button size="md" className="outline" onClick={() => onClickCancelButton()}>취소</Button>
						<Button size="md" onClick={() => onClickConfirmButton()}>확인</Button>
					</div>
				</div>
			</div>
		</MSortTooltip>
	)
}

export const FavSorted = ({
	children,
	title = '자주 사용하는 외국어 선택',
	onClickTagCallback,
	...props
}) => {
	return (
		<MFavSorted className="useBtArea">
			<span className="tpwLabs">{title}</span>
			<div className='MT10'>
				{/* <TagGroup className="MT10">
				{
					labels.map(({title,code}, index) => <Tag key={index} name={code} checked={

					} onChange={(event) => handlerTagCallback(event)}>+{title}</Tag>)
				}
			</TagGroup> */}
				{children}
			</div>
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

