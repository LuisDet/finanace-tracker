import { useCategoriesStore } from '../../store/useCategories'

function CategoryLIst () {
  const categories = useCategoriesStore(state => (state.categories))

  return  (<div className='flex flex-col gap-4 w-full'>
    {categories.map( category =>(
    <div key={category.id} className='flex justify-between items-center p-4 bg-gray-700 rounded border border-gray-500 w-full'>
      <p className='text-2xl text-white'>{category.title}</p>
      <div className='flex gap-4 items-center'>
          <button className='text-green-400'>Edit</button>
          <button className='text-red-400'>Delete</button>
      </div>
    </div>
  ))}
</div>)
}

export default CategoryLIst