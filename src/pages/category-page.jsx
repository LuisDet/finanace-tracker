import { TextHeader } from '../components/text-header'
import { useRef } from 'react'

function CategoryPage () {
  const modal = useRef()

  const handleModal = () => {
    modal.current.showModal()
  }
  return <div className="">
    <dialog className='backdrop:bg-gray-800 backdrop:opacity-70 p-0 bg-transparent' ref={modal} >
        <div className='p-6 rounded-2xl bg-gray-600 border-white border-2'>
            <p className=' text-white font-bold txt-2xl'>Quieres editar el documento?</p>
        </div>
    </dialog>
    <TextHeader className='text-white'>Category</TextHeader>
    <div className='flex items-center justify-center mb-8 h-full gap-2'>
        <input type="text" className='bg-gray-700 w-full p-3 text-white text-xl rounded border border-gray-500'/>
        <button className='text-green-400 bg-gray-700 h-full px-4 py-3 text-xl rounded border border-gray-500' >Agregar</button>
    </div>
    <div className='flex flex-col gap-4 w-full'>
        <div className='flex justify-between items-center p-4 bg-gray-700 rounded border border-gray-500 w-full'>
            <p className='text-2xl text-white'>Gusto culposo</p>
            <div className='flex gap-4 items-center'>
                <button className='text-green-400' onClick={handleModal}>Edit</button>
                <button className='text-red-400'>Delete</button>
            </div>
        </div>
        <div className='flex justify-between items-center p-4 bg-gray-700 rounded border border-gray-500 w-full'>
            <p className='text-2xl text-white'>Para beber</p>
            <div className='flex gap-4 items-center'>
                <button className='text-green-400'>Edit</button>
                <button className='text-red-400'>Delete</button>
            </div>
        </div>
        <div className='flex justify-between items-center p-4 bg-gray-700 rounded border border-gray-500 w-full'>
            <p className='text-2xl text-white'>Para comer</p>
            <div className='flex gap-4 items-center'>
                <button className='text-green-400'>Edit</button>
                <button className='text-red-400'>Delete</button>
            </div>
        </div>
    </div>
  </div>
}

export default CategoryPage
