import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    data:[]
}

const datas = createSlice({
    name:"datas",
    initialState,
    reducers:{
        newData : (state,action) => {
            state.data=action.payload
        } 
    }

})

export const {newData} = datas.actions
export default datas.reducer