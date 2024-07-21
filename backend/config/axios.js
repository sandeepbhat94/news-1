import axios from "axios";


// axios global values
// axios.defaults.baseURL = 'http://localhost:3002/api';

// Single Instance can create more if required
var axiosClient;
function axiosConfigure(options) {  
  const { firebaseToken } = options || {};
  axiosClient = axios.create({
    baseURL: window.location.href.includes("localhost")
      ? "http://localhost:3002/api"
      : nextConfig.apiBase,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",      
    },
    timeout: 20000,
    withCredentials: false,
  });
}

export function getRequest(URL) {
  return new Promise((resolve, reject) => {
    axiosConfigure();
    return axiosClient
      .get(`/${URL}`)
      .then((response) => resolve(response?.data))
      .catch(({ response }) => reject(response?.data));
  });
}

export function postRequest(URL, payload, options) {
  return new Promise((resolve, reject) => {
    axiosConfigure(options);
    return axiosClient
      .post(`/${URL}`, payload)
      .then((response) => {
        resolve(response?.data);
      })
      .catch(({ response }) => reject(response?.data));
  });
}
export function putRequest(URL, payload, options = {}) {
  console.log(URL, payload)
  return new Promise((resolve, reject) => {
    axiosConfigure(options);
    return axiosClient
      .put(URL, payload)
      .then((response) => {
        resolve(response?.data);
      })
      .catch(({ response }) => { console.log(response); reject(response?.data || response) });
  });
}

export function patchRequest(URL, payload, options) {
  return new Promise((resolve, reject) => {
    axiosConfigure(options);
    return axiosClient
      .patch(`/${URL}`, payload)
      .then((response) => {
        resolve(response?.data);
      })
      .catch(({ response }) => reject(response?.data));
  });
}

export function deleteRequest(URL, payload, options) {
  return new Promise((resolve, reject) => {
    axiosConfigure(options);
    return axiosClient
      .delete(URL)
      .then((response) => {
        resolve(response?.data);
      })
      .catch(({ response }) => reject(response?.data));
  });
}


export const plainPutRequest = (url, body) => {
  return axios.put(url, body)
}
// @todo
// axios interceptors logic can used to intercept request and response

// axios.interceptors.request.use(function (request) {
//    request.headers['Content-Type'] = 'multipart/form-data';
//    return request;
// }, null, { synchronous: true });

// axios.interceptors.response.use(function (response) {
//    //Dispatch any action on success
//    return response;
// }, function (error) {
//    if (error.response.status === 401) {
//       //Add Logic to
//       //1. Redirect to login page or
//       //2. Request refresh token
//    }
//    return Promise.reject(error);
// });
