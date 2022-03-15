import React from 'react';
import Section from 'components/Section';
import { SortWrapping, Sorted, FavSorted } from 'jobposts/components/Sort_Layout';
import { AddformWrapping, AddformRow } from 'jobposts/components/Addform_Layout';
import FormLayout from 'jobposts/components/Form_Layout';
import Row from 'components/Row';
import Colum from 'components/Colum';
import Select from 'components/Select';
import Text from 'components/Text';
import Button from 'components/Button';
import { Switch, Label } from 'components/Switch';
import { Input, Checkbox, Radio } from 'components/Input';

const Jobpost_Eligibility = () => {
	return (
		<Section title='지원자격' stitle='지원자격은 어떻게 되나요?'>
			<FormLayout label='학력' className="MT40">
				<Row alignItemsCenter>
					<Colum col35>
						<Select>
							<option defaultValue="">선택해주세요</option>
						</Select>
					</Colum>
					<Colum col4>
						<Input type="text" placeholder="(선택) 기타 학력사항" />
					</Colum>
					<Colum col00 className='ML15'>
						<Checkbox label='졸업예정자 가능' />
					</Colum>
				</Row>
			</FormLayout>
			<FormLayout label='외국어' slabel='(0/6)'>
				<SortWrapping>
					<Sorted />
					<FavSorted />
					<AddformWrapping>

						{/* foreach:S */}
						<AddformRow label='ㆍJLPT'>
							<Row alignItemsCenter>
								<Colum col5>
									<Input type='number' placeholder='점수입력' />
								</Colum>
								<Colum col00 className='MR45'>
									<Text>급(점) 이상</Text>
								</Colum>
								<Colum col00>
									<Switch>
										<Label name="asdfasdfasdf1112A" defaultChecked>필수</Label>
										<Label name="asdfasdfasdf1112A" >우대</Label>
									</Switch>
								</Colum>
								<Colum col00 className='ML10'>
									<Button delete_button />
								</Colum>
							</Row>
						</AddformRow>
						{/* foreach:E */}

					</AddformWrapping>
				</SortWrapping>
			</FormLayout>
			<FormLayout label='자격증' slabel='(0/3)'>
				<SortWrapping>
					<Sorted />
					<FavSorted />
				</SortWrapping>
			</FormLayout>
			<FormLayout label='우대전공' slabel='(0/6)'>
				<SortWrapping>
					<Sorted />
					<FavSorted />
				</SortWrapping>
			</FormLayout>
			<FormLayout smpadding label='성별제한'>
				<Row rowJustifyBetween>
					<Colum>
						<Row alignItemsCenter>
							<Colum col00 className='MR25'>
								<Radio name="jend" label='성별무관' />
							</Colum>
							<Colum col00 className='MR25'>
								<Radio name="jend" label='남자' />
							</Colum>
							<Colum col00 className='MR25'>
								<Radio name="jend" label='여자' />
							</Colum>
						</Row>
					</Colum>
					<Colum>
						<Row>
							<Colum col00>
								<Text sm>성차별금지 - <button>남녀고용평등에 관한 법률보기</button></Text>
							</Colum>
						</Row>
					</Colum>
				</Row>
			</FormLayout>
			<FormLayout smpadding label='연령제한'>
				<Row rowJustifyBetween>
					<Colum>
						<Row alignItemsCenter>
							<Colum col00 className='MR25'>
								<Radio name="age_limt" label='연령무관' />
							</Colum>
							<Colum col00 className='MR25'>
								<Radio name="age_limt" label='연령제한' />
							</Colum>
						</Row>
					</Colum>
					<Colum>
						<Row>
							<Colum col00>
								<Text sm>연령별금지 - <button>고용상 연령차별 금지에 관한 법률보기</button></Text>
							</Colum>
						</Row>
					</Colum>
				</Row>
				<Row alignItemsCenter className='MT20'>
					<Colum col00>
						<Input type="number" placeholder="숫자" style={{width : 120}}/>
					</Colum>
					<Colum col00>
						<Text>세 이상 ~</Text>
					</Colum>
					<Colum col00>
						<Input type="number" placeholder="숫자" style={{width : 120}}/>
					</Colum>
					<Colum col00>
						<Text>세 이하</Text>
					</Colum>
				</Row>
			</FormLayout>
		</Section>
	);
}

export default Jobpost_Eligibility;
