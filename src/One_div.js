import React from 'react'
import './One_css.css'


//import 'bootstrap/dist/css/bootstrap.css'
//import { Navbar } from 'react-bootstrap'
//pwede mo mag butang diri ug css

export default function One_div() {
    const openInNewTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
      }

    return (
        <>
            <div class='div_one_main'>
             <h1 className="one_title_header"onClick={() => openInNewTab('https://www.youtube.com/watch?v=aYsgsSo1aow&list=PL8OC-m3rVkpy0SAHckc2C-OJ50BVe2RmZ&index=88')}>Wisdom</h1>
                <p>Sit pariatur labore deserunt mollit fugiat quis qui eu officia. Veniam ad ad amet anim nulla Lorem eiusmod. Aliqua tempor duis
                     proident dolor incididunt do aliqua nisi fugiat enim tempor esse commodo velit. Excepteur reprehenderit anim labore
                      in deserunt pariatur anim labore aute dolor. qui eu officia. Veniam ad ad amet anim nulla Lorem eiusmod. Aliqua tempor duis
                     proident dolor incididunt do aliqua nisi fugiat enim tempor esse commodo velit. Excepteur reprehenderit anim labore
                      in deserunt pariatur anim labore aute dolor. qui eu officia. Veniam ad ad amet anim nulla Lorem eiusmod. Aliqua tempor duis
                     proident dolor incididunt do aliqua nisi fugiat enim tempor esse commodo velit. Excepteur reprehenderit anim labore
                      in deserunt pariatur anim labore aute dolor. qui eu officia. Veniam ad ad amet anim nulla Lorem eiusmod. Aliqua tempor duis
                     proident dolor incididunt do aliqua nisi fugiat enim tempor esse commodo velit. Excepteur reprehenderit anim labore
                      in deserunt pariatur anim labore aute dolor.</p>

            </div>
            
            </>
    
    )
    
}
