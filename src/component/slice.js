import { createSlice } from "@reduxjs/toolkit";

import json from "./array.json"
// console.log(json);


const Slice = createSlice({
    name:"jeffin",
    initialState:{
        keyjson:json
    },
    reducers:{
        update:(state,action)=>{
            // console.log(state);
            state.keyjson.count = state.keyjson.count + action.payload
        },
        updateminus:(state,action)=>{
            state.keyjson.count = state.keyjson.count - action.payload
         },
        update1:(state,action)=>{
            // console.log(state);
            state.keyjson.list = action.payload
         },
        //  added:(state,action)=>{
        //     // console.log(state);
        //     state.keyjson.list = action.payload
        //  }
    }
})

export default Slice.reducer
export const {update,update1,updateminus,added} = Slice.actions