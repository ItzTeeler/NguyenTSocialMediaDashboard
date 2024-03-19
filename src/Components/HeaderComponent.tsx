import React, { useState } from 'react'

const HeaderComponent = () => {
    const [theme, setTheme] = useState<boolean>(false);
    const toggle = () => {
        if (theme) {
            document.documentElement.setAttribute("data-theme", "dark");
        } else {
            document.documentElement.setAttribute("data-theme", "light");
        }
        setTheme(!theme);
    }
    return (
        <>
            <div className='backgroundTopPat'></div>
            <div className='px-[25px] lg:px-[10.625rem]'>
                <div className='grid grid-cols-12 pt-5'>
                    <div className='col-span-12 md:col-span-8'>
                        <div className='headTitle'>Social Media Dashboard</div>
                        <div className='totFollowers'>Total Followers: 23,004</div>
                        <hr className='hrClass'/>
                    </div>
                    <div className='col-span-12 md:col-span-4 flex justify-end items-center darkDiv'>
                        <div className='totFollowers pr-2'>Dark Mode</div>
                        <label className="switch">
                            <input type="checkbox" onClick={toggle} />
                            <span className="slider round"></span>
                        </label>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeaderComponent
