import './App.css'
import HomePage from './pages/home-page'
import CreatePage from './pages/create-page'
import { Route, Link } from 'wouter'
function App () {
  return (
    <div className='w-full h-full'>
      <div className='grid grid-rows-[1fr_] gap-4 justify-between h-screen w-full'>
        <Route path='/'>
            <HomePage/>
          </Route>
          <Route path='/create'>
            <CreatePage/>
          </Route>
        <footer className='w-full bg-slate-700 p-6 sticky top-0 bottom-0'>
          <div className='flex justify-between items-center text-white'>
            <Link to='/'>Home</Link>
            <Link to='/create'>Create</Link>
            <p>HOME</p>
            <p>HOME</p>
            <p>HOME</p>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default App
