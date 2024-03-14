
import PropTypes from 'prop-types';

const Read = ({items}) => {
    // console.log(items);
    const { description} = items;
    return (
        <div className='p-3'>
            <div className='border-2 rounded-lg bg-white flex items-center p-3 '>
                <p className='text-xl font-semibold'>{description}</p>
            </div>
        </div>
    );
};

Read.propTypes = {
    items: PropTypes.object.isRequired
}

export default Read;