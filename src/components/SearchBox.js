import React from 'react';
//这里完全可以传参props，然后props.searchChange调用
const SearchBox = ({ searchfield, searchChange }) => {
	return (
		<div className='pa2'>
			<input 
			className='pa2 ba b--green bg-lightest-blue' 
			type="search" 
			placeholder='search robots'
			onChange={searchChange}
			 />
			
		</div>
		);
}
export default SearchBox;