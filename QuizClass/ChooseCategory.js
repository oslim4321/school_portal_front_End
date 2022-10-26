import axios from 'axios'
import React, { useEffect } from 'react'
import { QuizCategory } from './Category'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'


function ChooseCategory() {
    const unique_id = uuidv4();
    const user = useSelector((state) => state.data)
 
    const navigate= useNavigate()
    
    const id = user.user._id
    function getQuizByCate(course) { 
        navigate(`/Quiz/${id}/${course}`)
    }
    

  return (
    <div className='bg-gray-100 dark:bg-gray-900 w-[100%] h-[100%]'>
        <h1 className="text-3xl font-sans md:mt-48 lg:mt-64 font-bold text-gray-800 dark:text-gray-300 text-center">Choose a category to get started:</h1>
          <div className='grid grid-cols-1 gap-y-0 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8'>
              {/* <div className='flex justify-center pt-12'> */}
                  {
                      QuizCategory.map((elem) => {
                          return (
                              <>
                               {/* box */}
                            <div key={unique_id} onClick={()=> getQuizByCate(elem.text)} className="bg-white dark:bg-gray-800 shadow-lg dark:shadow-none rounded-2xl h-80 w-72 m-10 hover:shadow-xl dark:hover:shadow-dark">
                            <div className='flex flex-row flex-wrap justify-center mt-16'>
                                <div className='flex justify-center pt-12'>
                                    <img src="https://react-quizzify.netlify.app/geography.6ada6e66.svg" alt="" />
                                    </div>
                                    <h1 className='text-gray-800 dark:text-gray-300 font-sans font-medium text-xl pt-8 pl-8'>{elem.text }</h1>

                                </div>
                            </div>
                             {/* box and */}
                              </>
                         )
                      })
                  }
              {/* </div> */}
        </div>
    </div>
  )
}

export default ChooseCategory