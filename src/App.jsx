import './App.css'
import { HomePage, CreatePage, CategoryPage } from './pages'
import { Route, Link } from 'wouter'
import { BsFillHouseFill, BsPlus, BsJournalPlus } from 'react-icons/bs'

function App () {
  return (
    <div className='w-full h-full'>
      <div className='grid grid-rows-[1fr] gap-4 h-screen w-full '>
        <div className='p-4'>
        <Route path='/'>
            <HomePage/>
          </Route>
          <Route path='/create'>
            <CreatePage/>
          </Route>
          <Route path='/category'>
            <CategoryPage/>
          </Route>
        </div>
        <footer className='w-full bg-slate-700 p-6 sticky top-0 bottom-0'>
          <div className='flex justify-between items-center text-white'>
            <Link to='/'><BsFillHouseFill className='cursor-pointer'/></Link>
            <Link to='/create'><BsPlus className='w-8 h-8 cursor-pointer'/></Link>
            <Link to='/category'><BsJournalPlus className='cursor-pointer'/></Link>
            <p>HOME</p>on
            <p>HOME</p>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default App
