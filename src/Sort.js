import React from "react";

const MySelect = ({value, onChange}) => {

    return (
        <div className='box'>
            <div className='columns'>
                <h1 className='column is-1'>Sorting</h1>
                <div className='column'>
                    <div className='select'>
                        <select value={value} onChange={event => onChange(event.target.value)}>
                            <option value="weight up">by weight in ascending</option>
                            <option value="weight down">By weight in descending</option>
                            <option value="id">By unique number</option>
                            <option value="favorite">By favorites</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MySelect