export const RequestMethod = {
  GET: "GET",
  POST: "POST",
  PUT: "PUT",
  DELETE: "DELETE",
}

export default class HttpClient {
  static async call(
    method,
    url,
    dynamicHeaders = {},
    data = null,
    responseType = 'json',
    contentType = 'application/json'
  ) {

    const staticHeaders = {
      "Content-Type": contentType,
      'X-User-Id': 'Auth0User',
      'X-Org-Id': 'Auth0Org',
    }
    const params = {
      method,
      mode: 'cors',
      redirect: 'follow',
      headers: {...staticHeaders, ...dynamicHeaders},
      responseType: responseType,
    }
    if (data)
      params.body = JSON.stringify(data)


    return await fetch(url, params)
  }
}