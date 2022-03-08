import { styled } from 'components/styles/stitches.config';

const Row = styled('div', {
	marginLeft : -2.5,
	marginRight : -2.5,
	display : 'flex',
	variants: {
		rowJustifyBetween: {
			true: {
				justifyContent : 'space-between',
				alignItems : 'center',
			}
		},
		alignItemsCenter : {
			true : {
				alignItems: 'center'
			}
		}
	}
});

export default Row