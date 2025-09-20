import React from 'react'
import { FaPlus } from "react-icons/fa6";


function Todo() {
    return (
        <div className='flex items-center justify-center'>
            <fieldset className="fieldset p-4 ">
  <input type="text" className="input" placeholder="TODO kiriting" />
</fieldset>
        <button className="btn btn-primary p-3"><FaPlus/></button>
        </div>
    )
}

export default Todo
