import { Component, useState } from 'react';
import PostList from './PostList';
import PostForm from './PostForm';
import Sort from './Sort';


function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'First title', body: 'Description', weight: 100, favorites : false},
    {id: 2, title: 'Second title', body: 'Description', weight: 110, favorites: false},
    {id: 3, title: 'Third title', body: 'Description', weight: 10, favorites: false},
  ])
  const [title, setTitle] = useState()
  const [body, setBody] = useState()
  const [weight, setweight] = useState()

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const favoritePost = (chechFavorites, post) => {
    setPosts(posts.map(p => p.id === post.id ? {...post, favorites: chechFavorites} : p))
    console.log(post.favorites)
    console.log(chechFavorites)
  }

  const [selectedSort, setSelectedSort] = useState('')

  const sortPosts = (sort) => {
    console.log(sort)
    setSelectedSort(sort)
    if (sort === "weight down"){
      setPosts([...posts].sort((a, b) => a.weight - b.weight).reverse())
    }
    else if (sort === "weight up"){
      setPosts([...posts].sort((a, b) => a.weight - b.weight))
    }
    else if (sort === "id") {
      setPosts([...posts].sort((a, b) => a.id - b.id))
    }
    else if (sort === "favorite") {
      setPosts([...posts].sort((a, b) => Number(a.favorites) - Number(b.favorites)).reverse())
    }
  }

  return (
    <main className='content'>
      <div className="box has-background-grey-lighter">
        <h1 className="title has-text-centered">Wish List</h1>
      </div>
      <PostForm create={createPost}/>
      <Sort value={selectedSort} 
                onChange={sortPosts}
      />
      <PostList remove={removePost} check={favoritePost} posts={posts}/>
    </main>
  )
}

export default App;