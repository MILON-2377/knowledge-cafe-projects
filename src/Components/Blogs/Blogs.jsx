import { useEffect } from "react";
import { useState } from "react";
import Blog from "./Blog";

const Blogs = () => {

    const [blogs, setBlogs] = useState([]);

    useEffect( () => {
        fetch("Blogs.json")
        .then(res => res.json())
        .then(data => setBlogs(data))

    } , [])

    return (
        <div>
            {
                blogs.map(item => <Blog key={blogs.id} blog= {item} ></Blog> )
            }
        </div>
    );
};

export default Blogs;