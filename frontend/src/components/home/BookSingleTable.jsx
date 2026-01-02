import { useState } from 'react'
import { Link } from 'react-router-dom'

import { BiUserCircle, BiShow } from 'react-icons/bi'
import { AiOutlineEdit } from 'react-icons/ai'
import { BsInfoCircle } from 'react-icons/bs'
import { MdOutlineDelete } from 'react-icons/md'
import BookModal from './BookModal'


const BookSingleTable = ({ book }) => {
     const [showModal, setShowModal] = useState(false)

  return (
    <>
        <tbody>
            <tr key={book._id} className='h-8 '>
                <td className='border border-slate-700 rounded-md text-center'>
                    {book._id}
                </td>
                <td className='border border-slate-700 rounded-md text-center'>
                    {book.title}
                </td>
                <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
                    {book.author}
                </td>
                <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
                    {book.publishYear}
                </td>
                <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
                    <div className="flex items-center justify-center gap-4">
                        <BiShow 
                            className='text-3xl text-blue-600 hover:text-black curosr-pointer'
                            onClick={() => setShowModal(true)}
                        />
                        <Link to={`/books/details/${book._id}`}>
                            <BsInfoCircle className='text-2xl text-green-800' />
                        </Link>
                        <Link to={`/books/edit/${book._id}`}>
                            <AiOutlineEdit className='text-2xl text-green-800' />
                        </Link>
                        <Link to={`/books/delete/${book._id}`}>
                            <MdOutlineDelete className='text-2xl text-green-800' />
                        </Link>
                    </div>
                </td>
            </tr>
        </tbody>            
        {
            showModal && ( <BookModal book={book} onClose={() => setShowModal(false)} /> )
        }
    </>
  )
}

export default BookSingleTable
