import React from 'react';
import { Jobpost_Recruitment } from 'jobposts';
import { styled } from 'components/styles/stitches.config';
import InnerWrapping from 'components/InnerWrapping';

const Container = () => {
	return (
		<JbContentsArea>
			<InnerWrapping>
				<Jobpost_Recruitment />
			</InnerWrapping>
		</JbContentsArea>
	);
}
const JbContentsArea = styled('div', {
	"padding": "50px 0",
});

export default Container;
