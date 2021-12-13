import React from 'react'
import Feedback from './Feedback'

export default function Sidebar() {
    return (
        <div className='sidebar'>
            <div className="user">
                <img id="userPfp" src="https://avatars.githubusercontent.com/u/273509?v=4" alt="user_img" />
                <div className="userGreeting">
                    <h3>Hi Reader,</h3>
                    <p>Here's your News!</p>
                </div>
            </div>
            <div className="toggle">
                <h2>View Toggle</h2>
                <div className="splitBtn">
                    <button className="toggleButtons" id = "cardView"><i class="far fa-newspaper"></i></button>
                    <button className="toggleButtons" id = "listView" autoFocus><i class="fas fa-list-ul"></i></button>
                </div>
            </div>
            <Feedback />
        </div>
    )
}
