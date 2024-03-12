import { createSlice } from "@reduxjs/toolkit"


export const RemdanSlices = createSlice({
    name: 'remdan',
    initialState:   JSON.parse(localStorage.getItem("static"))|| [],
    reducers: {
        AddDATA: (state, action) => {
            //const { Prayer, Hizeb_Memorized, Soraa_Memorized, Hizeb_Readed } = action.payload
            
            state.push({
                Day : action.payload.Day,
                Prayer: action.payload.Prayer,
                Hizeb_Memorized:action.payload.Hizeb_Memorized,
                Soraa_Memorized: action.payload.Soraa_Memorized,
                Hizeb_Readed: action.payload.Hizeb_Readed,
            })
            
            localStorage.setItem("static" ,JSON.stringify(state))
            
            
            
            

            
        }
    }

})

export const { AddDATA } = RemdanSlices.actions
export default RemdanSlices