import React, { useEffect, useState } from 'react';
import CustomCard from '../components/card';
import axios from 'axios';

function CardPage(props) {
	const [ data, setData ] = useState([]);
	const handleApi = async () => {
		const response = await axios.get('https://reqres.in/api/users?page=2');
		// console.log(response.data.data);
		setData(response.data.data);
	};
	useEffect(() => {
		handleApi();
	}, []);
	return (
		<div>
			{data &&
				data.map((item) => (
					<CustomCard
						id="Id"
						idValue={item.id}
						email="Email"
						emailValue={item.email}
						first_name="First_Name"
						firstValue={item.first_name}
						last_name="Last_Name"
						lastValue={item.last_name}
						avatar="Image"
						avatarValue={item.avatar}
					/>
				))}
		</div>
	);
}

export default CardPage;
