import useAuth from "../hooks/useAuth";
import '../index.css'

const HomeHeader = () => {

    const { firstname, lastname } = useAuth();

    document.addEventListener('click', (e) => {
        const clicker = document.getElementsByClassName('clicker')[0];
        const box = document.getElementsByClassName('clickerBox')[0];
        console.log(box.style.display)

        if (clicker.contains(e.target)) {
            box.style.display = 'block'
            clicker.classList.add('active');
        }
        else if (!clicker.contains(e.target)) {
            box.style.display = 'none'
            clicker.classList.remove('active')
        }
    })

    return (
        <nav className="sticky top-0 px-14 py-5 flex justify-between items-center bg-white">
            <div className="absolute left-12">
                <svg xmlns="http://www.w3.org/2000/svg" className="fill-black hover:fill-[rgba(0,180,5,1)] cursor-pointer duration-500" version="1.2" viewBox="0 0 1133 1518" width="28px" height="28px">
                    <path id="Layer" d="m479.7 1192c1.1 1.4 1.3 3.3 0.5 4.8l-30.2 60.8c-3.3 6.5-9.8 9.9-9.8 9.9-40.4 19.3-107.4 51.2-166.8 79.4l-1.1 0.5c-31.2 14.9-61 31.9-84.6 43.1l-10.4 4.9c-0.6 0.3-1.3 0.5-1.9 0.5q-1.6 0-2.9-1.3c-1.3-1.2-1.8-3.2-1.1-4.8l4.5-10.6c5.7-13.6 18.9-46.6 28.6-68.5l0.3-0.7c2.2-5.1 4.1-9.6 5.8-13.4 0 0 3-6 7.6-8.3 86.1-39.6 181.9-72.8 246.7-94.4l10.1-3.3c1.6-0.5 3.6 0 4.7 1.4zm-284-19.2c-52.1 108.8-99.3 220.3-140.6 333.2l-2.8 7.6c-1 2.3-3.2 3.8-5.8 3.8h-40.6c-1.9 0-3.5-0.8-4.6-2.3-1-1.5-1.4-3.3-0.9-5.1 0 0 63.6-270.1 134.8-475-28.7-111.8-47.6-257.4-48.4-263.6-1-6.4 0.4-14.1 4.2-20.1 78.4-116.6 163.8-230.3 253.9-338.4 1.7-1.8 9.4-9.6 21.4-12.9 120.5-28.9 242.9-51.9 363.7-68.6l7.7-1.1c2.3-0.3 4.7 0.8 5.9 3 1.1 2.1 0.8 4.8-0.6 6.6l-5.2 6c-184.1 213.1-344.1 446.8-475.3 694.6l-0.9 1.5c-4.4 8.4-24 46.2-28.3 54.5 0 0-25.5 51.2-37.6 76.3zm624.3-417.7c0 0 0.8 6.7-2.3 11.3 0 0-124.6 202.6-178.2 307.2-3.5 6.8-9.7 12-17 14.1-122.3 35.4-245.5 78.8-366.1 128.7l-7 2.9c-0.9 0.3-1.7 0.5-2.4 0.5-1.5 0-3-0.7-4.1-1.8-1.7-1.8-2.1-4.5-1-6.7l3.3-6.9c141.2-295.4 321.7-571.2 536.5-819.7l5.1-5.8c1.6-1.8 4.2-2.5 6.4-1.7 2.2 0.8 3.8 2.9 3.9 5.4l0.1 7.7c1.4 122.6 22.8 364.8 22.8 364.8zm304-400.8c-1.7 9.4-4 15.9-13.1 26.2-80.9 92.8-157.7 190.7-228.3 291.5l-4.5 6.5c-1.3 1.6-3.2 2.5-5 2.5-0.5-0.2-1-0.2-1.4-0.3-2.5-0.7-4.1-2.6-4.4-5.1l-0.7-8c-11-122.2-15.6-247.2-13.5-371.7 0.1-8.4-3.3-16.6-9.5-22.2-6.1-5.7-14.6-8.4-22.9-7.5-125.4 13.7-253 34.4-379.5 61.5l-8.8 1.9c-2.5 0.5-5.1-0.6-6.4-2.8-1.2-2-0.9-4.8 0.7-6.7l6.1-6.7c78.4-87.7 161.4-172.9 246.8-253.1 9-8.7 19-15.7 31.6-20.1 84-27.6 158-41.2 220.4-39.8 68.7 1.5 112.9 14 143.4 40.5 35 30.5 74.3 150.8 49 313.4z" />
                </svg>
            </div>
            <div className="flex items-center mx-auto w-[1024px]">
                <div className="flex items-center border-slate-200 border rounded w-96 h-9 focus-within:shadow-lg focus-within:shadow-black-500/120">
                    <svg className="ml-3" height="24" role="img" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15.32 16.734a8 8 0 1 1 1.54-1.288l4.847 4.847-1.414 1.414-4.973-4.973ZM17 10a6 6 0 1 1-12 0 6 6 0 0 1 12 0Z" className="fill-[#697277]" fillRule="evenodd"></path></svg>
                    <input
                        type='text'
                        placeholder="Search"
                        className="indent-1 text-[13px] h-full outline-none w-full rounded"
                    />
                </div>
            </div>
            <div className="absolute right-12 flex items-center">
                <button className="clicker text-sm font-bold border-b-2 border-transparent hover:text-[rgba(0,180,5,1)] active:border-b-2 active:border-b-[rgba(0,180,5,1)] duration-500">Account</button>
                <div className="inherit">
                    <div className="clickerBox hidden absolute right-0 top-6 border border-gray w-60 min-h-[80px] rounded">
                        <div className=" inherit border-b-2 h-12 flex items-center justify-start pl-2">
                            <p className="font-bold">{firstname}<span className="pl-2">{lastname}</span></p>
                        </div>
                        <div className=" inherit h-12 flex items-center justify-start pl-2">
                            <p>Profile</p>
                        </div>
                        <div className=" inherit border-t-2 h-12 flex items-center justify-start pl-2">
                            <p>Log Out</p>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default HomeHeader
