import background from '../images/intro-background.png'
import github from '../images/github.png'
import linkedIn from '../images/linkedIn.png'
import { useNavigate } from 'react-router-dom'
import useTitle from '../hooks/useTitle'
import { useState, useRef, useEffect } from 'react'

const Public = () => {
    useTitle('Robinhood | Home')
    const navigate = useNavigate();
    const [toggle, setToggle] = useState(false)
    const [windowSize, setWindowSize] = useState(window.innerWidth);

    const goToSignUp = () => navigate('/signup');
    const goToLogin = () => navigate('/login');

    window.addEventListener('resize', () => {

        setWindowSize(window.innerWidth)

        if (windowSize >= 770) {
            setToggle(false)
        }

    })



    return (
        <div className='w-screen'>
            <header className="w-full px-6 border-solid border border-t-0 border-x-0 border-b-black fixed bg-white">
                <nav className="w-full h-16  flex justify-between items-center bg-white">
                    <div className=" h-full items-center flex">
                        <svg className="" xmlns="http://www.w3.org/2000/svg" width="142px" height="35px" viewBox="0 0 831 163" fill="none">
                            <path d="M200.82 43.6905C192.971 43.6905 184.677 47.5334 179.494 53.4455H179.198V16.3467H164.832V124.244H178.013V116.706H178.309C183.344 122.47 192.526 126.461 200.524 126.461C221.257 126.461 234.586 110.202 234.586 85.0756C234.586 60.6879 220.665 43.6905 200.82 43.6905ZM198.302 113.454C187.491 113.454 179.198 106.064 179.198 96.3087V75.3205C179.198 64.8265 187.491 56.845 198.302 56.845C212.371 56.845 220.22 67.0435 220.22 85.0756C220.22 103.256 212.371 113.454 198.302 113.454Z" fill="black" />
                            <path d="M118.182 43.6904C96.8555 43.6904 82.1939 60.6879 82.1939 85.0756C82.1939 110.055 96.4112 126.461 118.182 126.461C139.656 126.461 153.725 110.055 153.725 85.0756C153.725 60.6879 139.211 43.6904 118.182 43.6904ZM118.182 113.454C104.705 113.454 96.4112 102.516 96.4112 85.0756C96.4112 67.6347 104.705 56.845 118.182 56.845C131.214 56.845 139.508 67.9303 139.508 85.0756C139.508 102.369 131.214 113.454 118.182 113.454Z" fill="black" />
                            <path d="M75.5296 50.785C75.5296 32.4573 61.9046 20.7808 40.5786 20.7808H0V124.244H14.8097V83.3019H35.9876C52.2783 83.3019 58.2022 89.8053 58.2022 107.837V124.244H72.5676V107.837C72.5676 91.3277 67.5323 81.5135 56.5583 77.4785C67.7989 73.5469 75.5296 64.2943 75.5296 50.785ZM39.3939 70.1474H14.8097V34.2309H39.2458C53.315 34.2309 60.5718 40.2909 60.5718 52.2631C60.5718 63.7918 53.1669 70.1474 39.3939 70.1474Z" fill="black" />
                            <path d="M312.929 43.6904C304.636 43.6904 295.75 47.6811 291.455 53.4455H291.159V45.9075H277.09V124.244H291.455V75.0249C291.455 63.9396 298.712 56.9928 310.116 56.9928C321.371 56.9928 326.702 63.4962 326.702 77.0942V124.244H341.216V72.9557C341.216 54.9235 330.257 43.6904 312.929 43.6904Z" fill="black" />
                            <path d="M547.219 43.6904C525.893 43.6904 511.232 60.6879 511.232 85.0756C511.232 110.055 525.449 126.461 547.219 126.461C568.693 126.461 582.763 110.055 582.763 85.0756C582.763 60.6879 568.249 43.6904 547.219 43.6904ZM547.219 113.454C533.742 113.454 525.449 102.516 525.449 85.0756C525.449 67.6347 533.742 56.845 547.219 56.845C560.252 56.845 568.545 67.9303 568.545 85.0756C568.545 102.369 560.252 113.454 547.219 113.454Z" fill="black" />
                            <path d="M647.037 16.3467V53.4455H646.74C641.557 47.3856 633.412 43.6905 625.563 43.6905C605.718 43.6905 591.648 60.9835 591.648 85.0756C591.648 110.202 604.977 126.461 625.711 126.461C633.708 126.461 642.89 122.47 647.925 116.706H648.221V124.244H661.402V16.3467H647.037ZM647.037 96.3087C647.037 106.064 638.743 113.454 627.932 113.454C613.863 113.454 606.014 103.256 606.014 85.0756C606.014 67.0435 613.863 56.845 627.932 56.845C638.743 56.845 647.037 64.8265 647.037 75.3205V96.3087Z" fill="black" />
                            <path d="M466.802 43.6904C445.476 43.6904 430.815 60.6879 430.815 85.0756C430.815 110.055 445.032 126.461 466.802 126.461C488.277 126.461 502.346 110.055 502.346 85.0756C502.346 60.6879 487.832 43.6904 466.802 43.6904ZM466.802 113.454C453.326 113.454 445.032 102.516 445.032 85.0756C445.032 67.6347 453.326 56.845 466.802 56.845C479.835 56.845 488.128 67.9303 488.128 85.0756C488.128 102.369 479.835 113.454 466.802 113.454Z" fill="black" />
                            <path d="M261.391 16.3467H245.841V31.5705H261.391V16.3467Z" fill="black" />
                            <path d="M392.458 43.6905C383.72 43.6905 374.834 47.829 370.687 53.7411H370.391V16.3467H356.026V124.244H370.391V75.0249C370.391 64.383 378.092 56.9928 389.051 56.9928C399.862 56.9928 406.082 64.0874 406.082 76.3552V124.244H420.448V72.8079C420.448 54.9236 409.637 43.6905 392.458 43.6905Z" fill="black" />
                            <path d="M260.799 45.9072H246.434V124.243H260.799V45.9072Z" fill="black" />
                            <path d="M760.45 127.968L759.368 128.323C752.408 130.629 742.115 134.191 732.874 138.433C732.385 138.669 732.059 139.32 732.059 139.32C731.882 139.719 731.674 140.207 731.437 140.754L731.408 140.827C730.371 143.178 728.949 146.71 728.327 148.159L727.853 149.297C727.779 149.474 727.824 149.681 727.972 149.814C728.061 149.903 728.164 149.947 728.283 149.947C728.342 149.947 728.416 149.932 728.49 149.903L729.601 149.371C732.133 148.173 735.332 146.355 738.679 144.759L738.798 144.7C745.181 141.685 752.378 138.27 756.717 136.201C756.717 136.201 757.414 135.832 757.769 135.137L761.012 128.634C761.101 128.471 761.072 128.264 760.953 128.116C760.82 127.968 760.627 127.909 760.45 127.968Z" fill="black" />
                            <path d="M734.503 117.903C734.962 117.016 737.065 112.966 737.539 112.064L737.628 111.902C751.727 85.371 768.906 60.333 788.677 37.5121L789.225 36.8765C789.388 36.6844 789.418 36.3887 789.299 36.167C789.166 35.9305 788.914 35.8123 788.662 35.8419L787.833 35.9601C774.86 37.7485 761.723 40.2169 748.78 43.306C747.491 43.6607 746.662 44.5032 746.484 44.6953C736.798 56.2684 727.631 68.4475 719.219 80.9369C718.805 81.5725 718.656 82.4002 718.76 83.0801C718.849 83.7452 720.878 99.3385 723.958 111.311C716.317 133.26 709.489 162.185 709.489 162.185C709.43 162.377 709.474 162.569 709.578 162.732C709.697 162.894 709.874 162.983 710.082 162.983H714.436C714.717 162.983 714.954 162.82 715.058 162.569L715.354 161.756C719.797 149.666 724.862 137.723 730.46 126.076C731.748 123.371 734.503 117.903 734.503 117.903Z" fill="black" />
                            <path d="M795.06 42.2568L795.045 41.4291C795.03 41.1631 794.867 40.9413 794.63 40.8527C794.393 40.764 794.112 40.8379 793.934 41.03L793.386 41.6508C770.328 68.2703 750.942 97.8016 735.777 129.446L735.421 130.186C735.303 130.422 735.347 130.703 735.525 130.895C735.643 131.013 735.806 131.087 735.969 131.087C736.043 131.087 736.132 131.072 736.221 131.043L736.976 130.732C749.935 125.382 763.16 120.741 776.296 116.942C777.081 116.721 777.747 116.159 778.117 115.435C783.878 104.231 797.251 82.5334 797.251 82.5334C797.592 82.0457 797.503 81.3214 797.503 81.3214C797.503 81.3214 795.208 55.3818 795.06 42.2568Z" fill="black" />
                            <path d="M824.872 4.83263C821.599 1.99479 816.845 0.664557 809.47 0.501972C802.776 0.354168 794.823 1.80265 785.804 4.75873C784.456 5.23171 783.375 5.98551 782.412 6.91667C773.245 15.5041 764.33 24.6236 755.903 34.024L755.251 34.7334C755.074 34.9403 755.044 35.236 755.177 35.4577C755.311 35.6941 755.592 35.8124 755.858 35.7533L756.806 35.5463C770.387 32.6494 784.101 30.4323 797.563 28.9691C798.451 28.8656 799.37 29.1612 800.021 29.7672C800.688 30.3732 801.058 31.2452 801.043 32.1468C800.821 45.4788 801.31 58.8698 802.494 71.9505L802.568 72.8078C802.598 73.0738 802.776 73.2807 803.042 73.3547C803.087 73.3694 803.131 73.3694 803.19 73.3842C803.383 73.3842 803.59 73.2955 803.724 73.1182L804.212 72.4235C811.795 61.6338 820.044 51.1397 828.722 41.2072C829.7 40.0987 829.952 39.404 830.129 38.399C832.854 20.9876 828.648 8.09911 824.872 4.83263Z" fill="black" />
                        </svg>
                    </div>
                    <div className="h-2/3 flex items-center md:hidden">
                        <button className="text-[13px] border-solid border border-black bg-white text-black rounded-full px-7 h-full font-semibold whitespace-nowrap mr-3">Log in</button>
                        <svg className='cursor-pointer' onClick={() => setToggle(prev => !prev)} aria-hidden="true" fill="rgb(0, 0, 0)" height="30" width="30"><g><rect fill="transparent" height="30" width="30" x="0" y="0"></rect><rect height="3" width="30" x="0" y="7"></rect></g><g><rect fill="transparent" height="30" width="30" x="0" y="0"></rect><rect height="3" width="30" x="0" y="20"></rect></g></svg>

                    </div>
                    <div className="hidden h-2/3 md:flex">
                        <button className="text-[13px] border-solid border border-black bg-white text-black rounded-full px-7 h-full font-semibold whitespace-nowrap" onClick={goToLogin}>Log in</button>
                        <div className="w-[12px] hidden md:block"></div>
                        <button className="text-[13px] border-solid border border-white bg-black text-white rounded-full px-7 h-full font-semibold whitespace-nowrap" onClick={goToSignUp}>Sign up</button>
                    </div>
                </nav>
            </header>
            {toggle ?
                <div className='pt-24'>
                    <p onClick={goToSignUp} className='pl-4 pb-2 pt-2 text-black text-4xl hover:-translate-y-2 hover:text-[#00c806] w-fit cursor-pointer'>Sign Up</p>
                </div>
                :
                <div>
                    <main>
                        <div className="grid-placer min-w-full h-full min-h-full grid justify-center w-screen min-w-screen">
                            <div className='z-10 mt-10 text-center w-[400px] md:w-[650px] lg:w-[750px]  justify-center'>
                                <div className='text-5xl md:text-6xl lg:text-7xl z-10'>Join a new generation of investors</div>
                                <button className='mt-10 rounded-full bg-black text-white px-8 py-3 font-bold  hover:bg-slate-800 duration-500' onClick={goToSignUp}>Sign up</button>
                            </div>

                            <img className='w-screen h-screen max-w-screen min-w-screen max-h-screen min-h-screen object-cover -z-1' src={background} alt='background' />
                        </div>
                    </main>
                    <footer className=' h-24 w-full flex border-y border-black'>
                        <div className='px-2 text-center w-1/2 flex items-center justify-center md:p-0'>
                            <p className=' text-lg underline leading-7'>This is not a real stock trading website</p>
                        </div>
                        <div className='w-1/2 flex justify-around items-center border-l border-black'>

                            <a className='findMe' href='https://github.com/Brian8771'><img style={{ height: '60px', width: '60px' }} src={github} alt='github' /></a>
                            <a className='findMe' href='https://www.linkedin.com/in/brian-aguilar-088438247/'><img style={{ height: '60px', width: '60px', borderRadius: '50%' }} src={linkedIn} alt='linkedIn' /></a>
                        </div>
                    </footer>
                </div>
            }
        </div>
    )
}

export default Public
