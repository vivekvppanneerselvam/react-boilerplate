import axios from 'axios'
import { history } from '../../app/helpers'

export const createUser = (payload) => {
    return dispatch => {
        dispatch({ type: 'CREATE_USER_LOADING', loading: true })
        return axios.post('/createusers', payload).then((res) => {
            return dispatch({ type: 'CREATE_USER', data: res.data, loading: false })
        }).catch(error => {
            dispatch({ type: 'CREATE_USER_ERROR', data: error, loading: false, error:true })
        })
    }
}

