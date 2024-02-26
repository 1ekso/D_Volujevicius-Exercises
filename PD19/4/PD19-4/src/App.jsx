import { useState } from 'react'
import './App.css'

const users = [
  { firstName: "Ambra", id: 1 },
  { firstName: "Robka", id: 2 },
  { firstName: "Tiesa", id: 3 },
  { firstName: "Liuksikas", id: 4 },
  { firstName: "Davidas", id: 5 },
  { firstName: "Einoras", id: 6 },
  { firstName: "Daniel", id: 7 },
  { firstName: "Erla", id: 8 },
  { firstName: "Egisss", id: 9 },
  { firstName: "Aure", id: 10 }
]

function App() {
  const [searchItem, setSearchItem] = useState('')
  const [filteredUsers, setFilteredUsers] = useState(users)

  const handleInputChange = (e) => { 
    const searchTerm = e.target.value;
    setSearchItem(searchTerm)

    const filteredItems = users.filter((user) =>
    user.firstName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilteredUsers(filteredItems);
  }

  return (
    <>
      <input
        type="text"
        value={searchItem}
        onChange={handleInputChange}
        placeholder='Type to search'
      />
      <ul>
        {filteredUsers.map(user => <li key={user.id}>{user.firstName}</li>)}
      </ul>
    </>
  )
}

export default App