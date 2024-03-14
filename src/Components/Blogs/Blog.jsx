
import { CiBookmark } from "react-icons/ci";
import PropTypes from 'prop-types';

const Blog = ({blog, handlerBookMarks}) => {
    // console.log(blog)
    const {author, cover_img, profile_img, release_date, read_time, description, hash_tag } = blog;
    return (
        <div className=' w-full wflex gap-6'>
            <div className='w-full flex flex-col gap-5'>
                <div className='rounded-xl h-[400px]'>
                        <img className='rounded-xl w-full h-full' src={cover_img} alt="" />
                </div>

                <div className='flex  items-center gap-4 justify-between'>
                        <div className='flex  items-center gap-4'>
                            <div className='w-20 h-20 rounded-full'>
                                <img className='w-full h-full rounded-full' src={profile_img} alt="" />
                            </div>
                            <div>
                                <h4 className="text-2xl capitalize font-bold ">{author}</h4>
                                <p className=' text-xl '>{release_date}</p>
                            </div>
                        </div>
                        <div className='flex items-center gap-4'>
                            <p className='text-xl text-gray-500 '>{read_time} min read</p>
                            <button onClick={() => handlerBookMarks(blog) } className='text-2xl hover:border-2 border-blue-400 hover:rounded-md hover:p-2 '> <CiBookmark></CiBookmark> </button>
                        </div>
                </div>
                <div className='flex flex-col gap-5 '>
                    <p className='text-2xl text-blue-950 font-semibold '>{description}</p>
                    <p className='text-gray-400 text-xl font-semibold'>{hash_tag}</p>
                    <p className="underline text-xl text-blue-500">marked as read</p>
                </div>
            </div>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handlerBookMarks: PropTypes.func.isRequired
}

export default Blog;