import React, { useEffect, useState } from 'react';
import Section from 'components/Section';
import FormLayout from 'jobposts/components/Form_Layout';
import RecruitDuplicate, { RecruitDuplicateStatubar, RecruitDuplicateListsGroup, RecruitDuplicateLists } from 'jobposts/components/Recruit_Duplicate';
import { SortWrapping, Sorted, FavSorted } from 'jobposts/components/Sort_Layout';
import Row from 'components/Row';
import Colum from 'components/Colum';
import Text from 'components/Text';
import Select from 'components/Select';
import { Input, Checkbox, Radio } from 'components/Input';

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
			is_career: '1', //신입=1/경력=99
		},
	]);


	useEffect(() => {
		console.log(123123);
	}, [data])

	const handlerMozipNm = (event, key) => {
		let _data = [...data];
		_data[key]['mozip_nm'] = event.target.value;
		setdata(_data);
	}

	const handlerMozipLength = (event) => {
		const _target = event.target;
		if (!_target.value) {
			_target.value = 0;
		}
	}
	const handlerCarrerGubun = (event, key) => {
		let _data = [...data];
		_data[key]['is_career'] = event.target.value;
		setdata(_data);
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
										<Input type="text" defaultValue={item.mozip_nm} onChange={event => handlerMozipNm(event, key)} placeholder="EX) RD, 경영지원" />
									</Colum>
									<Colum col00>
										<Row alignItemsCenter>
											<Colum col00>
												<Input className="inline" defaultValue={item.mozip_length} onBlur={event => handlerMozipLength(event)} type="number" placeholder="모집인원" />
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
													name={`isCareer${key}`}
													value={res.value}
													label={res.title}
													defaultChecked={item.is_career === res.value}
													onChange={event => handlerCarrerGubun(event, key)}
												/>
											</Colum>
										))
									}
									{
										item.is_career === '99' &&
										<>
											<Colum col00 className='MR25'>
												<Select defaultValue='' css={
													{
														width: 160,
														marginTop: -14
													}
												}>
													<option value=''>년수선택</option>
													{
														[1, 2, 3].map((item, key) => (
															<option key={key} value={item}>{item}년</option>
														))
													}
													<option value="20s">20년 이상</option>
													<option value="99">경력년수 무관</option>
												</Select>
											</Colum>
											<Colum col00 className='MR25'>
												<Checkbox label="경력무관" />
											</Colum>
										</>

									}

								</Row>
							</FormLayout>
							<FormLayout label="담당업무" className="MT35">
								<Row>
									<Colum col12>
										<Input type="text" placeholder="담당업무를 자세히 기재할수록 지원율이 높아집니다." />
									</Colum>
								</Row>
							</FormLayout>
							<FormLayout label="근무부서">
								<Row>
									<Colum col6>
										<Input type="text" placeholder="근무 부서명을 입력해 주세요." />
									</Colum>
								</Row>
							</FormLayout>
							<FormLayout label='직급/직책'>
								<SortWrapping>
									<Sorted />
									<FavSorted />
								</SortWrapping>
							</FormLayout>
							<FormLayout label='우대조건'>
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

const CareerGubun = ({
	key,
	item,
	...props
}) => {
	const career_gubun = [
		{
			title: '신입',
			value: 1,
		},
		{
			title: '경력',
			value: 99,
		}
	];
	return (
		career_gubun.map((res, index) => (
			<Colum col00 className='MR25' key={index}>
				<Radio name={`isCareer${key}`} value={res.value} label={res.title} defaultChecked={item.is_career === res.value} {...props} />
			</Colum>
		))
	)
}

export default Jobpost_Recruitment;
