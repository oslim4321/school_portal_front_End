import React, { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getQuizByCat } from '../REDUX/USERDashboardSlice/Quiz'
import { GlobalDisplayAlert } from '../Context/Alert'
import USserScore from './USserScore'
import {SendUSerQuizScore} from '../REDUX/USERDashboardSlice/SendUSerQuizScore'
import { v4 as uuidv4 } from 'uuid'


function Quiz() {
    const unique_id = uuidv4();
     const refer = useRef()
    const {showAlert} = GlobalDisplayAlert()
    const quiz = useSelector((state) => state.quiz)
    const dispatch = useDispatch()
    const data = useSelector((state) => state.ScoreQuiz)

    const {id, course} = useParams()
    

    useEffect(() => {
        dispatch(getQuizByCat(course))
    }, [])
    useEffect(() => {
        
       
      }, [])
    //   console.log(data)

    refer.checked = false;
   
    const [ShowScore, setShowScore] = useState(false)
    const [questCount, setquestCount] = useState(0)
    const [SubmitButton, setSubmitButton] = useState(false)
    const [score, setscore] = useState(0)
    function NextQuest(params) {
        console.log(params)
        if (params) {
            setscore(score + 1)
        }
      
        const nextQuest = questCount + 1;
        if(nextQuest < quiz.quiz.length) {
            setquestCount(nextQuest)
            
        } else {
            setSubmitButton(true)
            
        }
        refer.checked = false;
        
    }
    function submitQuiz(e) {
        setShowScore(true)
        const d = new Date();
        let date = d.toLocaleString();
        console.log(date)

        dispatch(SendUSerQuizScore({ score, course,date }))
        e.currentTarget.disabled = true;
    }





    return (
        <>
        {
            ShowScore &&
                <USserScore score={ score} course={course} />
        }
         {
            quiz.loading &&   <div className="text-center">
            <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
            </div>
            <div className="spinner-grow mx-4" role="status">
            <span className="sr-only">Loading...</span>
            </div>
            </div>}
            {!quiz.loading && quiz.error ?  showAlert(true, "red", `${quiz.error}`) : null}
            {!quiz.loading && quiz.error ? <div className='text-red-600'>{quiz.error}</div> : null}

            {/* Submit button can only show when the questions reaches the limit */}
            {  
                SubmitButton ?
                <div className="h-screen flex items-center justify-center">
                    <button onClick={submitQuiz} className="bg-neutral-200 px-12 py-4 text-2xl border-neutral-400 border-2 text-neutral-600 hover:text-white hover:shadow-[inset_13rem_0_0_0] hover:shadow-blue-400 duration-[400ms,700ms] transition-[color,box-shadow]">
                        Submit
                    </button>
                </div>
                 :
                    /*The question will now show when the questions are done  */
                !quiz.loading && !quiz.error && quiz.quiz &&(
                        <>
                <div className='mb-40'>
                  <p className="text-2xl text-center">{questCount+1} / <span>{quiz.quiz.length }</span></p>                
                    <h1 className="text-3xl font-sans mt-10 md:mt-10 lg:mt-14 font-bold text-gray-800 dark:text-gray-300 text-center">{quiz.quiz[questCount].question}</h1>
                        <div className='flex justify-center mt-16'>
                            <div className='bg-gray-50 dark:bg-gray-800 shadow-lg dark:shadow-dark rounded-2xl min-w-30 w-[100%] md:w-[50%] '>
                              <div className="pt-0 pb-2">
                                  {
                                        quiz.quiz[questCount].answers.map((ans) => {
                                        // console.log(ans)
                                        return(
                                            <div  key={uuidv4} onClick={()=> NextQuest(ans.correct)} className="bg-gray-100 dark:bg-gray-900 mx-6 h-16 w-auto mb-2 rounded-md flex items-center md:mb-4">
                                                <input type="radio" className='ml-5 dark:bg-gray-800 mx-3' name='size' value={ans.correct} ref={refer} />
                                                <label htmlFor="" className='class="text-gray-700 dark:text-gray-400 text-lg ml-4"'>{ans.answer}</label>
                                            </div>
                                            )
                                           
                                        })        
                                  }
                                    <div className="flex justify-center item-center gap-x-5">
                                 
                                   </div>
                                                                    
                              </div>
                          </div>
                    </div>
                </div>
                        {
                          
                              
                        }
                        </>
                    
            )} 

        </>
        // <div>{id} <p>{ course}</p></div>
       
    
  )
}

export default Quiz