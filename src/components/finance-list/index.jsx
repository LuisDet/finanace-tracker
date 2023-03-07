import FinanceCard from '../finance-card'

import { useFinanceTransaction } from '../../store/useFinanceTransaction'

function FinanceList () {
  const financeInfo = useFinanceTransaction((state) => (state.financeTransaction))

  return (
    <div className='flex gap-4 flex-col'>
      {financeInfo.map((finance, idx) => (
        <FinanceCard key={idx}
          title={finance.title}
          description={finance.description}
          amount={finance.amount}
        />
      ))}
    </div>
  )
}

export default FinanceList
