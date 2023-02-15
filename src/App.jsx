import './App.css'
import FinanceList from './components/finance-list'
import { TextHeader } from './components/text-header'
import { Menu } from '@headlessui/react'
import { useState } from 'react'

function App() {
  const [coin, setCoin] = useState('RD')
  const [coins, setCoins] = useState(['US', 'EUR'])

  return (
    <div className='w-full h-full bg-gray-800'>
      <div className='flex gap-4 justify-between items-center h-full w-full flex-col'>
        <div className='flex flex-col gap-4 mt-20'>
          <div className='flex flex-col items-center gap-2'>
            <TextHeader className='text-white text-3xl'>Monto Total</TextHeader>
            <div className='flex gap-1 text-white text-3xl'>
              <p>$36,000.00</p>
              <div className='relative'>
                <Menu>
                  <Menu.Button className='underline decoration-2 decoration-dotted text-sky-300 cursor-pointer'>
                    {coin}
                  </Menu.Button>
                  <Menu.Items className='flex flex-col absolute bg-black p-4 rounded gap-2'>
                    {coins.map(currentCoin => (
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            className={`${active && 'cursor-pointer'}`}
                            onClick={() => {
                              const c = coins.filter(a => a !== currentCoin)
                              setCoins([...c, coin])
                              setCoin(currentCoin)
                            }}
                          >
                            {currentCoin}
                          </a>
                        )}
                      </Menu.Item>
                    ))}
                  </Menu.Items>
                </Menu>
              </div>
            </div>
          </div>
          <div>
            <p className='text-white text-lg mb-2 '>Hoy</p>
            <FinanceList />
          </div>
        </div>
        <footer className='w-full bg-slate-700 p-6 sticky top-0 bottom-0'>
          <div className='flex justify-between items-center text-white'>
            <p>HOME</p>
            <p>HOME</p>
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
