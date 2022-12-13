import { useQuery, useMutation } from '@tanstack/react-query'
import { DefaultResponse } from '../axios/axios'

import api from '../axios/axios'

export interface User {
  id: number
  name: string
  email: string
}

export const login = (email: string, password: string) => {
  return api.get<DefaultResponse<User>>(`/auth/login`, { email, password })
}

const useAuthQuery = () => {
  return []
}
export default useAuthQuery
