function FinanceCard({ title, description, amount }) {
  return (
    <div className='flex gap-8 items-center justify-between bg-gray-700 p-4 rounded'>
      <div className=''>
        <p className='text-white'>{title}</p>
        <p className='text-stone-400'>{description}</p>
      </div>
      <p className='text-green-400 text-3xl'>{amount}$</p>
    </div>
  )
}

export default FinanceCard
