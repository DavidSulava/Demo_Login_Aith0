import Api from '../services/api';
import { GET_SCAN, GET_SCAN_IDENTITIES } from './constants';


export class CommonActions {
  static getScansAction(token, postData = {Page: 1, PerPage: 10}) {
    return async (dispatch) => {
      try {
        const data = await Api.getScans(token, postData);

        if (data)
          dispatch({'type': GET_SCAN, 'payload': data});
      } catch (e) {
        console.log(e)
      }
    }
  }
  static getScanIdentitiesAction(token, idList ) {
    return async (dispatch) => {
      try {
        const data = await Api.getScanIdentities(token, idList);

        if (data)
          dispatch({'type': GET_SCAN_IDENTITIES, 'payload': data});
      } catch (e) {
        console.log(e)
      }
    }
  }
}