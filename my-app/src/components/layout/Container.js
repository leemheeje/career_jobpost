import React from 'react';
import {
	Jobpost_Recruitment,
	Jobpost_Eligibility,
	Jobpost_WorkiCondition,
	Jobpost_HowToApply,
	Jobpost_ContactInformation,
	Jobpost_CompanyInformation,
	Jobpost_Template
} from 'jobposts';
import { styled } from 'components/styles/stitches.config';
import InnerWrapping from 'components/InnerWrapping';

const Container = () => {
	return (
		<JbContentsArea>
			<InnerWrapping>
				<Jobpost_Recruitment />
				<Jobpost_Eligibility />
				<Jobpost_WorkiCondition />
				<Jobpost_HowToApply />
				<Jobpost_ContactInformation />
				<Jobpost_CompanyInformation />
				<Jobpost_Template />
			</InnerWrapping>
		</JbContentsArea>
	);
}
const JbContentsArea = styled('div', {
	"padding": "50px 0",
});

export default Container;
