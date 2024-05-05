import { createSlice } from "@reduxjs/toolkit";


const userSlice = createSlice({
    name: "user",
    initialState:{
      user:{} ,
      toogle: false
    },
    reducers :{
        setUser : (state,action)=>{
              state.user= action.payload
        },
        setUserToogle : (state,action)=>{
            state.toogle= action.payload
      }
    }
})

export const {setUser,setUserToogle} = userSlice.actions
export default userSlice.reducer