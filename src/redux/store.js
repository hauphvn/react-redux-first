import {createStore, combineReducers, applyMiddleware} from "redux";
import todoReducer from './todo'
import thunk from 'redux-thunk'
const reducer = combineReducers({
    todo: todoReducer
})
// function myMiddleWare(store){
// // function currying
//     return function(next) {
//         return function(action){
//
//         }
//     }
// }
const myMiddleWare = store => next => action => {
    console.log('middleware action: ', action)
    console.log('middleware store: ', store.getState())
    // You can next other middleware
    return next(action)
}
// This is middleware to simulation redux-thunk
// const asyncMiddleware = store => next => action => {
//     if(typeof action === 'function'){
//         console.log('asyncMiddleware action:', action)
//         // next is dispatch from todoReducer
//         return action(next)
//     }
//     console.log('asyncMiddleware action not func:', action)
//     return next(action)
// }


export default createStore(
    reducer,
    applyMiddleware(myMiddleWare, thunk)
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
