import React, { useEffect, useState } from 'react';
import Section from 'components/Section';
import FormLayout from 'jobposts/components/Form_Layout';
// import RecruitDuplicate, { RecruitDuplicateStatubar, RecruitDuplicateListsGroup, RecruitDuplicateLists } from 'jobposts/components/Recruit_Duplicate';
import { SortWrapping, Sorted, FavSorted, SortTooltip } from 'jobposts/components/Sort_Layout';
import Row from 'components/Row';
import Colum from 'components/Colum';
import Text from 'components/Text';
import Select from 'components/Select';
import Selected, { SelectedWrapping } from 'components/Selected';
import { Input, Checkbox, Radio } from 'components/Input';
import { GRADE } from 'api';
import { Tag, TagGroup } from 'components/Tag';
import Dialog from 'components/Dialog';
import { SortIndialogWrapping, SortContDicButton, SortCateDicButton } from 'jobposts/components/Sort_InDialog';
import Result from 'components/Result';

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
	const [data, setdata] = useState({
		mozip_nm: '경영지원', //모집분야 명
		mozip_length: '3', //모집인원
		is_career: '99', //신입=1/경력=99
		career_rang: '99', //경력년수
		task_required: '123123', //담당업무
		work_part: '111', //근무부서
		grade_position: [
			{ "title": "사원", "code": "POS001" },
			{ "title": "주임", "code": "POS002" },
		], //모집분야>직급
		grade_responsibilitie: [
			{ "title": "지점장", "code": "RES005" },
		], //모집분야>직책
		grade_fav_list: [
			{ "title": "이사", "code": "POS012" },
			{ "title": "대리", "code": "POS004" },
			{ "title": "지사장", "code": "RES006" },
		], //모집분야>직급/직책>자주찾는직급
		woodae_fav_list: [
			{ "title": "일본어 가능자", "code": "POS012" },
			{ "title": "지방근무 가능자", "code": "POS004" },
			{ "title": "엑셀 고급능력 보유자", "code": "POS012" },
			{ "title": "인근 거주자", "code": "POS004" },
			{ "title": "여성", "code": "POS012" },
			{ "title": "여군(장교, 부사관", "code": "POS004" },
			{ "title": "인근 거주자", "code": "POS012" },
			{ "title": "여성", "code": "POS004" },
			{ "title": "여군(장교, 부사관", "code": "RES006" },
		] //모집분야>우대조건>자주찾는우대조건
	});
	const [gradeSpread, setGradeSpread] = useState([...data.grade_position, ...data.grade_responsibilitie]);
	const [gradeSelTooltip, setGradeSelTooltip] = useState(false);
	const [woodaeDialogOpen, setWoodaeDialogOpen] = useState(false);

	let car_array = (() => {
		let _v = [];
		for (let i = 1; i <= 20; i++) {
			_v.push(i);
		}
		return _v;
	})();
	let data_gubun = (c) => {
		if (!c) return false;
		return c.indexOf('RES') !== -1 ? 'grade_responsibilitie' : 'grade_position';
	}

	useEffect(() => {
		setGradeSpread([...data.grade_position, ...data.grade_responsibilitie]);
	}, [data.grade_position, data.grade_responsibilitie])

	const handlerDataSprtMerge = (value = '', name = '', isN = false) => {
		let _data = { ...data };
		if (typeof _data[name] === 'object') {
			if (!isN) {
				_data[name] = [..._data[name], ...value];
			} else {
				_data[name] = value;
			}
		} else {
			_data[name] = value;
		}
		setdata(_data);
	}

	const handlerMozipLength = (event) => {
		const _target = event.target;
		if (!_target.value) {
			_target.value = 0;
		}
	}

	const handlerGradeCheckbox = (event, {
		title,
		code,
		name
	}) => {
		if (event.target.checked) {
			bandlerGradeAdd([{ "title": title, "code": code }], name);
		} else {
			bandlerGradeDelete(code, name);
		}
	}
	const bandlerGradeAdd = (value, name) => {
		handlerDataSprtMerge(value, name);
	}
	const bandlerGradeDelete = (code, name) => {
		let _d = data[name].map((o) => o.code !== code && o);
		handlerDataSprtMerge(_d, name, true);
	}



	return (
		<Section title="모집분야" stitle="어떤 업무를 담당할 인재를 채용하시나요?">
			<FormLayout label="모집분야" className="required MT40">
				<Row>
					<Colum col7>
						<Input type="text" name="mozip_nm" value={data.mozip_nm} onChange={event => handlerDataSprtMerge(event.target.value, 'mozip_nm')} placeholder="EX) RD, 경영지원" />
					</Colum>
					<Colum col00>
						<Row alignItemsCenter>
							<Colum col00>
								<Input name="mozip_length" className="inline" defaultValue={data.mozip_length} onBlur={event => handlerMozipLength(event)} type="number" placeholder="모집인원" />
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
									name={`is_career${index}`}
									value={res.value}
									label={res.title}
									defaultChecked={data.is_career === res.value}
									onChange={event => handlerDataSprtMerge(event.target.value, 'is_career')}
								/>
							</Colum>
						))
					}
					{
						data.is_career === '99' &&
						<>
							<Colum col00 className='MR25'>
								<Select name='career_rang' value={data.career_rang} css={
									{
										width: 160,
										marginTop: -14
									}
								} onChange={event => handlerDataSprtMerge(event.target.value, 'career_rang')}>
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
								<Checkbox label="경력무관" value="99" checked={data.career_rang === '99'} onChange={event => (
									event.target.checked
										? handlerDataSprtMerge(event.target.value, 'career_rang')
										: handlerDataSprtMerge('', 'career_rang')
								)} />
							</Colum>
						</>

					}

				</Row>
			</FormLayout>
			<FormLayout label="담당업무" className="MT35">
				<Row>
					<Colum col12>
						<Input type="text" name="task_required" defaultValue={data.task_required} placeholder="담당업무를 자세히 기재할수록 지원율이 높아집니다." />
					</Colum>
				</Row>
			</FormLayout>
			<FormLayout label="근무부서">
				<Row>
					<Colum col6>
						<Input type="text" name="work_part" defaultValue={data.work_part} placeholder="근무 부서명을 입력해 주세요." />
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
							gradeSpread.length ?
								<SelectedWrapping>
									{
										gradeSpread.map(({ title, code }, key) => title && code && <Selected onClick={event => bandlerGradeDelete(code, data_gubun(code))} key={key}>{title}</Selected>)
									}
								</SelectedWrapping>
								: ''
						}
						{
							gradeSelTooltip
							&&
							<SortTooltip
								onClickCancelButton={() => setGradeSelTooltip(false)}
								onClickConfirmButton={() => setGradeSelTooltip(false)}
								sortdata={[
									{
										"label": "직급",
										"content": GRADE.position.map((list, _key) => (
											<Checkbox size="sm" key={_key} label={list.title} name={list.code} value={list.code} defaultChecked={
												data.grade_position.find((o) => o.code === list.code)
											} onChange={event => handlerGradeCheckbox(event, { ...list, ...{ name: 'grade_position' } })} />
										))
									},
									{
										"label": "직책",
										"content": GRADE.responsibilitie.map((list, _key) => (
											<Checkbox size="sm" key={_key} label={list.title} name={list.code} value={list.code} defaultChecked={
												data.grade_responsibilitie.find((o) => o.code === list.code)
											} onChange={event => handlerGradeCheckbox(event, { ...list, ...{ name: 'grade_responsibilitie' } })} />
										))
									}
								]}
							/>
						}
					</Sorted>



					<FavSorted title="자주 사용하는 직급/직책 선택">
						<TagGroup>
							{
								data.grade_fav_list.map(({ title, code }, key) => {
									let name = data_gubun(code);
									return (
										<Tag key={key} label={`+${title}`} name={code} value={code} checked={
											gradeSpread.find((o) => o.code === code) ? true : false
										} onChange={event => handlerGradeCheckbox(event, {
											title,
											code,
											name,
										})} />
									)
								})
							}
						</TagGroup>
					</FavSorted>
				</SortWrapping>




			</FormLayout>
			<FormLayout label='우대조건'>
				<SortWrapping>
					<Sorted
						nullmsg='우대조건을 선택해주세요. (6개까지 입력 가능)'
						onClickAnthButton={() => setWoodaeDialogOpen(true)}
					>
						{
							woodaeDialogOpen
							&&
							<Dialog
								title='우대조건 선택'
								subtitle='최대 6개까지 선택 가능'
								onClickCancelButton={() => setWoodaeDialogOpen(false)}
								onClickConfirmButton={() => setWoodaeDialogOpen(false)}
							>
								<SortIndialogWrapping
									sortCategoryArea={(
										['', ''].map((item, key) => <SortCateDicButton key={key}>asdf</SortCateDicButton>)
									)}
									sortContentArea={(
										['', ''].map((item, key) => <SortContDicButton key={key}>asdf</SortContDicButton>)
									)}
								/>
								<Result className='MT15' />
							</Dialog>
						}
					</Sorted>
					<FavSorted title="자주 사용하는 우대조건 선택">
						<TagGroup>
							{
								data.woodae_fav_list.map(({ title, code }, key) => {
									return (
										<Tag key={key} label={`+${title}`} name={code} value={code} />
									)
								})
							}
						</TagGroup>
					</FavSorted>
				</SortWrapping>
			</FormLayout>
			{/* <RecruitDuplicate className="MT50" initalize={(
				data.map((item) => (
					<RecruitDuplicateListsGroup key={key} isShow={true}>
						<RecruitDuplicateStatubar onInputTitle={data.mozip_nm} />
						<RecruitDuplicateLists>
						</RecruitDuplicateLists>
					</RecruitDuplicateListsGroup>
				))
			)}>
			</RecruitDuplicate> */}
		</Section>
	);
}


export default Jobpost_Recruitment;
