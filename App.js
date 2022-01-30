
import Lista from "./src/Lista/Lista";
import styled from 'styled-components/native'
import ListaItem from "./src/componets/ListaItem";
import AddItemArea from "./src/componets/AddItemArea";
import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import 'react-native-get-random-values';




function App() {
	const [ items, setItems ] = useState( Lista );
	const addNewItem = (txt) => {

	  let newItems = [...items]

	  newItems.push({
		  id:uuid(),
		  task:txt,
		  done:false,
	  })
	  setItems(newItems)

	}

	return(
		<Page>
			<AddItemArea onAdd={addNewItem} />
			<Scroll
				data={ Lista }
				renderItem={ ({ item })=> <ListaItem data={ item } />}
				keyExtractor = { ( item )=>item.id }
			/>
		</Page>
	)
};

export default App;




/**
 * ESTILOS
 */

const Page = styled.SafeAreaView`
  flex           : 1;
  margin-top: 30px;
`;
const Item = styled.TouchableOpacity`
  padding: 10px;
  background-color: #000;
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
  border: 5px solid #fff;
  `;
  const Scroll = styled.FlatList`
  flex            : 1;
  background-color: #ccc;
  `;
const Titulo = styled.Text`
  font-size: 30px;
  font-weight: bold;
  align-items: center;
  text-align: center;
  background-color: #000;
  color: #fff;
`;















/**

<Page>
			<Scroll>
				<Titulo>Lista de tarefas</Titulo>
				{Lista.map( (i,index)=>{
					return(
						<Item key={index} activeOpacity={0.7} onPress={ ()=>{} } u>
							<>	
								<ItemText>{i.task}</ItemText>
								<ItemCheck></ItemCheck>
							</>
						</Item>
					)
				} )}
			</Scroll>
		</Page>


 */