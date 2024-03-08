import { errorMessages } from './errorMessage'

export function handleError(error) {
    if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        const status = error.response.status
        const message = errorMessages[status] || 'Something went wrong'
        throw new Error(message)
    } else if (error.request) {
        // The request was made but no response was received
        return 'No response from the server'
    } else {
        // Something happened in setting up the request that triggered an Error
        return 'Something went wrong'
    }
}
