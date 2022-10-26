import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { links, AdminItems } from '../NavbarItem/Items'
import { useDispatch, useSelector } from 'react-redux'
import { getSingleUserDetails } from '../REDUX/USERDashboardSlice/UserSlicer'
import { GlobalDisplayAlert } from '../Context/Alert'


function Navbar() {
    
    const {showAlert} = GlobalDisplayAlert()
    const token = localStorage.getItem('token')

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [toggleNavbar, settoggleNavbar] = useState(false)

    const user = useSelector((state) => state.data)
   
    useEffect(() => {
        token ? dispatch(getSingleUserDetails()) :  showAlert(true, "red", 'You token is empty pls login') && navigate('/login')
    }, [])
    
  
    // console.log('testing', user)
    if (user.error) {
        showAlert(true, "red", 'there is an error getting this routes')
        navigate('/login')
      }
   
    function toggleNavbarButt() {
       settoggleNavbar(!toggleNavbar)
    }
  
  return (
      <div>
            <div>
    <div
      className="min-h-30 p-10 pt-0 "
    >
        <nav className="navbar w-full bg-white">
            <div className="container-lg px-0">
                <div className="flex w-full items-center justify-center">
                <a className="nav-brand mr-auto ml-0" href="#">Material Tailwind Navbar</a>
                <button onClick={toggleNavbarButt}
                    navbar-trigger=""
                    className="navbar-trigger ml-auto mr-0 mb-0 lg:hidden xl:hidden"
                    type="button"
                    aria-controls="navigation"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-trigger-icon">
                    <span bar1="" className="navbar-trigger-bar mt-1"
                        ><span className="hidden origin-[10%_10%] rotate-45"></span></span>
                    <span bar2="" className="bar2 navbar-trigger-bar mt-2"></span>
                    <span bar3="" className="bar3 navbar-trigger-bar mt-2"
                        ><span
                        className="mt-mt-[0.4375rem] hidden origin-[10%_90%] -rotate-45"
                        ></span
                    ></span>
                    </span>
                </button>
                </div>
                        {/* shoow admin items at the top of the navbar */}
                <div className={`${!toggleNavbar ? 'collapse' : ''} navbar-collapse`} navbar-menu="">                              
                      <ul className="navbar-nav">
                                   {
                                      user.user.isAdmin &&
                                          AdminItems.map((elem) => {
                                              return (
                                                 <>
                                                      <li key={elem.text}>
                                                          <a className="nav-link" aria-current="page" href={elem.url}>
                                                              <i className="material-icons mr-2 text-base opacity-60">{ }</i>
                                                              <span>{elem.text}</span>
                                                          </a>
                                                      </li>
                                                  </>
                                              )
                                          })
                                  }
                             </ul>
            {/* show The user items at the top of the navbar  but dont show the admin*/}
                <ul className="navbar-nav">
                    { user.user &&  !user.user.isAdmin && !user.error ?
                        links.map((elem)=>{
                           
                            return (
                                <>
                                 <li key={elem.text} className='cursor-pointer'>
                                <a className="nav-link" aria-current="page" href={elem.url}>
                                    <i className="material-icons mr-2 text-base opacity-60">{}</i>
                                    <span>{elem.text}</span>
                                </a>
                                </li>
                                </>
                            )
                        }) : null
                    } 
                </ul>
              {/* if there is no token show login and signUp */}
                <ul className="navbar-nav">
                    { !user.user  && !user.error && !user.loading &&
                         <>
                         <li>
                         <a className="nav-link cursor-pointer" aria-current="page">
                             <i className="material-icons mr-2 text-base opacity-60">{}</i>
                             <span onClick={()=> navigate('/login')}>login</span>
                         </a>
                         </li>
                         <li>
                         <a className="nav-link cursor-pointer" aria-current="page">
                             <i className="material-icons mr-2 text-base opacity-60">{}</i>
                             <span onClick={()=> navigate('/signup')}>Sign Up</span>
                         </a>
                         </li>
                        </>
                        
                    } 
                   
                </ul>
                </div>
            </div>
        </nav>

      </div>
    </div>
    </div>
    
  )
}

export default Navbar