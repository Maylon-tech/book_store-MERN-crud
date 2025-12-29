import { useState } from "react"
import BackButton from "../components/BackButton"
import Spinner from "../components/Spinner"
import axios from 'axios'
import { useNavigate } from "react-router-dom"

const CreateBooks = () => {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [publishYear, setPublishYear] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const handleSaveBook = () => {
    const data = {
      title,
      author,
      publishYear
    }
    setLoading(true)
    axios
      .post('http://localhost:8000/books', data)
      .then(() => {
        setLoading(false)
        navigate('/')
      })
      .catch((error) => {
        setLoading(false)
        alert("An Error happened. Please Check console..")
        console.log(error)
      })
  }

  
  return (
    <div className="p-4">
      <BackButton />
      <h1 className="text-3xl my-4">Create Book</h1>
      {
        loading ? <Spinner /> : ""
      }
      <div className="flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto">
        <div className="my-4">
          <label htmlFor="" className="text-xl mr-4 text-gray-500"></label>
        </div>
      </div>
    </div>
  )
}

export default CreateBooks
