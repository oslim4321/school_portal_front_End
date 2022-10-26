import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { GlobalUSerData } from '../Context/UserApplyData'
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';


function Description() {
  const ApiKEy = 'pk_test_51LomMgH3FDIF4YxGBzCvGdK8ztMmTZDAscmiLZJnsDLhZyOy144w8G4a8WuDLNqRWgsAks8Xb41cWqSCU9yNdD8x00UgI6Ay5e'
  const { UserData } = GlobalUSerData()
  const {name,lastName,email,mobile,program,course,createdAt,_id} =UserData
  const [stripeToken, setstripeToken] = useState(null)
  const [PaymentErr, setPaymentErr] = useState()
  let { id } = useParams()
  const navigate = useNavigate()
  // console.log(UserData);
  
  const onToken = (token) => {
    setstripeToken(token)
  }

  useEffect(() => {
    const makeRequest =async () => {
     try {
       const res = await axios.post('https://oslim-school-portals-api.herokuapp.com/api/v1/jwt/payment', {
         tokinId: stripeToken.id,
         amount: 150000
       });
       if (res.data) {
        navigate('/PaymentSuccess')
       } else {
         alert('error cant make payment')
       }
     } catch (error) {
       setPaymentErr(error.message)
     }
    }
    stripeToken && makeRequest()
  }, [stripeToken])

  return (
    <div>
        {/* <!-- This example requires Tailwind CSS v2.0+ --> */}
<div class="overflow-hidden bg-white border">
  <div class="px-4 py-5 sm:px-6">
    <h3 class="text-lg font-medium leading-6 text-gray-900">Applicant Information</h3>
    
  </div>
  <div class="border border-gray-200 py-3 w-[100%] md:mx-40">
  <p class="mt-1  text-sm  text-center text-red-600 font-semibold">PLEASE ENSURE TO PRINT THESE PAGE OR TAKE NOTE OF YOUR APPLICATION NUMBER BEFORE GOING AHEAD TO PAY.</p>
    
        <dl>
      <div class="bg-gray-50 px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
        <dt class="text-sm font-medium text-gray-500">Full name</dt>
        <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{name} {lastName} </dd> 
      </div>
      <div class="bg-white px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
        <dt class="text-sm font-medium text-gray-500">APPLICATION NUMBER</dt>
        <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{_id}</dd>
      </div>
      <div class="bg-white px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
        <dt class="text-sm font-medium text-gray-500">DATE APPLIED</dt>
        <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{createdAt}</dd>
      </div>
      <div class="bg-white px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
        <dt class="text-sm font-medium text-gray-500">AMOUNT	</dt>
        <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">=N=15,000.00</dd>
      </div>
      <div class="bg-white px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
        <dt class="text-sm font-medium text-gray-500">School	</dt>
        <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{program}</dd>
      </div>
      <div class="bg-gray-50 px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
        <dt class="text-sm font-medium text-gray-500">Email address</dt>
        <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{email}</dd>
      </div>
      <div class="bg-gray-50 px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
        <dt class="text-sm font-medium text-gray-500">Program Type</dt>
        <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{program}</dd>
      </div>
      <div class="bg-gray-50 px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
        <dt class="text-sm font-medium text-gray-500">PROGRAMME/COURSE</dt>
        <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{program} {course}</dd>
      </div>
      <div class="bg-gray-50 px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
        <dt class="text-sm font-medium text-gray-500">CAMPUS</dt>
        <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">Oslim School</dd>
      </div>
      <div class="bg-gray-50 px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
        <dt class="text-sm font-medium text-gray-500">ACADEMIC SESSION</dt>
        <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{ new Date().getFullYear()}</dd>
      </div>
    </dl>
        </div>
        <p className='text-center text-red-500'>{ PaymentErr}</p>

    <div className="flex gap-2 justify-center my-10">
    <button class="block uppercase shadow bg-indigo-800 hover:bg-indigo-700 focus:shadow-outline focus:outline-none text-white text-xs py-3 px-[10%] rounded">Print</button>
      {
        stripeToken ? 
        <>
        <p>Processing plesse wait...</p>
        <div className="spinner-border" role="status">
        <span className="sr-only w-4 h-4 text-sm">Loading...</span>
       </div>
        </>
        :
        <StripeCheckout
        name='Oslim school' 
        image='/Images/yara-kawe.png'
        description= 'Your total is N=15,000.00'
        amount={150000}
        token={onToken}
        stripeKey={ApiKEy}
        >
       <button class="block uppercase shadow bg-green-800 hover:bg-green-700 focus:shadow-outline focus:outline-none text-white text-xs py-3 px-[10%] rounded">Pay Now</button>
 
        </StripeCheckout>
      }
     
    </div>
</div>
    </div>
  )
}

export default Description