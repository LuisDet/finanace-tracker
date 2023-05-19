import { create } from 'zustand'

const useFinanceMovement = create((set) => ({
  amount: 0,
  badge: '',
  category: '',
  description: '',
  setAmount: (currentAmount) => set({ amount: Number(currentAmount).toString() }),
  setDescription: (currentDescription) => set({ description: currentDescription }),
  setCategory: (currentCategory) => set({ category: currentCategory }),
  setBadge: (currentBadge) => set({ category: currentBadge }),
  resetData: () => set({ amount: 0, category: '', description: '', badge: '' })
}))

export { useFinanceMovement }
