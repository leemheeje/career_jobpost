import React from 'react';
import Section from 'components/Section';
import { SortWrapping, Sorted, FavSorted } from 'jobposts/components/Sort_Layout';
import { AddformWrapping, AddformRow } from 'jobposts/components/Addform_Layout';
import FormLayout from 'jobposts/components/Form_Layout';


const Jobpost_CompanyInformation = () => {
	return (
		<Section title='기업정보' stitle='기업정보가 맞는지 확인해 주세요.'>
			<FormLayout className='MT40' label='산업' required>
				<SortWrapping>
					<Sorted />
				</SortWrapping>
			</FormLayout>
			<FormLayout label='복리후생'>
				<SortWrapping>
					<Sorted />
					<FavSorted />
				</SortWrapping>
			</FormLayout>
		</Section>
	);
}

export default Jobpost_CompanyInformation;
