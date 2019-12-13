
import data from  '../services/data.json'

const intitialState = {
   test : 'this is a test',
   lists : data
}
const myAppReducer = (state = intitialState , action) => {
   if (action.type ==='app/contacts/add_item') {
   
      return {...state ,lists : state.lists.concat(action.payload) }
   }
   return state
}

export default myAppReducer