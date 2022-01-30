import styled from 'styled-components/native'
import { useState,useEffect } from 'react';

export default (props) => {
	const [item, setItem] = useState('');

	const handleSubmit = () => {
		if( item.trim() != '' ){
			props.onAdd( item.trim() )
			setItem('')
		}
	}


  return(
	<AddItemArea>
		<AddItemInput 
			placeholder="Digite Um novo item" 
			value={item}
			onChangeText={e=>setItem(e)}
			onSubmitEditing={handleSubmit}
			returnKeyType="send"
		/>
	</AddItemArea>
  )
}


const AddItemArea = styled.View`
  background-color: #ccc;
  padding: 10px;
`;
const AddItemInput = styled.TextInput`
  background-color: #fff;
  font-size: 15px;
  height: 50px;
  border-radius: 15px;
  padding: 10px;
`;