import React from 'react';

const Card = (props)=>{
	const {name, email, id} = props;//ES6
	return (
		<div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
		    <img src={`https://robohash.org/${id}?size=200x200`} alt="Robot"></img>
		    <div>
		        <h2>{name}</h2>
		        <p>{email}</p>
		    </div>
		</div>
	)
}//调用要加{}，因为这不算JS
export default Card;