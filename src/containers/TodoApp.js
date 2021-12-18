// This file will connect todoApp component with  todoStore
import {connect} from "react-redux";
import TodoApp from '../components/TodoApp'
import {addTodo, setTodo, fetchTodo} from '../redux/todo'
// mapStateToProps: this component is rendered based on which state
const mapStateToProps = (state) => ({
        todos: state.todo.items
})
// When clicked add button will dispatch a action to redux store
// so we need bind that action
const mapActionToProps = dispatch => ({
    addTodo: (text) => dispatch(addTodo(text)),
    setTodo: (data) => dispatch(setTodo(data)),
    fetchTodo: dispatch(fetchTodo())
})
//This connect will return a component that a wrapper todoApp,
// pass 2 params to TodoApp are mapStateToProps and mapActionToProps
export default connect(mapStateToProps, mapActionToProps)(TodoApp)
