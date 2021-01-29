import axios from 'axios'

export const getValidation = async () => {
  const response = await axios.get('https://complimentr.com/api')
  return response.data.compliment
}