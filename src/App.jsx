import './App.css';
import { useQuery, gql } from '@apollo/client';
import { UseDispatch, useDispatch, useSelector } from 'react-redux';
import {DataTable} from './DataTable'
import {DisplayLocations} from './DisplayLocations'
 
 
function App() {
    
 
return (
    <div className="App">

        <div>
            <h2>My first Apollo app 🚀</h2>
            <br />
            <DisplayLocations />
        </div>
    
    </div>
);
}
export default App;
    
    
 
 
 




 