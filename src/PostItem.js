import React from "react";

const PostItem = (props) => {

    const [checkFav, setCheckFav] = React.useState(false)
    
    function handleChange() {
        setCheckFav(!checkFav);
        props.check(!checkFav, props.post)
    }

    return (
        <div className="box has-background-grey-lighter">
            <div>
                <strong>{props.post.title}</strong>
                <div>
                    <strong>Unique number: {props.post.id}</strong>
                </div>
                <div>
                    {props.post.body}
                </div>
                <hr></hr>
                <div>
                    Weight: <strong>{props.post.weight}</strong>
                </div>
            </div>
            <div className="field is-grouped is-grouped-right">
                <div className="box has-background-primary chbox">
                <label className="checkbox">
                    <input type="checkbox" checked={checkFav}
                        onChange={handleChange}
                    />
                    To favorites
                </label>
                </div>
                <button onClick={() => props.remove(props.post)} className="button is-danger ml-3 is-medium">
                    Delete
                </button>
            </div>
        </div>
    )
}

export default PostItem