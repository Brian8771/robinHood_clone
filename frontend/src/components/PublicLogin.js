import { useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import loginImage from '../images/robinhood-login-image.jpeg'
import useTitle from '../hooks/useTitle'
import '../index.css'
import { setCredentials } from "../features/auth/authSlice"
import { useLoginMutation } from "../features/auth/authApiSlice"
import { useDispatch } from "react-redux"
import usePersist from "../hooks/usePersist"
import '../index.css'


const PublicLogin = () => {
    useTitle('Login | Robinhood')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const [persist, setPersist] = usePersist()
    const [showError, setShowError] = useState(false)
    const [login, { isLoading }] = useLoginMutation()

    const navigate = useNavigate()
    const dispatch = useDispatch();


    const cancelDefault = async (e) => {
        e.preventDefault()

        try {
            const { accessToken } = await login({ username, password }).unwrap();
            dispatch(setCredentials({ accessToken }))
            setShowError(false)
            navigate('/home')
        }
        catch (err) {
            setShowError(true)
        }
    }

    const handleRefresh = (e) => {
        e.preventDefault()
        setUsername('')
        setPassword('')
        setShowPassword(false)
        setPersist(false)
        setShowError(false)
    }

    const handleUserInput = (e) => setUsername(e.target.value)
    const handlePasswordInput = (e) => setPassword(e.target.value)
    const handleShowPWDInput = (e) => {
        e.preventDefault()
        setShowPassword(prev => !prev)
    }
    const handleToggle = () => setPersist(prev => !prev)

    if (isLoading) return (

        <h1>Loading</h1>
    )

    return (
        <main className="flex flex-row">
            <img className="hidden md:w-1/2 md:h-screen md:object-cover md:block" src={loginImage} alt='robinghood-login-pic' />
            <div className="w-full flex flex-col justify-center md:w-1/2 h-scree">
                <form className="flex flex-col h-screen justify-center" onSubmit={cancelDefault}>
                    <div className="w-9/12 lg:w-[55%] flex flex-col ml-11">

                        <h3 className="font-medium text-xl mb-7">Log in to Robinhood</h3>
                        <label className="text-[13px] mb-2" htmlFor="username">Username</label>
                        <div className="w-full mb-6 h-9 items-center flex justify-center border-solid border border-[#f1f4f6] rounded-md focus-within:border-[#00c806] transition-all duration-700">
                            <input
                                className="text-[13px] h-[34px] text-sm outline-none  w-11/12"
                                id='username'

                                type='text'
                                value={username}
                                autoComplete='off'
                                onChange={handleUserInput}
                            />
                        </div>
                        <label className="text-[13px] text-black mb-2" htmlFor="password">Password</label>
                        <div className="w-full mb-2 h-9 items-center flex justify-center border-solid border border-[#f1f4f6] rounded-md focus-within:border-[#00c806] transition-all duration-700">
                            <input
                                className="text-[13px] h-[34px] text-sm outline-none indent-3  w-11/12 pr-2 rounded-lg"
                                id='password'
                                onChange={handlePasswordInput}
                                type={showPassword ? 'text' : 'password'}
                                value={password}
                                autoComplete='off'
                            />
                            <button onClick={handleShowPWDInput} className="h-6 w-6 flex justify-center items-center">
                                <svg fill="none" height="16" role="img" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M1 8s1.91-4.455 7-4.455S15 8 15 8s-1.91 4.454-7 4.454S1 8 1 8Zm4.773 0A2.23 2.23 0 0 0 8 10.227 2.23 2.23 0 0 0 10.227 8 2.23 2.23 0 0 0 8 5.773 2.23 2.23 0 0 0 5.773 8Z" fill="black"></path></svg>
                            </button>
                        </div>
                        <label checked={persist} onClick={handleToggle} htmlFor='persist' className="text-[13px] flex mt-3 mb-8 items-center">
                            {persist ? <div className="h-4 w-4 bg-[#00c806] rounded-sm">
                                <svg height="16" role="img" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m13.619 4.952-7.285 7.285-3.62-3.618L3.953 7.38l2.382 2.382 6.048-6.048 1.237 1.237Z" fill="white" ></path></svg>
                            </div> :
                                <div className="h-4 w-4 border border-solid border-slate-500 rounded-sm">
                                </div>
                            }
                            <span className="ml-3">Keep me logged in for up to 30 days</span>
                        </label>
                        {showError && <div className="mb-6 flex h-16 md:mb-3 bg-[#f5f8fa] py-2 rounded">
                            <div className="flex items-center p-4">
                                <svg fill="none" height="24" role="img" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path clipRule="evenodd" d="M12 20c4.395 0 8-3.605 8-8s-3.605-8-8-8-8 3.605-8 8 3.605 8 8 8Zm10-8c0 5.5-4.5 10-10 10S2 17.5 2 12 6.5 2 12 2s10 4.5 10 10Z" fill="black" fillRule="evenodd"></path><path d="M13 9V7h-2v2h2Zm0 2h-2v6h2v-6Z" fill="black"></path></svg>
                            </div>
                            <div className="block md:hidden py-2">
                                <p className="text-xs">Unable to log in with provided credentials. <span onClick={handleRefresh} className="border-b border-black font-bold cursor-pointer">Please reload and retry.</span></p>

                            </div>
                            <div className="hidden md:block py-2">
                                <p className="text-xs">Unable to log in with provided credentials.</p>
                                <div onClick={handleRefresh} className="border-b border-black w-fit mt-1  cursor-pointer">
                                    <p className="text-xs font-bold">Please reload and retry.</p>
                                </div>
                            </div>
                        </div>}
                        <div className="mb-4 flex justify-center md:block">
                            <button className="text-[13px] h-11 px-12 font-medium bg-black rounded-full text-white w-full md:w-fit">Log In</button>
                        </div>
                        <p className="text-[13px]">Not on Robinhood? <Link to='/signup' className=" font-bold text-[13px] underline">Create an account</Link></p>
                    </div>

                </form>
            </div>
        </main>
    )
}

export default PublicLogin
