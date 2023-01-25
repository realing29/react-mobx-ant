import { Card } from 'antd'
import { Link } from 'react-router-dom'
import { post } from '../../../store/post'
import { user } from '../../../store/user'
import style from './post.module.sass'

const Post = ({ postId }: { postId: number }) => {
	const postItem = post.getById(postId)

	const userItem = user.getById(postItem.userId)
	return (
		<Card title={postItem.title} size='small' className={style.post}>
			<img
				src={`https://picsum.photos/500/500.jpg?random=${Math.random()}`}
				alt='photos'
				className={style.image}
			/>
			<p>{userItem.name}</p>
			<Link to={`${postItem.id}`}> Open</Link>
		</Card>
	)
}

export default Post
