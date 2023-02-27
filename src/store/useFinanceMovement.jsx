import { create } from 'zustand'

const useFinanceMovement = create((set) => ({
  amount: 0,
  category: '',
  description: '',
  setAmount: (currentAmount) => set({ amount: Number(currentAmount).toString() }),
  setDescription: (currentDescription) => set({ description: currentDescription }),
  setCategory: (currentCategory) => set({ category: currentCategory }),
  resetData: () => set({ amount: 0, category: '', description: '' })
}))

export { useFinanceMovement }
