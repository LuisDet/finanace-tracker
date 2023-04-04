import { create } from 'zustand'

const useCategoriesStore = create((set) => ({
  categories: [{id: 1, title: 'Gustino'}],
  setCategory: (currentCategory) => set(state => {
    console.log(currentCategory )

    return (
      {categories: [...state.categories, currentCategory]}
    )
  }),
  deleteCategory: (categoryId) => set(state => {
    const newCategories = state.categories.filter( category => category.id !== categoryId)
    return {categories : newCategories}
  })
}))

export { useCategoriesStore }
