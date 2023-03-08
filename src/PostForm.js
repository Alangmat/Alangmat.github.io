import React from "react";

const PostForm = ({create}) => {
    const [post, setPost] = React.useState({title: '', body: '', weight: ''})

    const addNewPosts = (e) => {
        if (post.title !== '' && post.body !=='' && post.weight !== '') {
          const newPost = {
            ...post, id: Date.now(), favorites: false
          }
          create(newPost)
          console.log(post.title)
          console.log(post.body)
          console.log(post.weight)
          setPost({title: '', body: '', weight: ''})

        }
      }

    return (
        <div className='box'>
            <div className='control'>
            <input type='text' className='input' 
                        placeholder='Title' 
                        value={post.title}
                        onChange={e => setPost({...post, title: e.target.value})} />
            <input type='text' className='input' 
                        placeholder='Description' 
                        value={post.body}
                        onChange={e => setPost({...post, body: e.target.value})}
                        />
            <input type='text' 
                    className='input' 
                    placeholder='Weight' 
                    value={post.weight}
                    onChange={e => setPost({...post, weight: e.target.value})} />
            <button className='button is-success' onClick={addNewPosts}>Add</button>
            </div>
        </div>
    )
}

export default PostForm