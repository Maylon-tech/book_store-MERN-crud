import { AiOutlineClose } from 'react-icons/ai'
import { PiBookOpenTextLight } from 'react-icons/pi'
import { BiUserCircle } from 'react-icons/bi'

const BookModal = ({ book, onClose }) => {
  console.log(book)
  return (
    <div 
        className='fixed bg-black/50 top-0 left-0 bottom-0 right-0 z-50 flex justify-center items-center'
        onClick={onClose}
    >
      <div 
        onClick={(event) => event.stopPropagation()}
        className="w-[600px] max-w-full h-[400px] bg-white rounded-xl p-4 flex flex-col relative"
      >
        <AiOutlineClose 
            className='absolute right-3 top-3 text-3xl text-red-600 cursor-pointer'
            onClick={onClose}
        />
        
        <div className="flex justify-between items-center">
          <h4 className="my-2 text-gray-500 text-sm">{book._id}</h4>
          <h2 className="w-fit px-4 py-1 mr-18 bg-red-400 rounded-sm">
            { book.publishYear }
          </h2>
        </div>
        
        <div className="flex justify-start items-center gap-x-2">
            <PiBookOpenTextLight className='text-red-300 text-2xl' />
            <h2 className="my-1">{ book.title }</h2>
        </div>

        <div className="flex justify-start items-center gap-x-2">
            <BiUserCircle className='text-red-300 text-2xl' />
            <h2 className="my-1">{ book.author }</h2>
        </div>
        
        <p className="mt-4">{book.sinopse}</p>
        <p className="my-2">
            {book.description}
        </p>
      </div>
    </div>
  )
}

export default BookModal
