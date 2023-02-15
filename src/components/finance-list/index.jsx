import FinanceCard from '../finance-card'

const financeInfo = [
  {
    title: 'Hola',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, tempore.',
    amount: 300
  },
  {
    title: 'Hola',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, tempore.',
    amount: 300
  },
  {
    title: 'Hola',
    description: 'Lorem ipsum dolor sit amet consectetur ',
    amount: 300
  },
  {
    title: 'Hola',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, tempore.',
    amount: 300
  },
  {
    title: 'Hola',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, tempore.',
    amount: 300
  },
  {
    title: 'Hola',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, tempore.',
    amount: 300
  },
  {
    title: 'Hola',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, tempore.',
    amount: 300
  },
  {
    title: 'Hola',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, tempore.',
    amount: 300
  },
  {
    title: 'Hola',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, tempore.',
    amount: 300
  },
  {
    title: 'Hola',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, tempore.',
    amount: 300
  },
  {
    title: 'Hola',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, tempore.',
    amount: 300
  },
  {
    title: 'Hola',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, tempore.',
    amount: 300
  },
  {
    title: 'Hola',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, tempore.',
    amount: 300
  },
  {
    title: 'Hola',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, tempore.',
    amount: 300
  },
  {
    title: 'Hola',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, tempore.',
    amount: 300
  },
  {
    title: 'Hola',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, tempore.',
    amount: 300
  },
  {
    title: 'Hola',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, tempore.',
    amount: 300
  },
  {
    title: 'Hola',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, tempore.',
    amount: 300
  },
  {
    title: 'Hola',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, tempore.',
    amount: 300
  },
  {
    title: 'Hola',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, tempore.',
    amount: 300
  },
  {
    title: 'Hola',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, tempore.',
    amount: 300
  },
  {
    title: 'Hola',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, tempore.',
    amount: 300
  },
  {
    title: 'Hola',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, tempore.',
    amount: 300
  },
  {
    title: 'Hola',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, tempore.',
    amount: 300
  },
  {
    title: 'Hola',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, tempore.',
    amount: 300
  }
]

function FinanceList() {
  return (
    <div className='flex gap-2 flex-col'>
      {financeInfo.map(finance => (
        <FinanceCard
          title={finance.title}
          description={finance.description}
          amount={finance.amount}
        />
      ))}
    </div>
  )
}

export default FinanceList
