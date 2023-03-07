function FinanceCard ({ title, description, amount }) {
  return (
    <div className='flex gap-8 items-center justify-between bg-gray-700 p-4 rounded border border-gray-500'>
      <div className='flex flex-col gap-2'>
        <p className='text-white text-xl'>{title}</p>
        <p className='text-stone-300 text-base'>{description}</p>
      </div>
      <p className='text-green-400 text-2xl'>{amount}$</p>
    </div>
  )
}

export default FinanceCard
