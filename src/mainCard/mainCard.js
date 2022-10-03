import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import "./mainCard.scss";
import { Paper } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import { Item } from './../item/item';

export function MainCard({ title, deleteCard }) {
    const [items, setItems] = React.useState(['item1'])
    const [itemName, setName] = React.useState('');
	const handleDelete = () => {
		deleteCard(title);
	};
    const handleItemChange = ({target}) =>{
        setName(target.value);
    } 
    const removeItem = (name) =>{
        const temp = items.filter(item=>item!==name);
        setItems(temp);
    } 
    const handleAddItem = () =>{
        if(!items.find(item=>item==itemName)){
            let temp = [...items, itemName];
            setItems(temp);
            setName('');
        }
    }
    
	return (
		<Paper sx={{ minWidth: 275, margin: 2 }} className='paper'>
			<Typography
				sx={{ fontSize: 25, fontWeight: "bold" }}
				gutterBottom
			>
				{title}
			</Typography>
            {items.length > 0 && items.map(itemName=>{
                return <Item name={itemName} key={itemName} removeItem={removeItem}/>
            })}
            <div className="addItem">
                <input type="text" className="addItemInput" placeholder="Add Task" value={itemName} onChange={handleItemChange}/>
                <button className="addItemButton" onClick={handleAddItem}><AddIcon/></button>
            </div>
			<button className='redButton' onClick={handleDelete}>
				Delete
			</button>
		</Paper>
	);
}
