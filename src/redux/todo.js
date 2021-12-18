import axios from "axios";

const initialState = {
    items: []
}
const ADD_TODO = 'ADD_TODO'
const SET_TODO = 'SET_TODO'

const addTodo = (text) => ({
    type: ADD_TODO,
    payload: text
})
const setTodo = (data) => ({
    type: SET_TODO,
    payload: data
})

const fetchTodo = () => async (dispatch) =>{
    // Instead of return a object such as setTodo or addTodo that return a action
    // with param is  a dispatch () => async (dispatch), but this is illegal in redux,
    // so we will use middle to resolve
        const res = await axios.get('https://jsonplaceholder.typicode.com/todos')
        dispatch(setTodo(res.data))
}

const reducer = (state = initialState, action) => {
    console.log('action: ', action)
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                items: [...state.items, action.payload]
            }
        case SET_TODO:
            return {
                ...state,
                items: action.payload
            }
        default:
            return state
    }
}
export {addTodo, setTodo, fetchTodo}
export default reducer
