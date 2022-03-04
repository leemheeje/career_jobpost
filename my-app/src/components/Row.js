import { styled } from 'components/styles/stitches.config';

const Row = styled('div', {
	display : 'flex',
	variants: {
		rowJustifyBetween: {
			true: {
				justifyContent : 'space-between',
				alignItems : 'center',
			}
		},
	}
});

export default Row