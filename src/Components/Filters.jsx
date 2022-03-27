import { Button, ButtonGroup } from "@mui/material";
import { Link, useParams } from "react-router-dom";


export default function Filters() {
    const {filter: activeFilter = 'all'} = useParams();

    return (
        <div>
            <ButtonGroup >
                <Link to='/all'>
                    <Button
                        style={{backgroundColor: activeFilter === 'all' ? '#ff9800' : 'white'}}
                        color="secondary"
                        variant="outlined"
                    >All</Button>
                </Link>
                <Link to='/active'>
                    <Button
                        style={{backgroundColor: activeFilter === 'active' ? '#ff9800' : 'white'}}
                        color="secondary"
                        variant="outlined"
                    >Active</Button>
                </Link>
                <Link to='/completed'>
                    <Button 
                    style={{backgroundColor: activeFilter === 'completed' ? '#ff9800' : 'white'}}
                    color="secondary"
                    variant="outlined" 
                >Completed</Button>
                </Link>
            </ButtonGroup>
        </div>
    )
}