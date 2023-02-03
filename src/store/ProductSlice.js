import { createAsyncThunk, createSlice, isFulfilled } from "@reduxjs/toolkit";

export const STATUSES = Object.freeze({ 
    IDLE : "idle",
    ERROR : "error",
    LOADING : "loading"
}) 



 const productSlice  = createSlice({

    name : "product",
    initialState : { 
        data : [], 
        status: STATUSES.IDLE 
    },
    reducers : { 


    },
    extraReducers : (builder) => { 
        builder
        .addCase(fetchData.pending , (state)=>{
            state.status = STATUSES.LOADING
        })
        .addCase(fetchData.fulfilled , (state , action )=>{
            state.data = action.payload 
            state.status = STATUSES.IDLE
        })
        .addCase(fetchData.rejected , (state)=>{
            state.status = STATUSES.ERROR
        })

    }
})

export default productSlice.reducer 

// THUNKS 

 export const fetchData = createAsyncThunk("product/fetch" , async()=>{
    const res = await fetch('https://fakestoreapi.com/products') 
    const data = await res.json()
    return data 
})