import styled from "styled-components";




export default (props) =>{

	return(
		<Item  activeOpacity={0.7} onPress={ ()=>{} } >
			<>	
				<ItemText>{props.data.task}</ItemText>
				<ItemCheck></ItemCheck>
			</>
		</Item>	
	)
}


const Item = styled.TouchableOpacity`
  padding: 10px;
  background-color: #eee;
  flex-direction: row;
`;
const ItemText = styled.Text`
  font-size: 15px;
  flex: 1;
`;
const ItemCheck = styled.View`
  width: 20px;
  height: 20px;
  border-radius: 10px;
  border: 5px solid #ccc;
  `;