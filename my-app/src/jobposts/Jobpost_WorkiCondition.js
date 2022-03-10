import React from 'react';
import Section from 'components/Section';
import FormLayout from 'jobposts/components/Form_Layout';
import Select from 'components/Select';
import Row from 'components/Row';
import Colum from 'components/Colum';
import Text from 'components/Text';
import { Checkbox, Input } from 'components/Input';
import { AddformRow, AddformWrapping } from './components/Addform_Layout';

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
		</Section>
	);
}

export default Jobpost_WorkiCondition;
