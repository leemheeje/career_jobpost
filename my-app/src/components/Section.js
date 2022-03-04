import { styled } from 'components/styles/stitches.config';
import React from 'react';

const Section = ({
	children,
	title = '타이틀이 없습니다.',
	stitle  = '서브타이틀이 없습니다.',
	...props
}) => {
	return (
		<JbCBoxing>
			<Title>{title}</Title>
			<STitle>{stitle}</STitle>
			{children}
		</JbCBoxing>
	);
}
const JbCBoxing = styled('div', {
	"padding": "74px 100px",
	"border-radius": "20px",
	"overflow": "hidden",
	"background": "#fff",
	"box-shadow": "0 5px 15px rgba(0,0,0,0.07)",
});
const Title = styled('div', {
	sectionTitle: true
});
const STitle = styled('div', {
	sectionSTitle: true
});
export default Section;
