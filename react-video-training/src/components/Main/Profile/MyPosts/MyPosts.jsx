import Post from './Post/Post'
import c from '../MyPosts/MyPosts.module.css';

const MyPosts = () => {
    return (
        <div>My posts
            <div>
                <textarea></textarea>
                <button>Add Post</button>
            </div>
            <div>
                <Post message='Hi, how are you?' likesCount='0' />
                <Post message='It`s my first post' likesCount='12' />
                <Post />
                <div className={c.item}>post 2</div>
                <div className={c.item}>post 3</div>
                <div className={c.item}>post 4</div>
                <div className={c.item}>post 5</div>
                <div className={c.item}>post 6</div>
            </div>
        </div>
    )
}

export default MyPosts;