import axios from 'axios'
import React, { useState } from 'react'
import { useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { GlobalDisplayAlert } from '../Context/Alert'
import { links } from '../NavbarItem/Items'
import Hanmburger from './Hanmburger'
import Pop from './Pop'
import { v4 as uuidv4 } from 'uuid'


function StudentDashboard() {
  const {showAlert} = GlobalDisplayAlert()
  const unique_id = uuidv4();


  const navigate = useNavigate()
  const user = useSelector((state) => state.data)
  
  const [serverError, setserverError] = useState()

  const [ModalState, setModalState] = useState(false)
  function OpenModal() {
    setModalState(true)
  }
  function CloseModal() {
    setModalState(false)
  }
  if (user.error) {
    setserverError(user.error)
    showAlert(true, "red", 'there is an error getting this routes')
    navigate('/login')
  }

  
  /* Logou user */
  const logout = async() => {
    localStorage.removeItem('token')
    navigate('/login')
    window.location.reload(false);
  }
  
  // function doAlert(){
  //   showAlert(true, "green", 'Testing skills')
  // }
  return (
    <>
      {/* <DisplayErrorAlert /> */}
     
      {ModalState ? <Pop CloseModal={CloseModal} /> : null}
    
      {user.loading && 
          <div className="text-center">
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
          </div>
          <div className="spinner-grow mx-4" role="status">
          <span className="sr-only">Loading...</span>
        </div>
        </div>}
      {!user.loading && user.error ? <div className='text-red-600'>{user.error}</div> : null}
      {!user.loading && user.error ?  showAlert(true, "red", `${user.error}`) : null}
      {/* showAlert(true, "red", {user.error}) */}
      <div><span className='text-red-600'>{serverError}</span></div>
      {/* DAshboard */}

      {/* user can only seee the dashboard when the loading is fasle and no error */}
      {
        !user.loading && user.user && (
          <div>
          <div className="relative">
           
           <header className="w-screen flex-none text-white flex justify-between px-8 pt-5 pb-32 overflow-x-hidden">
             <div className="flex justify-center item-center">
               <Hanmburger OpenModal={OpenModal}/>
               <h2 className="uppercase font-bold pl-5">Dashboard</h2>
             </div>
             <button className="fa fa-bell"></button>
           </header>
           
           <main className="flex-grow absolute mx-auto w-5/6">
             
             <section className="flex flex-col items-center shadow-lg rounded-lg p-5 bg-white">
               <img src="https://thumbs.dreamstime.com/z/beautiful-happy-woman-showing-love-sign-near-eyes-healthy-vision-portrait-holding-heart-shaped-hands-closeup-smiling-83939671.jpg" className="w-16 rounded-full mb-3" alt='' />
                       <h5 className="text-md font-semibold whitespace-no-wrap overflow-hidden truncate w-full text-center"><span>Hi</span>  {user.user ? <p>{user.user.lastName} {user.user.name}</p> : null}</h5>
               <p className="text-md font-semi-bold text-gray-600 whitespace-no-wrap overflow-hidden truncate w-full text-center">{user.user.course}  </p>
             </section>
             
             <ul className="p-5 bg-white mt-5 flex flex-rows flex-wrap">
              {
                links.map((elem)=>{
                  return (
                    <li key={elem.text} className="flex flex-col items-center justify-center mb-3 w-1/2 cursor-pointer">
                      <i className="fa fa-phone text-gray-600"></i>
                      <p className="text-md font-semibold ml-3"><a href={elem.url}>{elem.text}</a></p>
                   </li>
                  )
                })
              }
              
             </ul>
          {/* <button onClick={doAlert}>Do someth</button> */}
             <div className="flex justify-between">
                  {/* <span className=' border-2 border-indigo-600 py-3 px-2'></span> */}
                  <button className="py-2 px-4 shadow-md no-underline rounded-full bg-blue text-white font-sans font-semibold text-sm border-blue btn-primary hover:text-white hover:bg-blue-light focus:outline-none active:shadow-none mr-2">{user.user.program}</button>

                  {/* {<p  className='border py-3 px-2 border-orange-800	text-red-400'>Logout</p>} */}
                 { <button onClick={logout} classNAme="py-2 px-4 shadow-md no-underline rounded-full bg-red text-white font-sans font-semibold text-sm border-red btn-primary hover:text-white hover:bg-red-light focus:outline-none active:shadow-none">Logout</button>	}

             </div>
           </main>
         </div>
             </div>
         )
      }

     
    </>
  
  )
}

export default StudentDashboard