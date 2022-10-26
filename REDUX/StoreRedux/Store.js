import { configureStore } from '@reduxjs/toolkit'
import userData from '../USERDashboardSlice/UserSlicer'
import quizData from '../USERDashboardSlice/Quiz'
import Scorequiz from '../USERDashboardSlice/SendUSerQuizScore'
// import increament from '../USER/UserSlicer'


export const Store = configureStore({
    reducer: {
        quiz:quizData,
        data: userData,
        ScoreQuiz: Scorequiz
        
    },
})
  
export default Store