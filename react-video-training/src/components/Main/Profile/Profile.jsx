import MyPosts from './MyPosts/MyPosts'
import c from './Profile.module.css'

const Profile = () => {
    return (
        <div>
            <div><img src='https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455__480.jpg' /></div>
            <div> Ava + description</div>
            <MyPosts />
        </div>
    )
}
export default Profile;