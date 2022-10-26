import React from 'react'

function PaymentSuccess() {
  return (
     <div className='flex justify-center items-center flex-col h-[100vh]'>
          <p className='bg-green-600 px-4 py-4 text-white text-2xl rounded-md'>Successful.</p>
          <p className='text-center font-bold'>Your payment is Successful Thanks for choosing Oslim School</p>
          <p>An email will be send to you </p>
    </div>
  )
}

export default PaymentSuccess