import { Space } from 'antd'
import style from './postsList.module.sass'
import { post } from '../../../store/post'
import { observer } from 'mobx-react-lite'
import Post from './../../ui/post'
import { user } from '../../../store/user'

const PostsList = () => {
	return (
		<Space direction='vertical' size='middle' className={style.posts_list}>
			<h1>Posts</h1>
			{post.isSuccess &&
				user.isSuccess &&
				post.ids.map((id) => {
					return <Post postId={id} key={id} />
				})}
		</Space>
	)
}

export default observer(PostsList)
