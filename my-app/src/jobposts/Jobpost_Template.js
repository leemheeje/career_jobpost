import React from 'react';
import Section from 'components/Section';
import FormLayout from 'jobposts/components/Form_Layout';
import Row from 'components/Row';
import Colum from 'components/Colum';
import Text from 'components/Text';
import { Input } from 'components/Input';
import Button from 'components/Button';

const Jobpost_Template = () => {
	return (
		<Section title='템플릿 반영' stitle='지금까지 입력한 상세요강이 반영됩니다.'>
			<FormLayout label='체용제목' required>
				<Row>
					<Colum col12>
						<Input type="text" placeholder="ex) 웹개발 경력자 채용" />
						<Text sm className='MT10'>* 채용제목을 잘 기재하시면 적합한 인재를 만나실 수 있습니다.</Text>
					</Colum>
				</Row>
			</FormLayout>
			<Button className="block MT35" size="lg">입력한 내용 템플릿 반영하기</Button>
			<div className='TXTC MT15'>
				<Text >모집부문 및 자격요건을 입력하여 상세요강을 채워주세요~!</Text><br />
				<Text sm>템플릿 기능으로 내용을 추가 하실 수 있습니다. 연락처 정보는 담당자정보 항목에서 입력해주세요.</Text>
			</div>
		</Section>
	);
}

export default Jobpost_Template;
