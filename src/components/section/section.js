import React from "react";
import growTogether from '../../images/illustration-grow-together.svg'
import flowingConversations from '../../images/illustration-flowing-conversation.svg'
import yourUsers from '../../images/illustration-your-users.svg'

import './section.css'

const Section = () => {
    return (
        <section className="section">
            <div className="card">
                <div className="card-info">
                    <h2 className="card-title">Grow Together</h2>
                    <p className="card-description">Generate meaningful discussions with your audience and build a strong, loyal community.
                        Think of the insightful conversations you miss out on with a feedback form.</p>
                </div>
                <img src={growTogether} alt="grow-together"></img>
            </div>
            <div className="card">
                <img src={flowingConversations} alt="flowing-conversations"></img>
                <div className="card-info">
                    <h2 className="card-title">Flowing Conversations</h2>
                    <p className="card-description">You wouldn't paginate a conversation in real life, so why do it online? Our threads
                        have just-in-time loading for a more natural flow.</p>
                </div>
            </div>
            <div className="card">
                <div className="card-info">
                    <h2 className="card-title">Your Users</h2>
                    <p className="card-description">It takes no time at all to integrate Huddle with your app's authentication solution.
                        This means, once signed in to your app, your users can start chatting immediately.</p>
                </div>
                <img src={yourUsers} alt="your-users"></img>
            </div>
            <div className="ready-to-build">
                <h2>Ready To Build Your Community?</h2>
                <a className="button" href="/">Get Started For Free</a>
            </div>
        </section>
    )
}

export default Section