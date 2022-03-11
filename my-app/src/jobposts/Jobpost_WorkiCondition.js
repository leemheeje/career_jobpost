import React from 'react';
import Section from 'components/Section';
import FormLayout from 'jobposts/components/Form_Layout';
import AddremoveLayout from 'jobposts/components/AddRemove_Layout';
import Select from 'components/Select';
import Row from 'components/Row';
import Colum from 'components/Colum';
import Button from 'components/Button';
import Text from 'components/Text';
import { Checkbox, Input, Radio } from 'components/Input';
import { AddformRow, AddformWrapping } from './components/Addform_Layout';
import { Sorted, SortWrapping } from 'jobposts/components/Sort_Layout';

const Jobpost_WorkiCondition = () => {
	return (
		<Section title='근무조건' stitle='우리 회사 근무조건은 어떻게 되나요?'>
			<FormLayout className='MT40' label='연봉/급여' required>
				<Row alignItemsCenter>
					<Colum col3>
						<Select>
							<option>연봉</option>
						</Select>
					</Colum>
					<Colum col00>
						<Input inlabel={`${true}`} type="number" style={{ width: 300 }}>
							<label className="inl">만원</label>
						</Input>
					</Colum>
					<Colum col00 className='ML15'>
						<Checkbox label='면접 후 결정' />
					</Colum>
				</Row>
				<Row flexDirectionColumn className='MT10'>
					<Colum col12>
						<Text sm color="c333">
							<span className='FWB'>최저시급 8,720원, 주 40시간 기준, 최저연봉 약 21,869,760원</span> <button className='ML30 FWN'>최저 임금제도 안내</button>
						</Text>
					</Colum>
					<Colum col12>
						<Text sm color="c333">
							<span className='FWB'>주 40시간 기준, 최저 월급 약 1,822,480원</span> <button className='ML30 FWN'>최저 임금제도 안내</button>
						</Text>
					</Colum>
				</Row>
				<Row flexDirectionColumn>
					<Colum col12>
						<Text sm> 최저임금을 준수하지 않는 경우, 공고 강제 마감 및 행정처분을 받을 수 있습니다. </Text>
					</Colum>
				</Row>
			</FormLayout>
			<FormLayout smpadding label='근무형태' required>
				<Row static>
					<Colum col2 className='MB20'>
						<Checkbox label='정규직' />
					</Colum>
					<Colum col2 className='MB20'>
						<Checkbox label='계약직' />
					</Colum>
				</Row>
				<Row>
					<Colum col12>
						<Checkbox>대체인력<span className="lbe">출산·육아에 따른 대체인력을 채용형태</span></Checkbox>
					</Colum>
				</Row>
				<AddformWrapping className="MT10">
					<AddformRow label='ㆍ아르바이트 근무기간'>
						<Row alignItemsCenter>
							<Colum col00>
								<Select style={{ width: 180 }}>
									<option>기간선택</option>
								</Select>
							</Colum>
							<Colum col00 className='ML15'>
								<Checkbox label='정규직 전환가능' />
							</Colum>
							<Colum col00 className='ML15'>
								<Checkbox label='기간제' />
							</Colum>
							<Colum col00 className='ML15'>
								<Checkbox label='무기계약직' />
							</Colum>
						</Row>
					</AddformRow>
					<AddformRow label='ㆍ정규직 근무기간'>
						<Row alignItemsCenter>
							<Colum col00>
								<Select style={{ width: 180 }}>
									<option>기간선택</option>
								</Select>
							</Colum>
							<Colum col00 className='ML15'>
								<Checkbox label='정규직 전환가능' />
							</Colum>
						</Row>
					</AddformRow>
				</AddformWrapping>
			</FormLayout>
			<FormLayout className='MT45' smpadding label='근무지 주소' required>
				<Row>
					<Colum col00 className='MR25'>
						<Radio label='국내' />
					</Colum>
					<Colum col00 className='MR25'>
						<Radio label='해외' />
					</Colum>
					<Colum col00 className='MR25'>
						<Checkbox label='재택근무 가능' />
					</Colum>
				</Row>
				<AddremoveLayout className='MT20' initialize={(
					['asdf', 'bbbb'].map((item, key) => {
						return (
							<Row>
								<Colum style={{ width: 300 }}>
									<Input type="text" placeholder='주소를 입력해 주세요' readOnly />
								</Colum>
								<Colum style={{ width: 300 }}>
									<Input type="text" placeholder='상세 주소 입력' />
								</Colum>
								<Colum col00>
									<Button as="a" href="//www.naver.com" target="_blank">지도위치확인</Button>
								</Colum>
							</Row>
						)
					})
				)} fnAddButtonClicked={(asdf) => console.log(asdf)} fnDelButtonClicked={() => alert(2)} />
				<AddremoveLayout className='MT20' initialize={(
					['asdf'].map((item, key) => {
						return (
							<Row>
								<Colum style={{ width: 200 }}>
									<Select>
										<option>국가선택</option>
									</Select>
								</Colum>
								<Colum style={{ width: 545 }}>
									<Input type="text" placeholder='해외 근무지역의 상세주소를 입력해 주세요.' />
								</Colum>
							</Row>
						)
					})
				)} fnAddButtonClicked={(asdf) => console.log(asdf)} fnDelButtonClicked={() => alert(2)} />
			</FormLayout>
			<FormLayout label='근무지역' required>
				<SortWrapping>
					<Sorted />
				</SortWrapping>
			</FormLayout>
			<FormLayout label='인근지하철' slabel='(0/5)'>
				<SortWrapping>
					<Sorted />
				</SortWrapping>
			</FormLayout>
			<FormLayout label='근무요일'>
				<Row alignItemsCenter>
					<Colum col25>
						<Select>
							<option>선택해주세요</option>
						</Select>
					</Colum>
					<Colum col00>
						<Input type="text" placeholder="근무요일을 선택해주세요." style={{ width: 368 }} />
					</Colum>
					<Colum col00 className='ML15'>
						<Checkbox label='요일 직접선택' />
					</Colum>
				</Row>
				<AddformWrapping className='MT10'>
					<Row alignItemsCenter>
						<Colum col00 className='MR25'>
							<Checkbox label='월요일' />
						</Colum>
						<Colum col00 className='MR25'>
							<Checkbox label='화요일' />
						</Colum>
						<Colum col00 className='MR25'>
							<Checkbox label='수요일' />
						</Colum>
						<Colum col00 className='MR25'>
							<Checkbox label='목요일' />
						</Colum>
						<Colum col00 className='MR25'>
							<Checkbox label='금요일' />
						</Colum>
						<Colum col00 className='MR25'>
							<Checkbox label='토요일' />
						</Colum>
						<Colum col00 className='MR25'>
							<Checkbox label='일요일' />
						</Colum>
					</Row>
				</AddformWrapping>
			</FormLayout>
			<FormLayout label='근무시간'>
				<AddremoveLayout initialize={(
					['', ''].map((item, key) => {
						return (
							<Row alignItemsCenter>
								<Colum style={{ width: 100 }}>
									<Select>
										<option>09시</option>
									</Select>
								</Colum>
								<Colum style={{ width: 100 }}>
									<Select>
										<option>00분</option>
									</Select>
								</Colum>
								<Colum col00>
									<Text>~</Text>
								</Colum>
								<Colum style={{ width: 100 }}>
									<Select>
										<option>09시</option>
									</Select>
								</Colum>
								<Colum style={{ width: 100 }}>
									<Select>
										<option>00분</option>
									</Select>
								</Colum>
							</Row>
						)
					})
				)} antHTMLAppend={(
					<Row>
						<Colum col12>
							<Input type="text" placeholder="기타사항을 입력해 주세요" />
						</Colum>
					</Row>
				)} />
			</FormLayout>
		</Section>
	);
}

export default Jobpost_WorkiCondition;
