import { useState } from 'react'
import { TextHeader } from '../components/text-header'
import CategoryLIst from '../components/categories/category-list'
import { useCategoriesStore } from '../store/useCategories'


function CategoryPage () {
    const [category, setCategory ] = useState('')
    const setCategoryStore = useCategoriesStore(state => state.setCategory)

    const handleCategory = (e) => {
        console.log(e.target)
        setCategory(e.target.value)
    }

    const handleSubmitCategory = (e) => {
        e.preventDefault()
        console.log(category)
        setCategoryStore({title: category, id: +Date.now()  })
    }

   return <div className="">
    <TextHeader className='text-white'>Category</TextHeader>
    <div className='flex items-center justify-center mb-8 h-full gap-2'>
        <input type="text" className='bg-gray-700 w-full p-3 text-white text-xl rounded border border-gray-500' value={category} onInput={(e) => {handleCategory(e)}}/>
        <button className='text-green-400 bg-gray-700 h-full px-4 py-3 text-xl rounded border border-gray-500'  onClick={handleSubmitCategory}>Agregar</button>
    </div>
   <CategoryLIst/>
  </div>
}

export default CategoryPage
