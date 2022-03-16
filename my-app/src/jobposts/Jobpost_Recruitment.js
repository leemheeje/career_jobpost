import React, { useEffect, useState } from 'react';
import Section from 'components/Section';
import FormLayout from 'jobposts/components/Form_Layout';
import RecruitDuplicate, { RecruitDuplicateStatubar, RecruitDuplicateListsGroup, RecruitDuplicateLists } from 'jobposts/components/Recruit_Duplicate';
import { SortWrapping, Sorted, FavSorted, SortTooltip } from 'jobposts/components/Sort_Layout';
import Row from 'components/Row';
import Colum from 'components/Colum';
import Text from 'components/Text';
import Select from 'components/Select';
import Selected, { SelectedWrapping } from 'components/Selected';
import { Input, Checkbox, Radio } from 'components/Input';
import { GRADE } from 'api';
import { Tag, TagGroup } from 'components/Tag';

const career_gubun = [
	{
		title: '신입',
		value: '1',
	},
	{
		title: '경력',
		value: '99',
	}
];

const Jobpost_Recruitment = () => {

	//경력여부
	const [data, setdata] = useState([
		{
			mozip_nm: '경영지원', //모집분야 명
			mozip_length: '3', //모집인원
			is_career: '99', //신입=1/경력=99
			career_rang: '99', //경력년수
			task_required: '123123', //담당업무
			work_part: '111', //근무부서
			grade_position: [
				{ "title": "사원", "code": "POS001" },
				{ "title": "주임", "code": "POS002" },
				{ "title": "계장", "code": "POS003" },
				{ "title": "대리", "code": "POS004" },
				{ "title": "과장", "code": "POS005" },
				{ "title": "차장", "code": "POS006" },
			], //모집분야>직급
			grade_responsibilitie: [
				{ "title": "지점장", "code": "RES005" },
				{ "title": "지사장", "code": "RES006" },
				{ "title": "파트장", "code": "RES007" },
			], //모집분야>직책
			grade_fav_list: [
				{ "title": "이사", "code": "POS012" },
				{ "title": "대리", "code": "POS004" },
				{ "title": "지사장", "code": "RES006" },
			] //모집분야>직급/직책>자주찾는직급
		},
	]);
	const [gradeSelTooltip, setGradeSelTooltip] = useState(false);

	let car_array = (() => {
		let _v = [];
		for (let i = 1; i <= 20; i++) {
			_v.push(i);
		}
		return _v;
	})();
	useEffect(() => {
	}, [data])


	const handlerDataSprtMerge = (value = '', name = '', key = 0, isN = false) => {
		let _data = [...data];
		if (typeof _data[key][name] === 'object') {
			if (!isN) {
				_data[key][name] = [..._data[key][name], ...value];
			} else {
				_data[key][name] = value;
			}
		} else {
			_data[key][name] = value;
		}
		console.log(_data);
		setdata(_data);
	}
	const handlerDataSprtDelete = (value = '', name = '', key = 0) => {

	}

	const handlerMozipLength = (event) => {
		const _target = event.target;
		if (!_target.value) {
			_target.value = 0;
		}
	}

	const handlerTagCallback = event => {
		console.log(event.target);
	}



	return (
		<Section title="모집분야" stitle="어떤 업무를 담당할 인재를 채용하시나요?">
			<RecruitDuplicate className="MT50" initalize={(
				data.map((item, key) => (
					<RecruitDuplicateListsGroup key={key} isShow={true}>
						<RecruitDuplicateStatubar onInputTitle={item.mozip_nm} />
						<RecruitDuplicateLists>
							<FormLayout label="모집분야" className="required MT40">
								<Row>
									<Colum col7>
										<Input type="text" name="mozip_nm" value={item.mozip_nm} onChange={event => handlerDataSprtMerge(event.target.value, 'mozip_nm', key)} placeholder="EX) RD, 경영지원" />
									</Colum>
									<Colum col00>
										<Row alignItemsCenter>
											<Colum col00>
												<Input name="mozip_length" className="inline" defaultValue={item.mozip_length} onBlur={event => handlerMozipLength(event)} type="number" placeholder="모집인원" />
											</Colum>
											<Colum col00>
												<Text>명 모집</Text>
											</Colum>
										</Row>
									</Colum>
								</Row>
							</FormLayout>
							<FormLayout label="경력여부" smpadding className="required MT40">
								<Row>
									{
										career_gubun.map((res, index) => (
											<Colum col00 className='MR25' key={index}>
												<Radio
													name={`is_career${key}`}
													value={res.value}
													label={res.title}
													defaultChecked={item.is_career === res.value}
													onChange={event => handlerDataSprtMerge(event.target.value, 'is_career', key)}
												/>
											</Colum>
										))
									}
									{
										item.is_career === '99' &&
										<>
											<Colum col00 className='MR25'>
												<Select name='career_rang' value={item.career_rang} css={
													{
														width: 160,
														marginTop: -14
													}
												} onChange={event => handlerDataSprtMerge(event.target.value, 'career_rang', key)}>
													<option value=''>년수선택</option>
													{
														car_array.map((item, key) => (
															<option key={key} value={item}>{item}년</option>
														))
													}
													<option value="20s">20년 이상</option>
													<option value="99">경력년수 무관</option>
												</Select>
											</Colum>
											<Colum col00 className='MR25'>
												<Checkbox label="경력무관" value="99" checked={item.career_rang === '99'} onChange={event => (
													event.target.checked
														? handlerDataSprtMerge(event.target.value, 'career_rang', key)
														: handlerDataSprtMerge('', 'career_rang', key)
												)} />
											</Colum>
										</>

									}

								</Row>
							</FormLayout>
							<FormLayout label="담당업무" className="MT35">
								<Row>
									<Colum col12>
										<Input type="text" name="task_required" defaultValue={item.task_required} placeholder="담당업무를 자세히 기재할수록 지원율이 높아집니다." />
									</Colum>
								</Row>
							</FormLayout>
							<FormLayout label="근무부서">
								<Row>
									<Colum col6>
										<Input type="text" name="work_part" defaultValue={item.work_part} placeholder="근무 부서명을 입력해 주세요." />
									</Colum>
								</Row>
							</FormLayout>
							<FormLayout label='직급/직책'>


								<SortWrapping>
									<Sorted
										nullmsg="직급/직책을 선택해주세요. (3개까지 입력 가능)"
										onClickAnthButton={() => setGradeSelTooltip(true)}
									>
										{
											(item.grade_position.length || item.grade_responsibilitie.length)
											&&
											<SelectedWrapping>
												{
													item.grade_position.map((item, key) => item && <Selected key={key}>{item.title}</Selected>)
												}
												{
													item.grade_responsibilitie.map((item, key) => item && <Selected key={key}>{item.title}</Selected>)
												}
											</SelectedWrapping>
										}
										{
											gradeSelTooltip && <SortTooltip sortdata={[
												{
													"label": "직급",
													"content": GRADE.position.map(({ title, code }, _key) => (
														<Checkbox size="sm" key={_key} label={title} name={code} value={code} defaultChecked={
															item.grade_position.find((o) => o.code === code)
														} onChange={event => {
															if (event.target.checked) {
																handlerDataSprtMerge([{ "title": title, "code": code }], 'grade_position', key)
															} else {
																handlerDataSprtMerge(item.grade_position.map((o) => (
																	o.code !== code && o
																)), 'grade_position', key, true)
															}
														}} />
													))
												},
												{
													"label": "직책",
													"content": GRADE.responsibilitie.map(({ title, code }, _key) => (
														<Checkbox size="sm" key={_key} label={title} name={code} value={code} defaultChecked={
															item.grade_responsibilitie.find((o) => o.code === code)
														} onChange={event => {
															if (event.target.checked) {
																handlerDataSprtMerge([{ "title": title, "code": code }], 'grade_responsibilitie', key)
															} else {
																handlerDataSprtMerge(item.grade_responsibilitie.map((o) => (
																	o.code !== code && o
																)), 'grade_responsibilitie', key, true)
															}
														}} />
													))
												}
											]} onClickCancelButton={() => setGradeSelTooltip(false)} onClickConfirmButton={() => setGradeSelTooltip(false)} />
										}
									</Sorted>



									<FavSorted title="자주 사용하는 직급/직책 선택">
										<TagGroup>
											{
												item.grade_fav_list.map(({ title, code }, key) => (
													<Tag key={key} label={`+${title}`} name={code} defaultChecked={
														item.grade_position.find((o) => o.code === code) || item.grade_responsibilitie.find((o) => o.code === code)
													} onChange={event => {
														if (event.target.checked) {
															handlerDataSprtMerge([{ "title": title, "code": code }], 'grade_position', key)
															//handlerDataSprtMerge([{ "title": title, "code": code }], 'grade_responsibilitie', key)
														} else {
															handlerDataSprtMerge(item.grade_position.map((o) => (
																o.code !== code && o
															)), 'grade_position', key, true)
														}
													}} />
												))
											}
										</TagGroup>
									</FavSorted>
								</SortWrapping>




							</FormLayout>
							<FormLayout label='우대조건'>
								<button onClick={() => handlerDataSprtMerge([{ "title": "전무", "code": "POS014" }], 'grade_position', key)}>buttonbuttonbuttonbutton</button>
								{/* <button onClick={()=>handlerDataSprtMerge('asdf', 'mozip_nm', key)}>buttonbuttonbuttonbutton</button> */}
								<SortWrapping>
									<Sorted />
									<FavSorted />
								</SortWrapping>
							</FormLayout>
						</RecruitDuplicateLists>
					</RecruitDuplicateListsGroup>
				))
			)}>
			</RecruitDuplicate>
		</Section>
	);
}


export default Jobpost_Recruitment;
