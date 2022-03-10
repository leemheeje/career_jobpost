import { styled } from "components/styles/stitches.config";

const Colum = styled('div', {
	paddingLeft: 2.5,
	paddingRight: 2.5,
	float: 'left',
	variants: {
		col00: { true: { width: 'auto' } },
		col05: { true: { width: '4.16%' } },
		col1: { true: { width: '8.3334%' } },
		col15: { true: { width: '12.5%' } },
		col2: { true: { width: '16.666%' } },
		col25: { true: { width: '20.833%' } },
		col3: { true: { width: '25%' } },
		col35: { true: { width: '29.166%' } },
		col4: { true: { width: '33.333%' } },
		col45: { true: { width: '37.5%' } },
		col5: { true: { width: '41.666%' } },
		col55: { true: { width: '45.83%' } },
		col6: { true: { width: '50%' } },
		col65: { true: { width: '54.166%' } },
		col7: { true: { width: '58.334%' } },
		col75: { true: { width: '62.5%' } },
		col8: { true: { width: '66.667%' } },
		col85: { true: { width: '70.833%' } },
		col9: { true: { width: '75%' } },
		col95: { true: { width: '79.166%' } },
		col10: { true: { width: '83.334%' } },
		col105: { true: { width: '87.5%' } },
		col11: { true: { width: '92%' } },
		col115: { true: { width: '95.833%' } },
		col12: { true: { width: '100%' } },
	}
});


export default Colum