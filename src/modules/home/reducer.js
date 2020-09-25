import { Map, fromJS } from 'immutable'

export default function HomeReducer(state = Map(), action) {
	switch (action.type) {

		case 'CREATE_USER_LOADING':
			return state.setIn(['create_user', 'loading'], action.loading).setIn(['create_user', 'error'], false)
		case 'CREATE_USER':
			return state.setIn(['create_user', 'data'], action.data)
				.setIn(['create_user', 'loading'], action.loading).setIn(['create_user', 'error'], false)
		case 'CREATE_USER_ERROR':
			return state.setIn(['create_user', 'data'], action.data)
				.setIn(['create_user', 'loading'], action.loading).setIn(['create_user', 'error'], true)

		default:
			return state
	}

}