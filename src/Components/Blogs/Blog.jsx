
import PropTypes from 'prop-types';

const Blog = ({blog}) => {
    console.log(blog)
    const {author, cover_img, profile_img, release_date, read_time} = blog;
    return (
        <div>
            <div className='w-[70%]'>
                <div className='rounded-xl'>
                        <img className='rounded-xl' src={cover_img} alt="" />
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
                        <div>
                            <p>{read_time} min read</p>
                        </div>
                </div>
            </div>
            <div className='w-[30%]'>
                <p>hello</p>
            </div>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired
}

export default Blog;