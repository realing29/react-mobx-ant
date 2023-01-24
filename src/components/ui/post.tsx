import { Card } from 'antd'
import { Link } from 'react-router-dom'
import { post } from './../../store/post'
import { user } from '../../store/user'

const Post = ({ postId }: { postId: number }) => {
	const postItem = post.getById(postId)

	const userItem = user.getById(postItem.userId)
	return (
		<Card title={postItem.title} size='small'>
			<img
				src={`https://picsum.photos/500/500.jpg?random=${Math.random()}`}
				alt='photos'
			/>
			<p>{userItem.name}</p>
			<Link to={`${postItem.id}`}> Открыть</Link>
		</Card>
	)
}

export default Post
