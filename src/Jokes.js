import React from 'react'

const Jokes = (props) => {
    return (
        <div className='joke'>
            <h3 style={{ display: props.question ? 'block' : 'none' }}>Qestion: {props.question}</h3>
            <h4 style={{ color: props.question ? '#224E69' : '#26212E' }}>{props.answer}</h4>
            <hr />
        </div>
    )
}

export default Jokes