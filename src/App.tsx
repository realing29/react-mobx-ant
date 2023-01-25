import { Button, Input, Layout, Modal } from 'antd'
import { Link, Navigate, Route, Routes } from 'react-router-dom'
import './app.sass'
import PostsListPage from './components/pages/postList/index'
import { useEffect, useState } from 'react'
import { post } from './store/post'
import { user } from './store/user'
import PostPage from './components/pages/post/postPage'
import MyBredcrump from './components/ui/bradcrump'
import { getRandomIntInclusive } from './utils/getRandom'

const { Header, Content } = Layout

const initialValueNewPost = {
	title: '',
	content: '',
	id: getRandomIntInclusive(1, 99999999),
	userId: 1,
}

const headerStyle: React.CSSProperties = {
	display: 'flex',
	alignItems: 'baseline',
	justifyContent: 'center',
	color: '#fff',
	paddingInline: 50,
	lineHeight: '64px',
	backgroundColor: '#da01fa',
	gap: '20px',
}

const contentStyle: React.CSSProperties = {
	textAlign: 'center',
	color: '#fff',
	paddingInline: 50,
	lineHeight: '64px',
	backgroundColor: '#fff988',
}

const App = () => {
	const [isModalOpen, setIsModalOpen] = useState(false)

	const [newPost, setNewPost] = useState(initialValueNewPost)

	const showModal = () => {
		setIsModalOpen(true)
	}

	const handleOk = async () => {
		setIsModalOpen(false)
		const result = await post.create(newPost)
		console.log(result)
		setNewPost(initialValueNewPost)
	}

	const handleCancel = () => {
		setIsModalOpen(false)
	}

	useEffect(() => {
		post.fetch()
		user.fetch()
	}, [])
	return (
		<>
			<Layout>
				<Header style={headerStyle}>
					<Link to='' className='header_title'>
						Home
					</Link>
					<Button type='primary' onClick={showModal}>
						Add Post
					</Button>
				</Header>
				<Content style={contentStyle} className='content'>
					<div className='container'>
						<MyBredcrump />

						<Routes>
							<Route path='' element={<PostsListPage />} />
							<Route path=':id' element={<PostPage />} />
							<Route path='*' element={<Navigate to={'/'} />} />
						</Routes>
					</div>
				</Content>
				<Modal
					title='Add Post'
					open={isModalOpen}
					onOk={handleOk}
					onCancel={handleCancel}
				>
					<label>
						<p>Title</p>
						<Input
							style={{ width: '100%' }}
							value={newPost.title}
							defaultValue=''
							onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
						/>
					</label>
					<label>
						<p>Body</p>
						<Input.TextArea
							name='content'
							style={{ width: '100%' }}
							value={newPost.content}
							onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
						/>
					</label>
				</Modal>
			</Layout>
		</>
	)
}

export default App
