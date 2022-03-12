import { GET_SCAN, GET_SCAN_IDENTITIES } from './constants';


const initState = {scans: [], scanIdentities: []}

function dataReducer(state = initState, action) {
  switch (action.type) {
    case GET_SCAN:
      return {...state, scans: action.payload}
    case GET_SCAN_IDENTITIES:
      return {...state, scanIdentities: action.payload}
    default:
      return state
  }
}


export default dataReducer;