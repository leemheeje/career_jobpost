import { styled } from 'components/styles/stitches.config';

const Row = styled('div', {
	marginLeft: -2.5,
	marginRight: -2.5,
	display: 'flex',
	variants: {
		rowJustifyBetween: {
			true: {
				justifyContent: 'space-between',
				alignItems: 'center',
			}
		},
		alignItemsCenter: {
			true: {
				alignItems: 'center'
			}
		},
		flexDirectionColumn: {
			true: {
				'flex-direction': 'column',
			}
		},
		static:{
			true:{
				display: 'block',
				"&:after":{
					content: '',
					display: 'table',
					clear: 'both',
				},
				"& .asdf":{}
			}
		}
	}
});

export default Row