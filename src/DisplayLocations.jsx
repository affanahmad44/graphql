import { useDispatch } from "react-redux";
import { gql, useQuery } from "@apollo/client";
import { DataTable } from "./DataTable";
import { useEffect } from "react";
import { api_Action } from "./reducers/apiAction";
import { GET_COUNTRIES } from "./config/graphql/graphql_queries";





export function DisplayLocations() {
  const dispatch = useDispatch();


  const { loading, error, data } = useQuery(GET_COUNTRIES);
  if (loading) {
  <p>loading</p>
  }
  else { 
  dispatch(api_Action(data?.countries));
  }

//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const result = await refetch(); // Use refetch to update the data
       
//       } catch (error) {
//         console.error('Error fetching data:', error.message);
//       }
//     }

//     fetchData();
//   }, [refetch, dispatch]);



  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return <DataTable />;
}
