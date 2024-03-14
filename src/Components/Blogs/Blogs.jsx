
import { useEffect } from "react";
import { useState } from "react";
import Blog from "./Blog";
import PropTypes from 'prop-types';

const Blogs = ({handlerBookMarks}) => {

    const [blogs, setBlogs] = useState([]);

    useEffect( () => {
        fetch("Blogs.json")
        .then(res => res.json())
        .then(data => setBlogs(data))

    } , []);



    return (
           <div className="flex w-full flex-col gap-5">
                {
                    blogs.map(item => <Blog 
                        key={blogs.id}
                        blog= {item}
                        handlerBookMarks ={handlerBookMarks} > </Blog> )
                }
           </div>
    );
};

Blogs.propTypes = {
    handlerBookMarks: PropTypes.func.isRequired
}

export default Blogs;