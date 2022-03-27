import { Button, ButtonGroup } from "@mui/material";
import { useSelector, useDispatch } from "react-redux"
import { setFilter } from "../Redux/filters/filterActions";


export default function Filters() {

    const dispatch = useDispatch();
    const activeFilter = useSelector(state => state.filter);

    return (
        <div>
            <ButtonGroup >
                <Button 
                    style={{backgroundColor: activeFilter === 'all' ? '#ff9800' : 'white'}}
                    color="secondary"
                    variant="outlined"
                    onClick={() => dispatch(setFilter('all'))}
                >All</Button>
                <Button 
                    style={{backgroundColor: activeFilter === 'active' ? '#ff9800' : 'white'}}
                    color="secondary"
                    variant="outlined"
                    onClick={() => dispatch(setFilter('active'))}
                >Active</Button>
                <Button 
                    style={{backgroundColor: activeFilter === 'completed' ? '#ff9800' : 'white'}}
                    color="secondary"
                    variant="outlined"
                    onClick={() => dispatch(setFilter('completed'))}
                >Completed</Button>
            </ButtonGroup>
        </div>
    )
}