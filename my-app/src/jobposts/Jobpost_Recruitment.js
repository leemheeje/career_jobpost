import React from 'react';
import Section from 'components/Section';
import FormLayout from 'jobposts/components/Form_Layout';
import { SortIndialogWrapping, SortCateDicButton, SortContDicButton } from 'jobposts/components/Sort_InDialog';
import { SortWrapping, Sorted, FavSorted } from 'jobposts/components/Sort_Layout';
import Row from 'components/Row';
import Colum from 'components/Colum';
import Text from 'components/Text';
import Select from 'components/Select';
import { Input, Checkbox } from 'components/Input';
import Dialog from 'components/Dialog';
// import { Tag, TagGroup } from 'components/Tag';


const JobpostRecruitment = () => {
	return (
		<>
			<Section title="모집분야" stitle="어떤 업무를 담당할 인재를 채용하시나요?">
				<FormLayout label="모집분야" className="required MT40">
					<Row>
						<Colum col7>
							<Input type="text" placeholder="EX) RD, 경영지원" />
						</Colum>
						<Colum col00>
							<Row alignItemsCenter>
								<Colum col00>
									<Input className="inline" type="number" placeholder="모집인원" />
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
						<Colum col00>
							<Checkbox label="신입" />
						</Colum>
						<Colum col00 className='ML25'>
							<Checkbox label="경력" />
						</Colum>
						<Colum col00 className='ML25'>
							<Select css={
								{
									width: 160,
									marginTop: -14
								}
							}>
								<option value="">년수선택</option>
							</Select>
						</Colum>
						<Colum col00 className='ML25'>
							<Checkbox label="경력무관" />
						</Colum>
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
				<FormLayout label='우대조건'>
					<Dialog>
						<SortIndialogWrapping sortCategoryArea={(
							["취업보호.장려", "취업보호.장려2"].map((item, key) => <SortCateDicButton onClick={() => alert(key)} key={key}>{item}</SortCateDicButton>)
						)} sortContentArea={(
							["취업보호.장려", "취업보호.장려2"].map((item, key) => <SortContDicButton onClick={() => alert(key)} key={key}>{item}</SortContDicButton>)
						)} />
					</Dialog>
				</FormLayout>
			</Section>
		</>
	);
}

export default JobpostRecruitment;
