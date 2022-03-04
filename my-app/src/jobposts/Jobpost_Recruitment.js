import Section from 'components/Section';
import FormLayout from 'components/Form_Layout';
import Row from 'components/Row';
import Colum from 'components/Colum';
import Input from 'components/Input';
import React from 'react';


const JobpostRecruitment = () => {
	return (
		<>
			<Section title="모집분야" stitle="어떤 업무를 담당할 인재를 채용하시나요?">
				<FormLayout label="모집분야">
					<Row>
						<Colum col7>
							<Input type="text" placeholder="EX) RD, 경영지원" />
						</Colum>
						<Colum col00>
							<Row>
								<Colum col00>
									<Input className="inline" type="number" placeholder="모집인원" />
								</Colum>
								<Colum col00>
									<span className="jbStatText">명 모집</span>
								</Colum>
							</Row>
						</Colum>
					</Row>
				</FormLayout>
			</Section>
		</>
	);
}

export default JobpostRecruitment;
