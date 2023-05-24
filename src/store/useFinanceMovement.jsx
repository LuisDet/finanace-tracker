import { create } from 'zustand'

const useFinanceMovement = create((set) => ({
  amount: 0,
  badge: '',
  category: '',
  description: '',
  operation: 1,
  setAmount: (currentAmount) => set({ amount: Number(currentAmount).toString() }),
  setDescription: (currentDescription) => set({ description: currentDescription }),
  setCategory: (currentCategory) => set({ category: currentCategory }),
  setBadge: (currentBadge) => set({ badge: currentBadge }),
  setOperation: (currentOperation) => set({ operation: currentOperation }),
  resetData: () => set({ amount: 0, category: '', description: '', badge: '', operation: 1 })
}))

export { useFinanceMovement }
