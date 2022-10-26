import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GlobalDisplayAlert } from '../Context/Alert'

function USserScore({ score, course }) {
  // console.log('from user Score' , course)
  const {showAlert} = GlobalDisplayAlert()

  const dispatch = useDispatch()
  const data = useSelector((state) => state.ScoreQuiz)

  return (
      <div>
        {
        data.data.loading && 
         <div className="text-center">
        <div className="spinner-border" role="status">
        <span className="sr-only">Loading...</span>
        </div>
        <div className="spinner-grow mx-4" role="status">
        <span className="sr-only">Loading...</span>
        </div>
        </div>
      }
      {!data.data.loading && data.data.error ? showAlert(true, "red", `${data.error}`) : null}
      {!data.data.loading && data.data.error ? <div className='text-red-600'>{data.error}</div> : null}
      {!data.data.loading && !data.data.error && data.data && (
        <>
         <p className='text-2xl text-center'><i class='far fa-grin-alt'></i><i class="bi bi-hand-thumbs-up"></i><p>Success <span>{data.data.success}</span></p></p> 
          <p className='text-2xl text-center'>go to you dashboard-results to check your scores</p>
         
          
          <div class="flex items-center justify-around">
      <div class="">
      <button className='border px-3 py-3 mt-4'><a href="/StudentDashboard">Go to dashboard</a></button>
      </div>
      </div>
        </>
        
        //  <p className='text-2xl text-center'>You Score {score} /5</p> 
      )
      
      }
        
           
    </div>
  )
}

export default USserScore