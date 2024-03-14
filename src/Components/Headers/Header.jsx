
import Profile from "../../assets/images/profile.png";

const Header = () => {
    return (
        <div className="flex items-center justify-between px-4 border-b-2 w-[95%] mx-auto p-4 ">
            <h1 className='text-4xl font-bold'>Knowledge Cafe</h1>
            <img src={Profile} alt="" />
        </div>
    );
};

export default Header;