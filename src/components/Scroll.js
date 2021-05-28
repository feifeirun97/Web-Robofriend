import React from 'react';

//props自带children属性，因为scroll下面有其他tag
//是一个外包装的效果，在tag里加css要{{}}
const Scroll = (props)=>{
	return(
		<div style={{overflowY:'scroll', border:'5px solid black', height:'800px'}}>
			{props.children}
		</div>
	)
}

export default Scroll;