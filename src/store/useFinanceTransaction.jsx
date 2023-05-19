import { create } from 'zustand'

const useFinanceTransaction = create((set) => ({
  financeTransaction: [
    {
      title: 'Hola',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, tempore.',
      amount: 1300000
    }, {
      title: 'Hola',
      description: 'Lore  wm ipsum dolor sit amet consectetur adipisicing elit. Earum, tempore.',
      amount: 300
    }
  ],
  setFinanceTransaction: (newTransaction) => set(state => {
    console.log(newTransaction)
    return { financeTransaction: [...state.financeTransaction, newTransaction] }
  })
}))

export { useFinanceTransaction }
