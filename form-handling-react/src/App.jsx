import React from 'react';
import RegistrationForm from './components/RegistrationForm';
import FormikForm from './components/FormikForm';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      <RegistrationForm />
      <hr />
      <FormikForm />
    </div>
    </>
  )
}

export default App
