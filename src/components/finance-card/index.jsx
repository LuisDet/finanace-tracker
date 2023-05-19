import { BsCurrencyExchange, BsBookmarkFill } from 'react-icons/bs'

function FinanceCard ({ title, description, amount }) {
  return (
    <div className='flex gap-8 items-center justify-between bg-gray-700 p-4 rounded border border-gray-500'>
      <div className='flex flex-col gap-2'>
        <p className='text-white text-xl'>{title}</p>
        <div className='flex gap-4 text-white text-xs items-center'>
          <p className='flex gap-1 items-center'><BsBookmarkFill/> Gastos / Casa</p>
          <p className='flex gap-1 items-center'><BsCurrencyExchange/> DOP</p>
        </div>
        {/* <p className='text-stone-300 text-base'>{description}</p> */}
      </div>
      <p className='text-green-400 text-2xl'>{new Intl.NumberFormat('en-EN').format(amount)} $</p>
    </div>
  )
}

export default FinanceCard
