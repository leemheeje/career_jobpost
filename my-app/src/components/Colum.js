import { styled } from "components/styles/stitches.config";

const Colum = styled('div', {
	variants: {
		col00: {
			true: {
				width: 'auto'
			}
		},
		col7: {
			true: {
				width: '58.334%'
			}
		},
	}
});


export default Colum