import { useState, useEffect } from "react"
import BackButton from "../components/BackButton"
import Spinner from "../components/Spinner"
import axios from 'axios'
import { useNavigate, useParams } from "react-router-dom"
import { useSnackbar } from 'notistack'

const EditBook = () => {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [publishYear, setPublishYear] = useState('')
  const [sinopse, setSinopse] = useState('')
  const [description, setDescription] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const { enqueueSnackbar } = useSnackbar()
  const { id } = useParams()

  useEffect(() => {
    setLoading(true)
    
    axios
      .get(`http://localhost:8000/books/${id}`)
      .then((res) => {
        setAuthor(res.data.author)
        setPublishYear(res.data.publishYear)
        setTitle(res.data.title)
        setLoading(false)
      })
      .catch((error) => {
        setLoading(false)
        alert('An Error happened. Please check console.')
        console.log(error)
      })
  }, [])

  const handleEditBook = () => {
    const data = {
      title,
      author,
      publishYear,
      sinopse,
      description
    }
    setLoading(true)
    axios
      .put(`http://localhost:8000/books/${id}`, data)
      .then(() => {
        setLoading(false)
        enqueueSnackbar("Book Edited Successfully.", { variant: 'info' })
        navigate('/')
      })
      .catch((error) => {
        setLoading(false)
        alert("An Error happened. Please Check console..")
        enqueueSnackbar("Error", { variant: 'error' })
        console.log(error)
      })
  }

  
  return (
    <div className="p-4">
      <BackButton />
      <h1 className="text-3xl my-4">Edit Book</h1>
      {
        loading ? <Spinner /> : ""
      }
      <div className="flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto">
        <div className="my-4">
          <label htmlFor="" className="text-xl mr-4 text-gray-500">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>
        <div className="my-4">
          <label htmlFor="" className="text-xl mr-4 text-gray-500">Author</label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>
        <div className="my-4">
          <label htmlFor="" className="text-xl mr-4 text-gray-500">Publish Year</label>
          <input
            type="number"
            value={publishYear}
            onChange={(e) => setPublishYear(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>
         <div className="my-4">
          <label htmlFor="" className="text-xl mr-4 text-gray-500">Sinopse</label>
          <input
            type="text"
            value={sinopse}
            onChange={(e) => setSinopse(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>
        <div className="my-4">
          <label htmlFor="" className="text-xl mr-4 text-gray-500">Description</label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>

        <button
          onClick={handleEditBook}
          className="p-2 bg-sky-400 m-8"
        >
          Save Edit
        </button>
      </div>
    </div>
  )
}

export default EditBook
