import {SET_CURRENT_USER} from '../actions/types'
import isEmpty from 'lodash/isEmpty'

const initialState = {
	isAuthenticated: false,
	user: {}

}

export default (state = initialState, action = {}) => {
    // console.log(action.type)
    switch (action.type) {
        case SET_CURRENT_USER: 
        	// console.log("MyAction",action)
        	return {
        		isAuthenticated: !isEmpty(action.user),
        		user: action.user
        	}
        default: return state;
    }
}
