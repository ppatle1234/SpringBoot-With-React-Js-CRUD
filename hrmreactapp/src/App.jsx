import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import { ShowEmployee } from './components/ShowEmployee'
import { EditEmployee } from './components/EditEmployee'
import { AddEmployee } from './components/AddEmployee'

import 'bootstrap/dist/css/bootstrap.min.css'
import { SignUpEmployee } from './components/SignUpEmployee'
import { SignInEmployee } from './components/SignInEmployee'


function App() {
  
  return(<>
     <Router>
      <Routes>
        <Route path="/" element={<SignUpEmployee />} />
        <Route path="/signin" element={<SignInEmployee />} />

        {/* Main app pages */}
        <Route exact path='/employees'  element={<ShowEmployee />}/>
        <Route exact path='/addemployee' element={<AddEmployee />}/>
        <Route exact path='/edit/:empId' element={<EditEmployee />}/>
        
     
      </Routes>
     </Router>
  </>)

}

export default App
