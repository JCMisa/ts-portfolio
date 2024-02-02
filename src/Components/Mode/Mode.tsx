import './Mode.css'

import { useEffect, useState } from 'react';

export default function Mode()
{
    const [darkMode, setDarkMode] = useState<boolean>(true);

    useEffect(()=>{
        darkMode ? document.body.style.backgroundColor ='#0a0f0a' : document.body.style.backgroundColor = '#4e694d'
    }, [darkMode])

    function changeMode()
    {
        setDarkMode(prevMode => !prevMode)
    }

    return(
        <>
            <img src={darkMode ? process.env.PUBLIC_URL+"/Images/moon.jpg" : process.env.PUBLIC_URL+"/Images/sun.jpg"} alt="dark" height={70} width={70} className="mode" onClick={changeMode} />
        </>
    )
}