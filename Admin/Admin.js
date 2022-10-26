import axios from 'axios'
import { v4 as uuidv4 } from 'uuid'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { GlobalDisplayAlert } from '../Context/Alert'
import AdminPanel from './AdminPanel'
import DeleteUSer from './DeleteUSer'
import { GlobalAdminSingleUSerData } from '../Context/AdminGetSingleUserData'

function Admin() {
  const unique_id = uuidv4();
  const { setSingleUSerDetails } = GlobalAdminSingleUSerData ()

  const [DeletePopMessage, setDeletePopMessage] = useState(false)
  const [deleteID, setdeleteID] = useState(null)
  const token = localStorage.getItem('token')

  function tokenReturn() {
    return {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    }
  }

  /* Logout */
  const logout = async() => {
    localStorage.removeItem('token')
    navigate('/login')
    window.location.reload(false);
  }

  const {showAlert} = GlobalDisplayAlert()
  const navigate = useNavigate()
  const [error, seterror] = useState()
  const [ClickLoading, setClickLoading] = useState(false)
  const user = useSelector((state) => state.data)
  const users = user.user;
    const [data, setdata] = useState()
    useEffect(() => {
         axios.get('https://oslim-school-portals-api.herokuapp.com/api/v1/jwt/GetAllApplyStudent', tokenReturn())
           .then((data) => {
            // console.log(data)
            const ApplyData = data.data;
            setdata(ApplyData)

        }).catch((error) => {
          console.log('me', error.response.data.error);
          seterror(error.response.data.error);
          showAlert(true, 'red', `${error.response.data.error}`)
          setTimeout(() => {
          navigate('/StudentDashboard')
         }, 2000);
        })
    }, [])

  const Admit = async (params) => {
    setClickLoading(true)
    let random = Math.floor(Math.random() * 900000) + 100000;
        const data = await axios.patch(`https://oslim-school-portals-api.herokuapp.com/api/v1/jwt/UpdateAndGiveAddmission/${params}`,{
          addmited: true,
          studentID: random
        },tokenReturn())
        if(data.data) setClickLoading(false)
    }

  const PopDelete = async (params) => {
     setdeleteID(params)
      setDeletePopMessage(true)
     
    }
  const Delete = async (params) => {
    setClickLoading(true)
      console.log(params)
      const data = await axios.delete(`https://oslim-school-portals-api.herokuapp.com/api/v1/jwt/DeleteUserApply/${params}`, tokenReturn())
      if(data.data) setClickLoading(false)
    setDeletePopMessage(false)
    Delete()

    }
    const getSingleUsers = async(params)=>{
      setClickLoading(true)
      const data = await axios.get(`https://oslim-school-portals-api.herokuapp.com/api/v1/jwt/getSingleUsers/${params}`, tokenReturn())
      setSingleUSerDetails(data)
      if(data.data) setClickLoading(false)
      navigate(`/SingleUserData/${params}` )
    }
  return (
    <div>
      {/* <!-- component --> */}
      {
        error && 
        <div className='text-center text-red-600'>{error}</div>
      }
      
      {
        !error && users && !user.loading &&
        <>
          { 
            DeletePopMessage && <DeleteUSer deleteID={deleteID} Delete={Delete} setDeletePopMessage={setDeletePopMessage} />
          }
       
          
          <div className='flex justify-center items-center'><AdminPanel /></div>
          
          <h1 className='text-center text-3xl'>Apply Student List</h1>
<section className="py-1 bg-blueGray-50 w-[100%]">
<div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4 mx-auto mt-24">
  <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded ">
    <div className="rounded-t mb-0 px-4 py-3 border-0">
      <div className="flex flex-wrap items-center">
        <div className="relative w-full px-4 max-w-full flex-grow flex-1">
          <h3 className="font-semibold text-base text-blueGray-700">Page Visits</h3>
        </div>
        <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
          <button className="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">See all</button>
        </div>
      </div>
    </div>
          {/* Loading for ani click */}
          {
            ClickLoading &&
            <div className="spinner-border" role="status">
                <span className="sr-only w-4 h-4 text-sm">Loading...</span>
            </div>
          }
          
               {/* Loading for ani click */}

    <div className="block w-full overflow-x-auto">
      <table className="items-center bg-transparent w-full border-collapse ">
        <thead>
          <tr>
            <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
            Full Name
            </th>
          <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
          program
            </th>
           <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
           course
            </th>
          <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
          addmited
            </th>
          <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
          Check
            </th>
          <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
          <i className="bi bi-trash3"></i>
            </th>
          </tr>
        </thead>

        <tbody>
         {
            data ? 
            data.map((elem)=>{
                const {addmited, course, email, lastName, name, program, _id} =elem
              return (
                  <>
                <tr key={unique_id}>
                <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 ">
                  {lastName} {name}
                </th>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                  {program}
                </td>
                <td className="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  {course}
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 flex gap-2">
                  {!addmited ? <p className='text-red-600'>not addmited</p> : <p className='text-green-600'>addmited</p>}
                   <i onClick={()=> Admit(_id)} className="fas fa-arrow-up text-emerald-500 mr-4"></i>
                </td>
                <td onClick={()=> getSingleUsers(_id)} className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 border">
                 check
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  <i onClick={()=> PopDelete(_id)} className="bi bi-trash3"></i>
                </td>
              </tr>
                  </>
              )
            })
            : 
            <div className="flex px-4 py-2">
            <p className='mr-3 text-red-500'>Fetching Apply Users</p>
            <div className="spinner-border" role="status">
                <span className="sr-only w-4 h-4 text-sm">Loading...</span>
            </div>
           </div>
         }
         {!data ? <p>No data to fetch</p> : ''}
        </tbody>

      </table>
    </div>
  </div>
</div>
<footer className="relative pt-8 pb-6 mt-16">
  <div className="container mx-auto px-4">
    <div className="flex flex-wrap items-center md:justify-between justify-center">
      <div className="w-full md:w-6/12 px-4 mx-auto text-center">
        <div className="text-sm text-blueGray-500 font-semibold py-1">
          {/* Made with <a href="https://www.creative-tim.com/product/notus-js" className="text-blueGray-500 hover:text-gray-800" target="_blank">Notus JS</a> by <a href="https://www.creative-tim.com" class="text-blueGray-500 hover:text-blueGray-800" target="_blank"> Creative Tim</a>. */}
        </div>
      </div>
    </div>
      </div>
          <div className="flex justify-center item-center">
            <a href="https://oslim-school-portals-api.herokuapp.com/api/v1/jwt/DeleteUnAdmittedUsers"> <button className='btn btn-success'>Give Addmission</button></a>
         
      </div>
</footer>
{ <button onClick={logout} classNAme="py-2 px-4 shadow-md no-underline rounded-full bg-red text-white font-sans font-semibold text-sm border-red btn-primary hover:text-white hover:bg-red-light focus:outline-none active:shadow-none">Logout</button>	}

</section>
        </>
      } 
      
    </div>
  )
}

export default Admin