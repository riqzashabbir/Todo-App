import React,{useState, useEffect} from 'react'
import Amplify, { API, graphqlOperation } from 'aws-amplify'
import { createTodo, updateTodo, deleteTodo} from '../graphql/mutations'
import { listTodos } from '../graphql/queries'
import CreateData from './CreateData'
import ListCard from './ListCard'
import EditUser from './EditUser'
import awsExports from "../aws-exports";

Amplify.configure(awsExports);

const initialState = { name: '', description: '' }

const Crud = () => {
	const [formState, setFormState] = useState(initialState)
  	const [todos, setTodos] = useState([])
	  const [ editing, setEditing ] = useState(false)

	  useEffect(() => {
		fetchTodos()
	  }, [])
	
	  const fetchTodos = async() =>{
		try {
		  const todoData = await API.graphql(graphqlOperation(listTodos))
		  const todos = todoData.data.listTodos.items
		  console.log("todosss",todos);
		  setTodos(todos)
		} catch (err) { console.log('error fetching todos') }
	  }
	
	  const editRow = (user) => {
		setEditing(true)
		setFormState({ id: user.id, name: user.name, description: user.description })
	} 

	  const addTodo = async(tasks) => {
		try {
		  const todo = { ...tasks }
		  setTodos([...todos, todo])
		  setFormState(initialState)
		  await API.graphql(graphqlOperation(createTodo, {input: tasks}))
		} catch (err) {
		  console.log('error creating task:', err)
		}
	  }

	  const updateTask = async(taskId, task) => {
		  try{
			  setFormState(initialState)
			  await API.graphql({ query: updateTodo, variables: {input: task}});
			  setEditing(false)
			  setTodos(todos.map(user => (user.id === taskId ? task : user)))
		  }
		  catch(err){
			  console.log('error updating task:', err?.errors[0]?.message);
		  }

	}

	  const deleteTask = async(taskId) => {
		  try{
			console.log("taskId",taskId);
			const id = {
				id: taskId
			}
			const resp = await API.graphql({ query: deleteTodo, variables: {input:  id}});
			setEditing(false)
			setTodos(todos.filter(todo => todo.id !== taskId))
			console.log("resp", resp);
		  }
		catch(err){
			console.log('error deleting task:',  err?.errors[0]?.message);
}
	  }

	 
    
	return (
		<div className="container">
			<div className="flex-row">
				<div className="flex-large">
					{editing ? (
						<>
                        <h2>Edit Tasks</h2>
						<EditUser
								editing={editing}
								setEditing={setEditing}
								currentUser={formState}
								updateUser={updateTask}
							/>
						</>
					) : (
						<>
							<h2>Add Task</h2>
							<CreateData addUser={addTodo} />
						</>
					)}
				</div>
				<div className="flex-large">
					<h2>View Tasks</h2>
				 <ListCard users={todos} editRow={editRow} deleteUser={deleteTask} /> 
				</div>
			</div>
		</div>
	)
}
export default Crud
