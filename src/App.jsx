
import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Blogs/Bookmarks'
import Header from './Components/Headers/Header'


function App() {

  const [bookmarks, setBookmarks] = useState([]);
  const [readtime, setReadtime] = useState(0);
  const handlerBookMarks = (blog) => {
    // console.log(bookmarks.length);
    const {read_time} = blog;

    const newReadTime = readtime + parseFloat(read_time);
    setReadtime(newReadTime);

    console.log(readtime)

    const newBookMarks = [...bookmarks, blog];
    setBookmarks(newBookMarks);

  }

  return (
    <>
      <div className=''>
          <Header></Header>
      </div>
      <div className=' '>
         <div className='w-[95%] flex gap-5 mx-auto '>
            <Blogs handlerBookMarks={handlerBookMarks} ></Blogs>
            <Bookmarks bookmarks={bookmarks} readtime={readtime} ></Bookmarks>
         </div>
      </div>
    </>
  )
}

export default App
