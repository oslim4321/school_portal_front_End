import React from 'react'

function DeleteUSer({ Delete, deleteID, setDeletePopMessage}) {
    function Cancel() {
        setDeletePopMessage(false)
    }
  return (
    <>
    <div className="z-10 bg-slate-800 bg-opacity-50 flex justify-center items-center absolute top-0 right-0 bottom-0 left-0"> 
     <div className="bg-white px-16 py-14 rounded-md text-center">
        <li className='flex'> 
            <a className="nav-link" aria-current="page" href=''>
            {/* <i className="material-icons mr-2 text-base opacity-60">{}jjdjdjd</i> */}
                <span>Are you Sure You want to  delete</span>    
                 </a>
                  </li> 
                  <button onClick={()=> Delete(deleteID)} class="py-2 px-4 shadow-md no-underline rounded-full bg-red text-white font-sans font-semibold text-sm border-red btn-primary hover:text-white hover:bg-red-light focus:outline-none active:shadow-none">Delete</button>
                <button onClick={Cancel} className="py-2 px-4 shadow-md no-underline rounded-full bg-blue text-white font-sans font-semibold text-sm border-blue btn-primary hover:text-white hover:bg-blue-light focus:outline-none active:shadow-none mr-2">Cancel</button>
     </div> 
   </div>
     </>
  )
}

export default DeleteUSer