import React from 'react';

const person = (xyz) => {
	return (
		<div>
		<p>I am a {xyz.name} and I am {xyz.age} years old</p>			
		<p>{xyz.children}</p>
		</div>
		)
}

export default person;