import React, { useState } from "react"
import MUIDataTable from "mui-datatables";
import { useSelector } from "react-redux";
import {DisplayLocations} from './App.jsx'
import { gql, useLazyQuery } from "@apollo/client";
import { Button, Dialog, DialogActions, DialogContent } from "@mui/material";
import { DialogTitle } from "@mui/material";
import { getContinent } from "./config/graphql/graphql_queries.js";




export function DataTable() {
const showCountries = useSelector(state => state)

 
 const [ getConti, { loading, error, data }] = useLazyQuery(getContinent); 


const [ openDialog, setOpenDialog] = useState(false);



const showContinent = (a,value) => {
  setOpenDialog(true)
  // console.log('val',value,'rowIndex',a,'useair',showCountries[0][a].code);
  
  getConti({ variables: { key:showCountries[0][a].code }}) 
  
}
// console.log('lazzyquerydatais',data);




const columns = Object.keys(showCountries[0][0]).map(key => ({

  name: key,
  label: key,
 })
 )
 const newColumns = columns.filter(column => column.name !== "__typename");

 const columns2 = [
  ...newColumns,
  {
    name: "Action",
    label: "Action",
    options: {
      filter: false,
      customBodyRender: (value, tableMeta, updateValue) => (
        <Button onClick={()=>  {showContinent(tableMeta.rowIndex, value)} } >
        Show Continent
        </Button>
      )
    }
  },]
 




 
const options = {
    filterType: 'checkbox',
};
 return(
  <div>
<MUIDataTable
    // title={"Employee List"}
    data={Object.values(showCountries[0])}
    columns={columns2}

    // options={options}
/>

<Dialog open={openDialog} >
<DialogTitle>Continent</DialogTitle> 
<DialogContent> 

 {data?.country.continent.name}  
</DialogContent>
<DialogActions>
<Button onClick={()=>{setOpenDialog(false)}} color="primary">
            ok
</Button>
</DialogActions>
</Dialog>
</div>

 );
}

