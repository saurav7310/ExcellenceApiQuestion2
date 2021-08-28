import React from 'react';

function CustomCard(props) {
	return (
		<div style={{ display: 'flex' }}>
			{console.log(props.data)}
			<div
				style={{
					boxShadow: '2px 3px 7px grey',
					margin: '10px 20px 10px 20px',
					padding: 10,
					width: 250
				}}
			>
				<div className="spam">
					<span>ID: </span>
					{props.idValue}
				</div>
				<div className="spam">
					<span>Email: </span>
					{props.emailValue}
				</div>
				<div className="spam">
					<span>First Name: </span>
					{props.firstValue}
				</div>
				<div className="spam">
					<span>Last Name: </span>
					{props.lastValue}
				</div>
				<div className="spam">
					<span>Image: </span>
					<img src={props.avatarValue} />
				</div>
			</div>
		</div>
	);
}

export default CustomCard;
