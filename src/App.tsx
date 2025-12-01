import { useEffect, useState } from 'react'
import './App.css'
import Home from './components/Home/Home'
import { Sidebar } from './components/SideBar/SideBar'
import { PatientsContextProvider } from './hooks/PatientsContext'


interface Patient {
  avatar: string,
  name: string,
  id: string,
  description: string,
  website: string,
  createdAt: string

}


function App() {

  const [patients, setPatients] = useState<Patient[]>([])


  useEffect(() => {

    const fetchPatients = async () => {
      const response = await fetch('https://63bedcf7f5cfc0949b634fc8.mockapi.io/users')
      const data = await response.json()
      setPatients(data)
    }

    fetchPatients()
    console.log("alo", patients)


  }, [])


  console.log("alo", patients)
  return (


    <PatientsContextProvider>

      <div className='container'>
        <Sidebar />

        <div className="main">
          <Home />
        </div>

      </div>

    </PatientsContextProvider>

  )
}

export default App
