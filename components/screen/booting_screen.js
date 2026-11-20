import React from 'react'

function BootingScreen(props) {

    return (
        <div style={(props.visible || props.isShutDown ? { zIndex: "100" } : { zIndex: "-20" })} className={(props.visible || props.isShutDown ? " visible opacity-100" : " invisible opacity-0 ") + " absolute duration-500 select-none flex flex-col justify-around items-center top-0 right-0 overflow-hidden m-0 p-0 h-screen w-screen bg-black"}>
            <img width="400px" height="400px" className="w-40 h-40 md:w-56 md:h-56 rounded-full object-cover border-2 border-white/20 shadow-2xl" src="/assets/aistudio/Vimal_Soren_78cad58d.jpg" alt="Vimal Logo" />
            <div className="w-10 h-10 flex justify-center items-center rounded-full outline-none cursor-pointer" onClick={props.turnOn} >
                {(props.isShutDown
                    ? <div className="bg-white rounded-full flex justify-center items-center w-10 h-10 hover:bg-gray-300"><img width="32px" height="32px" className="w-8" src="./themes/Yaru/status/power-button.svg" alt="Power Button" /></div>
                    : <img width="40px" height="40px" className={" w-10 " + (props.visible ? " animate-spin " : "")} src="./themes/Yaru/status/process-working-symbolic.svg" alt="Vimal Process Symbol" />)}
            </div>
            <div className="flex items-start justify-center text-white select-none" style={{ fontFamily: "'Ubuntu', sans-serif" }}>
                <span className="text-4xl md:text-5xl font-normal tracking-wide leading-none">vimal</span>
                <img src="/assets/aistudio/Vimal_Soren_78cad58d.jpg" alt="Vimal Logo" className="w-5 h-5 md:w-6 md:h-6 ml-1.5 -mt-1 rounded-full object-cover inline-block border border-white/40 grayscale contrast-125" />
            </div>
            <div className="text-white mb-4">
                <a className="underline" href="https://linkedin.com/vimaljunior" rel="noreferrer noopener" target="_blank">linkedin</a>
                <span className="font-bold mx-1">|</span>
                <a href="https://github.com/vimaljuniorofficial" rel="noreferrer noopener" target="_blank" className="underline">github</a>
            </div>
        </div>
    )
}

export default BootingScreen
