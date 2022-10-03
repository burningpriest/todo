import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import EditIcon from "@mui/icons-material/Edit";
import ClearIcon from "@mui/icons-material/Clear";
import "./item.scss";
export function Item({ name, removeItem }) {
    const handleRemove = ()=> {
        removeItem(name)
    }
    const handleDrag = (e) => {
        e.dataTransfer.setData('text', name);
    }
	return (
		<Card className="card" onDrag={handleDrag}>
			<CardActions className='cardActions'>
				<Typography sx={{ fontSize: 18, fontWeight: "bold" }}>
					{name}
				</Typography>
				<div>
                    <button className="button"><EditIcon /></button>
                    <button className="button" onClick={handleRemove}><ClearIcon sx={{color: 'red'}}/></button>
				</div>
			</CardActions>
		</Card>
	);
}
