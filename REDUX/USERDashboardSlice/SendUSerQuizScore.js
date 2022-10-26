import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios'

const initialState = {
    loading: false,
    data: '',
    error:''
}

// GEnerate pending dullfil
const token = localStorage.getItem('token')
    export const SendUSerQuizScore = createAsyncThunk('submit/sendquiz' ,({score, course, date})=>{ 
        return axios.post('https://oslim-school-portals-api.herokuapp.com/api/v1/quiz/UserScore', { Course: course, Score: score, Date: date }, {
            headers: {
                Authorization: `Bearer ${token}`,
              }
       })
     .then((response) =>  response.data)})
    
const QuizScore = createSlice({
    name: 'data',
    initialState,
    extraReducers: (builder) => {
        
       builder.addCase(SendUSerQuizScore.pending, (state) => {
       state.loading=true
       })
       builder.addCase(SendUSerQuizScore.fulfilled, (state,action) => {
           state.loading = false
           state.data = action.payload
           state.error = ''
       })
       builder.addCase(SendUSerQuizScore.rejected, (state,action) => {
           state.loading = false
           state.data = []
           state.error = action.error.message
       })
    }
})

export default QuizScore.reducer
