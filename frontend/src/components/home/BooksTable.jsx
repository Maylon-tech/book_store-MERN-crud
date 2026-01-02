import BookSingleTable from './BookSingleTable'

const BooksTable = ({ books }) => {

  return (
    <table className="w-full border-separate border-spacing-2">
        <thead>
            <tr>
                <th className='border border-slate-600 rounded-md'>No</th>
                <th className='border border-slate-600 rounded-md'>Title</th>
                <th className='border border-slate-600 rounded-md max-md:hidden'>
                Author
                </th>
                <th className='border border-slate-600 rounded-md max-md:hidden'>
                Publish year
                </th>
                <th className='border border-slate-600 rounded-md'>Operations</th>
            </tr>
        </thead>
        {
            books.map((item) => (
                <BookSingleTable key={item._id} book={item} />
            ))
        }
    </table>
  )
}

export default BooksTable