import { Card } from 'antd'
import { observer } from 'mobx-react-lite'
import { useParams } from 'react-router-dom'
import { post } from './../../../store/post'
import { user } from './../../../store/user'
import style from './postPage.module.sass'

const PostPage = () => {
	const params = useParams()
	const { id } = params

	if (!id || !post.isSuccess || !user.isSuccess) return null
	const postItem = post.getById(id)
	const userItem = user.getById(postItem.userId)

	return (
		postItem && (
			<Card title={postItem.title} size='small' className={style.post}>
				<img
					src={`https://picsum.photos/1200/500.jpg?random=${Math.random()}`}
					alt='photos'
				/>
				<p>{userItem.name}</p>
				<p>{postItem.body}</p>
			</Card>
		)
	)
}

export default observer(PostPage)
