import React, { useEffect, useState } from 'react'
import { GlobalAdminSingleUSerData } from '../Context/AdminGetSingleUserData'
import { v4 as uuidv4 } from 'uuid'


function SingleUserData() {
    const unique_id = uuidv4();
    const [UserData, setUserData] = useState()
    const { SingleUSerDetails } = GlobalAdminSingleUSerData()
   
    useEffect(() => {
        setUserData(SingleUSerDetails.data)
    }, [])
          console.log(UserData)
        //   


  return (
    <div>
<script src="https://cdn.tailwindcss.com"></script>
<link rel="stylesheet" href="https://cdn.tailgrids.com/tailgrids-fallback.css" />
<script defer src="https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js"></script>

{
    UserData ?     
<section className="bg-white py-20 lg:py-[120px]">
   <div className="container">
      <div className="flex flex-wrap -mx-4">
         <div className="w-full px-4">
            <div className="max-w-full overflow-x-auto">
               <table className="table-auto w-full">
                  <thead>
                     <tr className="bg-primary text-center">
                        <th
                           className="
                           w-1/6
                           min-w-[160px]
                           text-lg
                           font-semibold
                           text-white
                           py-4
                           lg:py-7
                           px-3
                           lg:px-4
                           border-l border-transparent
                           "
                           >
                           Name
                        </th>
                        <th
                           className="
                           w-1/6
                           min-w-[160px]
                           text-lg
                           font-semibold
                           text-white
                           py-4
                           lg:py-7
                           px-3
                           lg:px-4
                           "
                           >
                          Course
                        </th>
                        <th
                           className="
                           w-1/6
                           min-w-[160px]
                           text-lg
                           font-semibold
                           text-white
                           py-4
                           lg:py-7
                           px-3
                           lg:px-4
                           "
                           >
                           program
                        </th>
                        <th
                           className="
                           w-1/6
                           min-w-[160px]
                           text-lg
                           font-semibold
                           text-white
                           py-4
                           lg:py-7
                           px-3
                           lg:px-4
                           "
                           >
                           _id
                        </th>
                        <th
                           className="
                           w-1/6
                           min-w-[160px]
                           text-lg
                           font-semibold
                           text-white
                           py-4
                           lg:py-7
                           px-3
                           lg:px-4
                           "
                           >
                           studentID
                        </th>
                        <th
                           className="
                           w-1/6
                           min-w-[160px]
                           text-lg
                           font-semibold
                           text-white
                           py-4
                           lg:py-7
                           px-3
                           lg:px-4
                           border-r border-transparent
                           "
                           >
                           QuizScore
                        </th>
                     </tr>
                  </thead>
                  <tbody>
                    {
                        //   const {QuizScore, course,email, createdAt, lastName, mobile, name, program, studentID,_id} = UserData
                                <tr>
                            <td
                               className="
                               text-center text-dark
                               font-medium
                               text-base
                               py-5
                               px-2
                               bg-[#F3F6FF]
                               border-b border-l border-[#E8E8E8]
                               "
                               >
                              {UserData.name}
                            </td>
                            <td
                               className="
                               text-center text-dark
                               font-medium
                               text-base
                               py-5
                               px-2
                               bg-white
                               border-b border-[#E8E8E8]
                               "
                               >
                               {UserData.course}
                            </td>
                            <td
                               className="
                               text-center text-dark
                               font-medium
                               text-base
                               py-5
                               px-2
                               bg-[#F3F6FF]
                               border-b border-[#E8E8E8]
                               "
                               >
                               {UserData.program}
                            </td>
                            <td
                               className="
                               text-center text-dark
                               font-medium
                               text-base
                               py-5
                               px-2
                               bg-white
                               border-b border-[#E8E8E8]
                               "
                               >
                               {UserData._id}
                            </td>
                            <td
                               className="
                               text-center text-dark
                               font-medium
                               text-base
                               py-5
                               px-2
                               bg-[#F3F6FF]
                               border-b border-[#E8E8E8]
                               "
                               >
                               {UserData.studentID}
                            </td>
                            <td
                               className="
                               text-center text-dark
                               font-medium
                               text-base
                               py-5
                               px-2
                               bg-white
                               border-b border-r border-[#E8E8E8]
                               "
                               >
                               <a
                                  href="javascript:void(0)"
                                  className="
                                  border border-primary
                                  py-2
                                  px-6
                                  text-primary
                                  inline-block
                                  rounded
                                  hover:bg-primary hover:text-white
                                  "
                                  >
                                Check
                               </a>
                            </td>
                         </tr>
                          
                    }
                  </tbody>
               </table>
            </div>
         </div>
      </div>
   </div>
   {
    UserData.QuizScore.map((elem)=>{
        return(
            <p className='text-center text-2xl mt-5'>{elem.Course}<span className='mx-5 border-r border-l px-3'>{elem.Score}</span> <span className='text-sm'>{elem.Date}</span></p>
        )
    })
   }
</section>

        :
        <div className="text-center">
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
          </div>
          <div className="spinner-grow mx-4" role="status">
          <span className="sr-only">Loading...</span>
        </div>
        </div>
        }
    </div>
  )
}

export default SingleUserData