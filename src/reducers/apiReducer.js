 //reducer
 export const APIReducer = (state = [], action) => {
    switch (action.type) {
        case 'API_DATA':
     
         
        return [...state, action.payload]
               
        default:
        return state;
    }
};