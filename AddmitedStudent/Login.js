import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { GlobalDisplayAlert } from '../Context/Alert'
import { getSingleUserDetails } from '../REDUX/USERDashboardSlice/UserSlicer'

function Login() {
  const {showAlert} = GlobalDisplayAlert()

  const [loading, setloading] = useState('Sign up')
  const [UserID, setUserID] = useState("")
  const [password, setpassword] = useState("")
  const [error, seterror] = useState()
  const [IdError, setIdError] = useState()
  const [passwordErr, setpasswordErr] = useState()
  const navigate = useNavigate()
  const token = localStorage.getItem('token')
   
  const sendLogin = async (e) => {

    e.preventDefault() 
    setloading('loading')
    seterror('')
    setIdError('')
    setpasswordErr('')
    
    try {
      if (!UserID || !password) {
        seterror('the fileds are required')
        setloading('Sign up')
      } else {
        const data = await axios.post('https://oslim-school-portals-api.herokuapp.com/api/v1/jwt/StudentLogin',{ID: UserID, password},{ headers: {
          Authorization: `Bearer ${token}`,
        }})
        // console.log('me', data.data.Token)
        localStorage.setItem('token', data.data.Token)
        let AllData = data.data.success;
        if (data.data.Error) {
          setloading('Sign up')
          const err = data.data.Error;  
          localStorage.removeItem('token')
          // console.log(err)
          console.log(err)
          setpasswordErr(err.password)
          setIdError(err.id)
        }
        console.log('this is been logged from login the user logged', AllData);
        if (!AllData.isAdmin) {
          setloading('Redirecting')
          showAlert(true, "green", 'Login Successful')
          navigate('/StudentDashboard')
          window.location.reload(false);
        } else if (AllData.isAdmin) {
          setloading('Redirecting to admin')
          showAlert(true, "green", 'Login Successful')
          navigate('/Admin')
          window.location.reload(false);
        }
      
      }
  
    } catch (error) {
      setloading('Sign up')
      seterror(error.message)
      console.log('meee', error)
      localStorage.removeItem('token')
    }
  }


  return (
    <div>

<div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
  <div className="w-full max-w-md space-y-8">
    <div>
      {/* <img className="mx-auto h-12 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company"> */}
      <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">Sign in to your account</h2>
    </div>
    <form className="mt-8 space-y-6" action="#" method="POST">
      {/* <input type="hidden" name="remember" value="true" /> */}
      <div className="-space-y-px rounded-md">
        <div>
          <label htmlFor="id-address" className="sr-only">id address</label>
          <input id="number" name="id" type="number" className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="ID address" 
          value={UserID} onChange={(e)=> setUserID(e.target.value)} />
           <div className="idError text-red-600">{IdError}</div>
        </div>
       
        
        <div className='pt-4'>
          <label htmlFor="password" className="sr-only">Password</label>
          <input id="password" name="password" type="password" autoComplete="current-password" required className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="Password"
           value={password} onChange={(e)=> setpassword(e.target.value)} />
                <div className="passErro text-red-600">{passwordErr}</div>
        </div>
        
        <a className='text-center cursor-pointer' onClick={()=> navigate('/signup')}>Sign up</a>
      </div>
     

      <div className="flex items-center justify-between">
        <div className="flex items-center">
            <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"  />
          <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">Remember me</label>
        </div>

        <div className="text-sm">
          <a  className="font-medium text-indigo-600 hover:text-indigo-500">Forgot your password?</a>
        </div>
      </div>
            <div className="error text-center text-red-600">{ error}</div>
      <div>
        <button onClick={sendLogin} type="submit" className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3">
            {/* <!-- Heroicon name: mini/lock-closed --> */}
            <svg className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fillRule="evenodd" d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z" clipRule="evenodd" />
            </svg>
          </span>
          {loading}
              </button>
            
      </div>
          </form>
  </div>
</div>

    </div>
  )
}

export default Login