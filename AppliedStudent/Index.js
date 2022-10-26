import React, { useEffect, useState } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom'
import { GlobalUSerData } from '../Context/UserApplyData'


function Index() {
  const { setUserData } = GlobalUSerData()
  const [ErrMessage, setErrMessage] = useState()

  const [Alldata, setAlldata] = useState()
  const [Course, setCourse] = useState()
  const [SelectCourse, setSelectCourse] = useState()
  const [PROGRAM_TYPE, setPROGRAM_TYPE] = useState()
  const [NAME, setNAME] = useState()
  const [LAST_NAME, setLAST_NAME] = useState()
  const [MOBILE, setMOBILE] = useState()
  const [EMAIL, setEMAIL] = useState()
  const [ApplyButton, setApplyButton] = useState('Apply')
  let navigate = useNavigate()
  const token = localStorage.getItem('token')

  // useEffect(() => {
    // return () => {
      const data = axios.get('https://oslim-school-portals-api.herokuapp.com/api/v1/jwt/getAllCourse',
      {
        headers: {
          Authorization: `Bearer ${token}`,
        }
      })
        .then((data) => {
          setAlldata(data.data)
          // console.log(data.data);
        }).catch((err) => {
          setErrMessage(err.message)
        console.log(err.message);
      })
    // };
  // }, [])

 
  const sendData = async (e) => {
    e.preventDefault()
    setApplyButton('Loading')
      const course= SelectCourse
       const program=PROGRAM_TYPE
       const name=NAME
       const lastName= LAST_NAME
       const mobile= MOBILE
       const email= EMAIL
   
    try {
     const data = await axios.post('https://oslim-school-portals-api.herokuapp.com/api/v1/jwt/ApplySchool', 
       { course, program, name, lastName, mobile, email, addmited: false, isAdmin: false },
       { headers: {
        Authorization: `Bearer ${token}`,
      }}  
     )
      const UserData = data.data;
    console.log(data)
      if (!data) {
        setApplyButton('Apply')
      }
      setApplyButton('Redirecting')
      setUserData(UserData)
      navigate(`/PrintYourData/${UserData._id}`)


          } catch (error) {
            console.log(error)
            setApplyButton('Apply')
          }
  }
 
  {/* onChangeEvent Check wheather the user pick HND or ND */}
  const ProgramType = (e) => {
    setPROGRAM_TYPE(e.target.value)
    const target = e.target.value;
    const filterCourse = Alldata.filter((elem) => elem.type === 'HND')
    if (target === 'HIGHER NATIONAL DIPLOMA') {
      setCourse(filterCourse)
    } else if (target === 'NATIONAL DIPLOMA') {
      const filterCourse = Alldata.filter((elem) => elem.type === 'ND')
      setCourse(filterCourse)
    }
    else {
      console.log('item is empty');
    }
    
  }
  function clear(e) { 
    e.preventDefault()
    console.log(SelectCourse);
  }

  return (
      <div>
<div className="mt-1 sm:mt-0">
  <div className='md:mx-40'>
    <div className="mt-5 md:col-span-2 md:mt-0">
      <form action="#" method="POST">
        <div className="overflow-hidden shadow sm:rounded-md">
            <div className="md:flex justify-between  px-4 pt-5">
                <div><h1>Oslim School Portal </h1></div>
                <div><h1>ONLINE APPLICATION PORTAL 2022/23</h1></div>
            </div>
            <div className='px-4 bg-blue-600 py-6 mt-2'>
                <h1 className='text-white text-1xl'>PERSONAL INFORMATION</h1>
            </div>                  
            
                {/* Loading */}
                {
                  Alldata ? '' :
                  <div className="flex px-4 py-2">
                    {
                        ErrMessage ? <p className='text-red-600'>Sorry! { ErrMessage}</p>
                        :
                          <>
                            <p className='mr-3 text-red-500'>Please wait while we connect to database</p>
                            <div className="spinner-border" role="status">
                            <span className="sr-only w-4 h-4 text-sm">Loading...</span>
                           </div>
                          </>
                    }
                  
                 
                 </div>
                }
       
                

          <div className="bg-white px-4 py-2 sm:p-6">
            <div className="grid grid-cols-6 gap-6">
                {/* Check weather the use pick HND or ND */}
              <div className="col-span-6 sm:col-span-3">
                <label htmlFor="PROGRAM_TYPE " className="block text-sm font-medium text-gray-700">PROGRAM TYPE </label>
                <select className="form-select" value={PROGRAM_TYPE} onChange={ProgramType}>
                    <option selected>Select</option>
                    <option value="HIGHER NATIONAL DIPLOMA">HIGHER NATIONAL DIPLOMA</option>
                    <option value="NATIONAL DIPLOMA">NATIONAL DIPLOMA</option>
                </select>
                    </div>

                    {/* Setting all the course after getting it from datatbase */}
              <div className="col-span-6 sm:col-span-3">
                <label htmlFor="SELECT_COURSE" className="block text-sm font-medium text-gray-700">SELECT COURSE</label>
                <select className="form-select" name='SELECTCOURSE' id='SELECTCOURSE' value={SelectCourse} onChange={(e)=> setSelectCourse(e.target.value)}>
                <option selected>Select</option>
                  { Course ? 
                    Course.map((elem)=>{
                      return (
                        <>
                         <option key={elem.course} value={elem.course}>{ elem.course}</option>
                        </>
                     )
                    })
                   :
                   <option selected>No course to fetch</option>
                    } 
                </select>
              </div>
                {/* doind */}
                                      

              <div className="col-span-6 sm:col-span-3">
                <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">First name</label>
                <div className="input-group mb-3">
                <div className="input-group-text">
                   name
                </div>
                <input type="text" className="form-control" aria-label="Text input with checkbox" value={NAME} onChange={(e)=> setNAME(e.target.value)}/>
                </div>
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label htmlFor="first-name" className="block text-sm font-medium text-gray-700"> last Name</label>
                <div className="input-group mb-3">
                <div className="input-group-text">
                   last Name
                </div>
                <input type="text" className="form-control" aria-label="Text input with checkbox" value={LAST_NAME} onChange={(e)=> setLAST_NAME(e.target.value)}/>
                </div>
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label htmlFor="MOBILE_NUMBER" className="block text-sm font-medium text-gray-700">MOBILE NUMBER</label>
                <div className="input-group mb-3">
                <div className="input-group-text">
                   MOBILE NUMBER
                </div>
                <input type="number" className="form-control" aria-label="Text input with checkbox" value={MOBILE} onChange={(e)=> setMOBILE(e.target.value)}/>
                </div>
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label htmlFor="EMAIL ID" className="block text-sm font-medium text-gray-700">EMAIL ID</label>
                <div className="input-group mb-3">
                <div className="input-group-text">
                 EMAIL ID
                </div>
                <input type="email" className="form-control" aria-label="Text input with checkbox"  value={EMAIL} onChange={(e)=> setEMAIL(e.target.value)}/>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 px-4 py-3 text-right sm:px-6 flex">
            <button onClick={sendData} type="submit" className="inline-flex justify-center rounded-md border border-transparent bg-green-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 mr-6">{ApplyButton}</button>
            <button onClick={clear} type="submit" className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Clear</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</div>

<div className="hidden sm:block" aria-hidden="true">
  <div className="py-5">
    <div className="border-t border-gray-200"></div>
  </div>
</div>


    </div>
  )
}

export default Index