import { create } from 'zustand'

const useAllMoney = create((set) => ({
  money: 1000,
  increaseMoney: (moreMoney) => set((state) => ({ money: state.money + moreMoney }))
}))

export { useAllMoney }
