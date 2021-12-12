import React from 'react'

export default function Sidebar() {
    return (
        <div className='sidebar'>
            <div className="user">
                <img id="userPfp" src="https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg" alt="user_img" />
                <div className="userGreeting">
                    <h3>Hi Reader,</h3>
                    <p>Here's your News!</p>
                </div>
            </div>
            <div className="toggle">
                <h2>View Toggle</h2>
                <div className="splitBtn">
                    <button className="toggleButtons"><i class="far fa-newspaper"></i></button>
                    <button className="toggleButtons"><i class="fas fa-list-ul"></i></button>
                </div>
            </div>
            <div className="feedback">
                <h2>Have a feedback?</h2>
                <button className="feedbackBtn"><strong>We're listening!</strong></button>
            </div>
        </div>
    )
}
