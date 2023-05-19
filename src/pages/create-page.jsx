import { useFinanceMovement } from '../store/useFinanceMovement'
import { shallow } from 'zustand/shallow'
import { useFinanceTransaction } from '../store/useFinanceTransaction'
import { useCategoriesStore } from '../store/useCategories'
import { useLocation } from 'wouter'

const SET_LOCATION = 1

function CreatePage () {
  const location = useLocation()
  const data = useFinanceMovement(state => ({
    amount: state.amount,
    category: state.category,
    description: state.description,
    badge: state.badge
  }), shallow)

  const methods = useFinanceMovement(state => ({
    setAmount: state.setAmount,
    setCategory: state.setCategory,
    setDescription: state.setDescription,
    setBadge: state.setBadge,
    resetData: state.resetData
  }), shallow)

  const categoryData = useCategoriesStore(state => ({
    categories: state.categories
  }), shallow)

  const setFinanceTransaction = useFinanceTransaction(state => state.setFinanceTransaction)

  const handlAmount = (e) => {
    const { value } = e.target
    methods.setAmount(value)
  }

  const handleCategory = (e) => {
    const { value } = e.target
    methods.setCategory(value)
  }

  const handleDescription = (e) => {
    const { value } = e.target
    methods.setDescription(value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (data.amount === 0 || !data.category || !data.description) return

    setFinanceTransaction({
      amount: data.amount,
      title: data.category,
      description: data.description
    })

    methods.resetData()

    location[SET_LOCATION]('/')
  }

  const handleCancel = (e) => {
    e.preventDefault()

    methods.resetData()

    location[SET_LOCATION]('/')
  }

  const handleOptionsBadge = (e) => {
    methods.setBadge(e.target.value)
  }

  return <div className="w-full">
        <form action="" className="flex flex-col w-full gap-6" >
            <div className="flex flex-col gap-2">
                <label htmlFor="" className="text-white font-bold text-lg">Monto</label>
                <div className="flex">
                    <input type="number" value={data.amount} className="w-full p-3 bg-slate-600 text-white rounded-l outline-none " onChange={handlAmount}/>
                    <select name="coin" id="" className="bg-slate-700 p-4 text-white rounded-r" onInput= {(e) => { handleOptionsBadge(e) } }>
                        <option value="RD">RD</option>
                        <option value="US">US</option>
                        <option value="EU">EU</option>
                    </select>
                </div>
            </div>
            <div className="flex flex-col">
                <label htmlFor="" className="text-white font-bold text-lg">Categoria</label>
                    <select name="coin" id="" className="bg-slate-700 p-4 text-white rounded-r" onInput= {(e) => { handleOptionsBadge(e) } }>
                    {
                      categoryData.categories.map(category => (
                        <option key={category.id}
                          value={category.title}>
                              {category.title}
                        </option>))
                    }
                </select>
                {/* <input type="text" placeholder='Category' value={data.category} className="w-full p-4 rounded bg-slate-600 text-white outline-none" onChange={handleCategory}/> */}
            </div>
            <div className="flex flex-col">
                <label htmlFor="" className="text-white font-bold text-lg">Descripcion</label>
                <textarea type="text" placeholder='Description' value={data.description} className="w-full p-4 rounded bg-slate-600 text-white outline-none" onChange={handleDescription}/>
            </div>
            <button className="bg-green-400 text-black w-full rounded p-4 text-lg font-bold" onClick={handleSubmit}>AGREGAR</button>
            <button className="bg-red-400 text-black w-full rounded p-4 text-lg font-bold" onClick={handleCancel}>CANCELAR</button>
        </form>
    </div>
}

export default CreatePage
