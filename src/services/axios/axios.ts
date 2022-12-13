import axios from 'axios'

export interface DefaultResponse<T> {
  success: boolean
  code: number
  message: string
  data: T
}

const axiosClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
})

axiosClient.interceptors.request.use(async (config) => {
  // Handle token here ...
  return config
})

axiosClient.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    console.log(error)
    console.log('error.response: ', error.response)

    if ([401].includes(error.response.status)) {
      // return to home page
    }
  }
)

const get = <Res>(url: string, params?: any, customheader?: any): Promise<Res> => {
  return axiosClient.get(url, { params, headers: customheader })
}

const api = { get }

export default api
