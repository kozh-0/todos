import { Link, useParams } from "react-router-dom";


export default function Filters() {
    const {filter: activeFilter = 'all'} = useParams();

    const activeFilterFunc = (active, filterNow) => {
        return {
            backgroundColor: active === filterNow ? '#ff9800' : 'gray',
            color: active === filterNow ? 'white' : 'black',
            transition: 'all .3s ease',
        }
    }



    return (
        <div className="selectors">
            <Link 
                to='/todos/all' 
                style={activeFilterFunc(activeFilter, 'all')}    
            >All</Link>
            <Link 
                to='/todos/active' 
                style={activeFilterFunc(activeFilter, 'active')}
            >Active</Link>
            <Link 
                to='/todos/completed'
                style={activeFilterFunc(activeFilter, 'completed')}
            >Completed</Link>
        </div>
    )
}