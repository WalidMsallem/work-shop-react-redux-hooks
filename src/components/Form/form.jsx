import React, { Component ,useState} from 'react'
import {addItem} from '../../action/myApp.action'
import {connect , useDispatch} from 'react-redux'
import './form.css'

// constom hooks 
function useFormInput (initialValue) {

  const [value, setValue] = useState(initialValue);
  const handleChange = event => {
      setValue(event.target.value);
  };
  return { value, onChange: handleChange };
};
 function  Form  () {
//  const [name , setName] = useState('')
//  const [lastName , setLastName] = useState('')
//  const [email , setEmail] = useState('')


//  const [state , setState] = useState({
//      first_name : '' ,
//      last_name :'',
//      email :''
//  })

 const  name = useFormInput('')
 const lastName = useFormInput('')
 const  email = useFormInput('')



// state = {
//   first_name : '' ,
//   last_name :'',
//   email :''
// }

// const handleInput =(e) => {
//   console.log('e' ,e.target.value)
//   this.setState({
//     [e.target.name] : e.target.value
//   })
// }
// const handleChange = (e) => {
//  const {name , value} = e.target
//   setState ((prevState) =>  ({
//       ...prevState,
//       [name] : value
//     })
//   )
// }

    // const handleChange = e => {
    //     const {name , value} = e.target
    //     setState(prev => ({
    //         ...prev,
    //         [name] : value
    //     })
    //     )
    // } 

    const dispatch = useDispatch()
const handleSubmit = () => {
  const contact ={
    first_name :  name.value,
    last_name : lastName.value,
    email :email.value
  }
  
     dispatch  (addItem(contact))
}
        return (
            <div className="container">
            <div  >
            <div className="row">
              <div className="col-25">
                <label for="fname">First Name</label>
              </div>
              <div className="col-75">
                <input 
                  type="text" id="fname" name="first_name" placeholder="Name.." 
                  // onChange={ this.handleInput}
                  // onChange  = {(e) => setName(e.target.value)}
                  // onChange  = {handleChange}
                     {...name}
                  />
              </div>
            </div>
            <div className="row">
              <div className="col-25">
                <label for="lname">Last Name</label>
              </div>
              <div className="col-75">
                <input 
                 type="text" id="lname" name="last_name" placeholder="Last name.." 
                //  onChange={ this.handleInput}
                // onChange  = {(e) => setLastName(e.target.value)}
                // onChange  = {handleChange}
                {...lastName}
                 />
              </div>
            </div>
            <div className="row">
              <div className="col-25">
                <label for="subject">Email</label>
              </div>
              <div className="col-75">
              <input type="text" 
               id="email" name="email" placeholder="Email.." 
              //  onChange  = {handleChange}
              {...email}
               
              //  onChange  = {(e) => setEmail(e.target.value)}
              //  onChange={ this.handleInput}
               />
              </div>
            </div>
            <div className="row">
              <button
               onClick = {handleSubmit} 
               >Submit</button>
            </div>
            </div>
          </div>
        )
}
// const dispatchAction = (dispatch) => {
//    return {
//      addItem : (payload) =>  dispatch (addItem(payload))
//    }
// }
// export default connect(null , dispatchAction)(Form) 
export default  (Form) 

