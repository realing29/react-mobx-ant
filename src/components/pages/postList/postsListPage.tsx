import { Pagination, Space } from 'antd'
import style from './postsListPage.module.sass'
import { post } from '../../../store/post'
import { observer } from 'mobx-react-lite'
import Post from '../../ui/post/post'
import { user } from '../../../store/user'
import { paginate } from '../../../utils/paginate'
import { useState } from 'react'

const PostsListPage = () => {
	const [pageSize] = useState(10)
	const [current, setCurrent] = useState(1)

	const handlePaginateChange = (page: number) => {
		setCurrent(page)
	}

	const postPaginate = paginate(post.ids, current, pageSize)

	return (
		<Space direction='vertical' size='middle' className={style.posts_list}>
			{post.isSuccess &&
				user.isSuccess &&
				postPaginate.map((id) => {
					return <Post postId={id} key={id} />
				})}
			<Pagination
				showSizeChanger={false}
				onChange={handlePaginateChange}
				pageSize={pageSize}
				current={current}
				total={post.ids.length}
				className={style.pagination}
			/>
		</Space>
	)
}

export default observer(PostsListPage)
