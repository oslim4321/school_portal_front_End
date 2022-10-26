import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import React, { useEffect } from 'react'
import Index from '../AppliedStudent/Index'
import Description from  '../AppliedStudent/Description'
import Admin from '../Admin/Admin'
import Login from '../AddmitedStudent/Login'
import Navbar from '../Navbar/Navbar'
import StudentDashboard from '../StudentsDashboard/StudentDashboard'
import Test from '../Admin/Test'
import Errorpage from '../NotFound/Errorpage'
import { GlobalDisplayAlert } from '../Context/Alert'
import DisplayErrorAlert from '../NotFound/DisplayErrorAlert'
import Quiz from '../QuizClass/Quiz'
import ChooseCategory from '../QuizClass/ChooseCategory'
import Home from '../Navbar/Home'
import QuizScore from '../QuizClass/QuizScore'
import SingleUserData from '../Admin/SingleUserData'
import PaymentSuccess from '../AppliedStudent/PaymentSuccess'




function App() {
  const {alert,showAlert} = GlobalDisplayAlert()
  return (
    <>
       {
           alert.show && <DisplayErrorAlert {...alert} removeAlert={showAlert} />
      }
      <Router>
        <Navbar />
        <Routes>
        <Route  path='/' element={<Home />}></Route>
        <Route path='/StudentDashboard' element={<StudentDashboard />}></Route>
        <Route path='/login' element={<Login />}></Route>
          <Route path='/PrintYourData/:id' element={<Description />}></Route>
          <Route path='/signup' element={<Index />}></Route>
          <Route path='/Admin' element={<Admin />}></Route>
          <Route path='/Quiz/:id/:course' element={<Quiz/>}></Route>
          <Route path='/ChooseCategory' element={<ChooseCategory/>}></Route>
          <Route path='/QuizScore' element={<QuizScore/>}></Route>
          <Route path='/PaymentSuccess' element={<PaymentSuccess/>}></Route>
         
          <Route path='/Testing' element={<Test />}></Route>
          <Route path='/SingleUserData/:id' element={<SingleUserData />}></Route>
          <Route path='*' element={<Errorpage/>}></Route>

        </Routes>
      </Router>

    </>
  )
}

export default App