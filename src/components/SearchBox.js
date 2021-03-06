
import React from 'react';


const SearchBox = ({onSearchChange}) => {	
	return(
		<div className ='pa2'>
			 <input 
			 type='text' 
			 placeholder='Search Robot Here'
			 className = 'pa3 ba b--green bg-lightest-blue'
			 onChange={onSearchChange}
			 />
		</div>
	);
}

export default SearchBox;