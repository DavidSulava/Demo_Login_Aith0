import HttpClient, { RequestMethod } from './http.client';


export default class Api {
  static async getScans(token, postData) {
    const path = `${process.env.REACT_APP_AUTH0_AUDIANCE}/api/v2/scans/get`
    const additionalHeaders = {
      'Authorization': `Bearer ${token}`
    }
    const response = await HttpClient.call(RequestMethod.POST, path, additionalHeaders, postData);
    return await response.json()
  }
  static async getScanIdentities(token, idList) {
    const path = `${process.env.REACT_APP_AUTH0_AUDIANCE}/api/v2/identities/get`
    const additionalHeaders = {
      'Authorization': `Bearer ${token}`
    }
    const response = await HttpClient.call(RequestMethod.POST, path, additionalHeaders, {IDs: idList});
    return await response.json()
  }
}