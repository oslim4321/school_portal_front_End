import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios'

const initialState = {
    loading: false,
    quiz: '',
    error:''
}

// GEnerate pending dullfil
const token = localStorage.getItem('token')
export const getQuizByCat = createAsyncThunk('quiz/fetchquiz', (params) => {
    return axios.get(`https://oslim-school-portals-api.herokuapp.com/api/v1/quiz/AllQuiz?category=${params}`, {
        headers: {
            Authorization: `Bearer ${token}`,
          }
    })
     .then((response) =>  response.data)})
    
const quizSlice = createSlice({
    name: 'quiz',
    initialState,
    extraReducers: (builder) => {
        
       builder.addCase(getQuizByCat.pending, (state) => {
       state.loading=true
       })
       builder.addCase(getQuizByCat.fulfilled, (state,action) => {
           state.loading = false
           state.quiz = action.payload
           state.error = ''
       })
       builder.addCase(getQuizByCat.rejected, (state,action) => {
           state.loading = false
           state.quiz = []
           state.error = action.error.message
       })
    }
})

export default quizSlice.reducer
