import React from 'react'
import { links } from '../NavbarItem/Items'
import { v4 as uuidv4 } from 'uuid'


function Pop({CloseModal}) {
  const unique_id = uuidv4();

  return (
      <>
     <div onClick={CloseModal} className="z-20 bg-slate-800 bg-opacity-50 flex justify-center items-center absolute top-0 right-0 bottom-0 left-0"> 
      <div className="bg-white px-16 py-14 rounded-md text-center">
    {
          links.map((elem)=>{
            return (
                <>
                 <li key={unique_id} className='flex'> 
                <a className="nav-link" aria-current="page" href={elem.url}>
                    <i className="material-icons mr-2 text-base opacity-60">{}</i>
                    <span>{elem.text}</span>
                </a>
                </li>
                </>
            )
        })
    }
       
      </div> 
    </div>
      </>
  )
}

export default Pop