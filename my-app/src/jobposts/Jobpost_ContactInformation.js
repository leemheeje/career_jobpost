import React from 'react';
import Section from 'components/Section';
import FormLayout from 'jobposts/components/Form_Layout';
import Row from 'components/Row';
import Colum from 'components/Colum';
import Select from 'components/Select';
import Text from 'components/Text';
import Button from 'components/Button';
import { TagGroup, Tag } from 'components/Tag';
import { Input, Checkbox } from 'components/Input';


const Jobpost_ContactInformation = () => {
	return (
		<Section title='담당자 정보' stitle='인사 담당자 정보를 관리해 보세요.'>
			<FormLayout className='MT40' label='인사담당자' required>
				<Row>
					<Colum col3>
						<Input type="text" placeholder="담당자명" />
					</Colum>
					<Colum col00>
						<Input type="text" placeholder="(선택) 담당자 부서명 입력" style={{ width: 400 }} />
					</Colum>
					<Colum col00>
						<Button isIco="reload">초기화</Button>
					</Colum>
				</Row>
				<Row alignItemsCenter className='MT15'>
					<Colum col00 style={{ marginBottom: 10 }}>
						<Text md>ㆍ인사담당자 선택 :</Text>
					</Colum>
					<Colum col00>
						<TagGroup>
							<Tag type="radio" name="ContPepl">김길동</Tag>
							<Tag type="radio" name="ContPepl">김길1동</Tag>
						</TagGroup>
					</Colum>
					<Colum col00>
						<TagGroup>
							<Tag as="button">+ 더보기</Tag>
						</TagGroup>
					</Colum>
				</Row>
			</FormLayout>
			<FormLayout className='MT45' label='직통번호' required>
				<Row alignItemsCenter>
					<Colum col00>
						<Input type="number" style={{ width: 100 }} />
					</Colum>
					<Colum col00>
						<Text>-</Text>
					</Colum>
					<Colum col00>
						<Input type="number" style={{ width: 100 }} />
					</Colum>
					<Colum col00>
						<Text>-</Text>
					</Colum>
					<Colum col00>
						<Input type="number" style={{ width: 100 }} />
					</Colum>
					<Colum col00 className='ML15'>
						<Checkbox label='비공개' />
					</Colum>
				</Row>
			</FormLayout>
			<FormLayout className='' label='휴대폰' >
				<Row alignItemsCenter>
					<Colum col00>
						<Input type="number" style={{ width: 100 }} />
					</Colum>
					<Colum col00>
						<Text>-</Text>
					</Colum>
					<Colum col00>
						<Input type="number" style={{ width: 100 }} />
					</Colum>
					<Colum col00>
						<Text>-</Text>
					</Colum>
					<Colum col00>
						<Input type="number" style={{ width: 100 }} />
					</Colum>
					<Colum col00 className='ML15'>
						<Checkbox label='비공개' />
					</Colum>
				</Row>
			</FormLayout>
			<FormLayout className='' label='이메일' required>
				<Row alignItemsCenter>
					<Colum col00>
						<Input type="number" style={{ width: 150 }} />
					</Colum>
					<Colum col00>
						<Text>@</Text>
					</Colum>
					<Colum col00>
						<Input type="number" style={{ width: 170 }} />
					</Colum>
					<Colum col00>
						<Select style={{ width: 200 }}>
							<option>직접입력</option>
						</Select>
					</Colum>
					<Colum col00 className='ML15'>
						<Checkbox label='비공개' />
					</Colum>
				</Row>
				<Text className='MT10 MB35' sm>* 입력하신 이메일 주소로 구직자 입사지원 메일을 받을 수 있습니다.</Text>
				<Checkbox label='현재 담당자 정보 저장하기' />
			</FormLayout>
		</Section>
	);
}

export default Jobpost_ContactInformation;
