import React from 'react';
import {
	JobpostRecruitment,
	JobpostEligibility,
	JobpostWorkiCondition,
	JobpostHowToApply,
	JobpostContactInformation,
	JobpostCompanyInformation,
	JobpostTemplate,
	// JobpostRecruitGreeting
} from 'jobposts';
import { styled } from 'components/styles/stitches.config';
import InnerWrapping from 'components/InnerWrapping';
import Button from 'components/Button';
import Text from 'components/Text';

const Container = () => {
	return (
		<JbContentsArea>
			<InnerWrapping>
				<JobpostRecruitment />
				<JobpostEligibility />
				<JobpostWorkiCondition />
				<JobpostHowToApply />
				<JobpostContactInformation />
				<JobpostCompanyInformation />
				<JobpostTemplate />
				{/* <JobpostRecruitGreeting /> */}
				<div className='TXTC MT50'>
					<Button size="lg" className="org " style={{ minWidth: 300 }}>채용공고 등록완료</Button><br />
					<Text className='MT15' style={{ lineHeight: '26px' }}>
						버튼을 클릭 하시면 작성하신 내용으로 <strong>채용공고 등록이 완료</strong>됩니다.<br />
						<span style={{ color: '#1564fb' }}>커리어 상품을 이용하시면 더욱 빠르게 적합한 인재를 만나실 수 있습니다.</span>
					</Text>
				</div>
			</InnerWrapping>
		</JbContentsArea>
	);
}
const JbContentsArea = styled('div', {
	"padding": "50px 0",
});

export default Container;
