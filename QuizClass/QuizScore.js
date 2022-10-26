import React from 'react'
import { useSelector } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'


function QuizScore() {
  const unique_id = uuidv4();
    const user = useSelector((state) => state.data)
    const userOne = user.user.QuizScore
  return (
      <div>
<div className="w-2/3 mx-auto flex justify-center items-center">
  <div className="bg-white shadow-md rounded my-6">
    <table className="text-left w-full border-collapse">
      <thead>
        <tr>
          <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">Course</th>
          <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">Score</th>
          <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">Date</th>
        </tr>
      </thead>
      <tbody>
       
          { userOne ?
            userOne.map((elem)=>{
                const {Course,Score, Date} =elem
                return (
                    <>
                         <tr key={unique_id} className="hover:bg-grey-lighter">
                        <td className="py-4 px-6 border-b border-grey-light uppercase">{Course}</td>
                        <td className="py-4 px-6 border-b border-grey-light">
                          <a href="#" className="text-grey-lighter font-bold py-1 px-3 rounded text-xs bg-blue hover:bg-blue-dark">{Score}/5</a>
                        </td>
                        <td className="py-4 px-6 border-b border-grey-light">
                          <a href="#" className="text-grey-lighter font-bold py-1 px-3 rounded text-xs break-normal	text-center">{Date}</a>
                        </td>
                        </tr>
                    </>
                )
            }) :
            <div className="text-center">
            <div className="spinner-border" role="status">
              <span className="sr-only">Loading...</span>
              </div>
              <div className="spinner-grow mx-4" role="status">
              <span className="sr-only">Loading...</span>
            </div>
            </div>
          }
      
      </tbody>
    </table>
  </div>
</div>
    </div>
  )
}

export default QuizScore