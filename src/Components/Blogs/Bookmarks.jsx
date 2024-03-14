
import PropTypes from 'prop-types';
import Read from './Read';
const Bookmarks = ({bookmarks, readtime}) => {
    return (
        <div className="w-[45%] ">
            <div className='w-full flex flex-col gap-5 '>
                <div className='h-20 w-full border-2 border-indigo-500 rounded-lg flex items-center justify-center '>
                    <p className='text-3xl font-bold text-blue-700'>Spent time on read: <span>{readtime}</span> </p>
                </div>
                <div className=' w-full flex flex-col items-center border-2 rounded-lg bg-slate-50 '>
                    <h3 className='text-2xl font-bold text-black'>Bookmarked Blogs : <span>{bookmarks.length}</span> </h3>
                    {
                        bookmarks.map(items => <Read key={items.id} items={items} ></Read> )
                    }
                </div>
            </div> 
        </div>
    );
};

Bookmarks.PropTypes = {
    bookmarks: PropTypes.array.isRequired,
    readtime: PropTypes.number.isRequired
}

export default Bookmarks;