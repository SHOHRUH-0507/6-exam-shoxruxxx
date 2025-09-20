import React from 'react'
import { MdDeleteOutline } from "react-icons/md";


function Todo2() {
    return (
         <div className='flex items-center justify-center'>
            <fieldset className="fieldset p-4 ">
  <input type="text" className="input" placeholder="TODO kiriting" />
</fieldset>
        <button className="btn btn-primary p-3"><MdDeleteOutline/></button>
        </div>
    )
}

export default Todo2
