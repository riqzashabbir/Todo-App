import React,{useState} from 'react'
import CreateData from './CreateData'
import ListCard from './ListCard'
import EditUser from './EditUser'

const Crud = () => {
    const usersData = [
		{ id: 1, name: 'Tania', description: 'floppydiskette' },
		{ id: 2, name: 'Craig', description: 'siliconeidolon' },
		{ id: 3, name: 'Ben', description: 'benisphere' },
	]

	const initialFormState = { id: null, name: '', description: '' }

	// Setting state
	const [ users, setUsers ] = useState(usersData)
	const [ currentUser, setCurrentUser ] = useState(initialFormState)
	const [ editing, setEditing ] = useState(false)

	// CRUD operations
	const addUser = user => {
        console.log('clicked');
		user.id = users.length + 1
		setUsers([ ...users, user ])
        console.log("user", user);
	}

	const deleteUser = id => {
		setEditing(false)

		setUsers(users.filter(user => user.id !== id))
	}

	const updateUser = (id, updatedUser) => {
		setEditing(false)

		setUsers(users.map(user => (user.id === id ? updatedUser : user)))
	}

	const editRow = user => {
		setEditing(true)

		setCurrentUser({ id: user.id, name: user.name, description: user.description })
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
								currentUser={currentUser}
								updateUser={updateUser}
							/>
						</>
					) : (
						<>
							<h2>Add Task</h2>
							<CreateData addUser={addUser} />
						</>
					)}
				</div>
				<div className="flex-large">
					<h2>View Tasks</h2>
					<ListCard users={users} editRow={editRow} deleteUser={deleteUser} />
				</div>
			</div>
		</div>
	)
}
export default Crud
