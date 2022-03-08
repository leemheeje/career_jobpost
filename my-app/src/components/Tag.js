import React from 'react';
import { styled } from 'components/styles/stitches.config';


export const Tag = () => {
	return (
		<label class="tweb_bt">
			<input type="checkbox" name="" value="" id="" />
			<span class="lb">+사원</span>
		</label>
	);
}

export const TagGroup = ({
	children,
	...props
}) => {
	return (
		<div class="tpwGroups">
			<div class="tpws">
				<label class="tweb_bt">
					<input type="checkbox" name="" value="" id="" />
					<span class="lb">+사원</span>
				</label>
			</div>
		</div>
	);
}
