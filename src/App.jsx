import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import './index.css';
import Card from './Card';
import DesktopTable from './DesktopTable';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 className='text-red-500 font-bold text-2xl'> SuperReply AI</h1>
    <div className='block sm:hidden'>
      <Card />
    </div>
    <div className=' hidden sm:block'>
      <DesktopTable />
    </div>
    </>
  )
}

export default App
