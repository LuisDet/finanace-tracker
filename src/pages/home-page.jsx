import FinanceList from '../components/finance-list'
import { TextHeader } from '../components/text-header'
import { Menu } from '@headlessui/react'
import { useState } from 'react'

import { useAllMoney } from '../store/useAllMoney'

function HomePage () {
  const [coin, setCoin] = useState('RD')
  const [coins, setCoins] = useState(['US', 'EUR'])

  const money = useAllMoney(state => state.money)

  return (
    <div className='flex flex-col gap-4 mt-20 p-4'>
      <div className='flex flex-col items-center gap-2'>
        <TextHeader className='text-white text-3xl'>Monto Total</TextHeader>
        <div className='flex gap-1 text-white text-3xl'>
          <p>${money}.00</p>
          <div className='relative'>
            <Menu>
              <Menu.Button className='underline decoration-2 decoration-dotted text-sky-300 cursor-pointer'>
                {coin}
              </Menu.Button>
              <Menu.Items className='flex flex-col absolute bg-black p-4 rounded gap-2'>
                {coins.map((currentCoin, idx) => (
                  <Menu.Item key={idx}>
                    {({ active }) => (
                      <as
                        className={`${active && 'cursor-pointer'}`}
                        onClick={() => {
                          const c = coins.filter(a => a !== currentCoin)
                          setCoins([...c, coin])
                          setCoin(currentCoin)
                        }}
                      >
                        {currentCoin}
                      </as>
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
  )
}

export default HomePage
