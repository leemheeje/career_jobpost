import React from 'react';
import Section from 'components/Section';
import { Switch, Label } from 'components/Switch';
import FormLayout from 'jobposts/components/Form_Layout';
import RecruitProcess from 'jobposts/components/Recruit_Process';
import { SortWrapping, Sorted } from 'jobposts/components/Sort_Layout';
import Colum from 'components/Colum';
import Row from 'components/Row';
import Text from 'components/Text';
import { Input, Datepicker, Checkbox, Textarea, Radio } from 'components/Input';
import Select from 'components/Select';
import { AddformRow, AddformWrapping } from './components/Addform_Layout';


const Jobpost_HowToApply = () => {
	return (
		<Section title='접수방법' stitle='접수방법 및 채용절차는어떻게 되나요?'>
			<FormLayout className='MT40' label='직무 (직업)' required>
				<SortWrapping>
					<Sorted />
				</SortWrapping>
			</FormLayout>
			<FormLayout label='접수기간' required>
				<Row>
					<Colum col75>
						<Switch lg>
							<Label name='AEC021' defaultChecked>1개월</Label>
							<Label name='AEC021'>2개월</Label>
							<Label name='AEC021'>3개월</Label>
							<Label name='AEC021'>상시채용</Label>
						</Switch>
					</Colum>
				</Row>
				<Row alignItemsCenter className='MT10'>
					<Colum style={{ width: 200 }}>
						<Datepicker />
					</Colum>
					<Colum style={{ width: 120 }}>
						<Select>
							<option>00시</option>
						</Select>
					</Colum>
					<Colum col00>
						<Text>~</Text>
					</Colum>
					<Colum style={{ width: 200 }}>
						<Datepicker />
					</Colum>
					<Colum style={{ width: 120 }}>
						<Select>
							<option>00시</option>
						</Select>
					</Colum>
				</Row>
			</FormLayout>
			<FormLayout className='MT30' label='접수방법' smpadding required>
				<Row alignItemsCenter style={{ marginBottom: 20 }}>
					<Colum col00>
						<Checkbox>
							<span className='FWB' style={{ color: '#1564fb' }}>커리어 접수</span>
						</Checkbox>
					</Colum>
					<Colum col00 className='ML10'>
						<Text sm>* PC와 모바일 어디에서나 손쉽게 바로지원이 가능 / 지원서는 인사담당자의 메일로 전송됩니다.</Text>
					</Colum>
				</Row>
				<Row static>
					<Colum col2 style={{ marginBottom: 20 }}>
						<Checkbox label='홈페이지' />
					</Colum>
					<Colum col2 style={{ marginBottom: 20 }}>
						<Checkbox label='우편' />
					</Colum>
					<Colum col2 style={{ marginBottom: 20 }}>
						<Checkbox label='방문' />
					</Colum>
					<Colum col2 style={{ marginBottom: 20 }}>
						<Checkbox label='e-mail' />
					</Colum>
					<Colum col2 style={{ marginBottom: 20 }}>
						<Checkbox label='FAX' />
					</Colum>
				</Row>
				<AddformWrapping>
					<AddformRow label='ㆍ홈페이지 URL'>
						<Row>
							<Colum col12>
								<Input type='text' />
							</Colum>
						</Row>
					</AddformRow>
					<AddformRow label='ㆍE-Mail 주소'>
						<Row>
							<Colum col10>
								<Input type='text' defaultValue='ditak@career.co.kr' />
							</Colum>
						</Row>
					</AddformRow>
					<AddformRow label='ㆍ팩스 번호'>
						<Row alignItemsCenter>
							<Colum style={{ width: 100 }}>
								<Input type='number' />
							</Colum>
							<Colum col00>
								<Text>~</Text>
							</Colum>
							<Colum style={{ width: 100 }}>
								<Input type='number' />
							</Colum>
							<Colum col00>
								<Text>~</Text>
							</Colum>
							<Colum style={{ width: 100 }}>
								<Input type='number' />
							</Colum>
						</Row>
					</AddformRow>
				</AddformWrapping>
			</FormLayout>
			<FormLayout className='MT30' label='지원양식' required>
				<Select style={{ width: 230 }}>
					<option>커리어 온라인 이력서 </option>
					<option>자사양식</option>
					<option>자유양식</option>
				</Select>
				<SortWrapping className='MT10'>
					<Sorted />
				</SortWrapping>
			</FormLayout>

			<FormLayout className='MT40' label='채용절차' required>
				<RecruitProcess/>
			</FormLayout>

			<FormLayout className='MT50' label='제출서류' smpadding>
				<Row static>
					<Colum col2 style={{ marginBottom: 20 }}>
						<Checkbox label='사전인터뷰' />
					</Colum>
					<Colum col2 style={{ marginBottom: 20 }}>
						<Checkbox label='영문이력서' />
					</Colum>
					<Colum col2 style={{ marginBottom: 20 }}>
						<Checkbox label='포트폴리오' />
					</Colum>
				</Row>
				<AddformWrapping>
					<AddformRow label='ㆍ사전인터뷰'>
						<Row rowJustifyBetween style={{ alignItems: 'flex-end', paddingTop: 17 }}>
							<Colum col10>
								<Text md color='c333' style={{ lineHeight: '22px' }}>
									사전인터뷰 질문을 등록하시면, 지원자가 바로지원 시 이력서와 함께 답변을 드립니다.
									지원자의 생각과 역량을 미리 파악해 볼 수 있어 서류 합격자 선발에 도움이 됩니다.
								</Text>
							</Colum>
							<Colum>
								<Text>
									<button className='FWB UNDERLINE'>예문보기 ▼</button>
								</Text>
							</Colum>
						</Row>
						<Row className='MT25'>
							<Colum col12>
								<Textarea placeholder="사전인터뷰를 입력해 주세요." />
							</Colum>
						</Row>
					</AddformRow>
					<AddformRow label='ㆍ영문이력서'>
						<Row style={{ paddingTop: 17 }}>
							<Colum col00 className='MR15'>
								<Radio name="EXQ1258" label='영문이력서만 첨부' defaultChecked />
							</Colum>
							<Colum col00 className='MR15'>
								<Radio name="EXQ1258" label='영문이력서와 국문이력서 모두 첨부' />
							</Colum>
						</Row>
					</AddformRow>
				</AddformWrapping>
			</FormLayout>
		</Section>
	);
}

export default Jobpost_HowToApply;
