import React from 'react'
import {connect ,useSelector} from "react-redux"
import './lists.css'
  function Lists(props) {
    const lists = useSelector(state => state.contacts.lists)
    console.log('list',lists)
  //  const {lists} = props
  //  console.log('hey' ,lists )
    return (
         <div className='main'>
         <ol className="gradient-list">
             {lists.map(contact => {
                 return (
                    <li >
                  <div>  {contact.first_name}</div> 
                  <div>  {contact.last_name}</div> 
                  <div>  {contact.email}</div> 

                   </li>)
             } )}
     
         </ol>
      </div>
    )
}

const getState = (state) => {
     return {
         lists : state.contacts.lists
     }
}

// export default connect(getState) (Lists)
export default(Lists)

