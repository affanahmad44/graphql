// import React, { useState } from "react";
// import { useLocation } from "react-router";
// import MUIDataTable from "mui-datatables";
// import { Button, Dialog, DialogTitle, DialogContent, DialogActions, TextField } from "@mui/material";
 
// function Formdata() {
//   const location = useLocation();
//   const values = location.state.values;
//   const valuesArray = Object.entries(values);
//   const cols = valuesArray.map((item) => item[0]);
//   const initialData = [valuesArray.map((item) => item[1])];
 
//   const [data, setData] = useState(initialData);
//   const [newData, setNewData] = useState([]);
//   const [selectedRow, setSelectedRow] = useState(null);
//   const [isDialogOpen, setDialogOpen] = useState(false);
 
//   const handleEditClick = (rowIndex) => {
//     setSelectedRow(rowIndex);
//     setNewData([...data[rowIndex]]);
//     setDialogOpen(true);
//   };
 
//   const handleChange = (e, index) => {
//     const updatedData = [...newData];
//     updatedData[index] = e.target.value;
//     setNewData(updatedData);
//   };
 
//   const handleSaveChanges = () => {
//     const updatedDataTable = [...data];
//     updatedDataTable[selectedRow] = newData;
//     setData(updatedDataTable);
//     setDialogOpen(false);
//   };
 
//   const handleCancel = () => {
//     setDialogOpen(false);
//   };
 
//   const columns = [
//     ...cols.map((col) => ({ name: col, label: col })),
//     {
//       name: "edit",
//       label: "Edit",
//       options: {
//         customBodyRender: (value, tableMeta) => (
// <Button onClick={() => handleEditClick(tableMeta.rowIndex)} variant="outlined" color="primary">
//             Edit
// </Button>
//         ),
//       },
//     },
//   ];
 
//   return (
// <>
// <MUIDataTable
//         title="Student Registration"
//         data={data}
//         columns={columns}
//         options={{
//           selectableRows: "none",
//         }}
//       />
 
//       <Dialog open={isDialogOpen} onClose={handleCancel}>
// <DialogTitle>Edit Form Data</DialogTitle>
// <DialogContent>
//           {cols.map((col, index) => (
// <TextField
//               key={col}
//               label={col}
//               value={newData[index] || ""}
//               onChange={(e) => handleChange(e, index)}
//               fullWidth
//               margin="normal"
//             />
//           ))}
// </DialogContent>
// <DialogActions>
// <Button onClick={handleCancel} color="primary">
//             Cancel
// </Button>
// <Button onClick={handleSaveChanges} color="primary">
//             Save Changes
// </Button>
// </DialogActions>
// </Dialog>
// </>
//   );
// }
 
// export default Formdata;