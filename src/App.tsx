import { Breadcrumb, Layout } from 'antd'
import { Link, Route, Routes } from 'react-router-dom'
import { HomeOutlined } from '@ant-design/icons'
import './app.sass'
import PostsList from './components/pages/postList/index'
import { useEffect } from 'react'
import { post } from './store/post'
import { user } from './store/user'

const { Header, Content } = Layout

const headerStyle: React.CSSProperties = {
	textAlign: 'center',
	color: '#fff',
	paddingInline: 50,
	lineHeight: '64px',
	backgroundColor: '#7dbcea',
}

const App = () => {
	useEffect(() => {
		post.fetch()
		user.fetch()
	}, [])
	return (
		<>
			<Layout>
				<Header style={headerStyle}>Header</Header>
				<Content className='content'>
					<div className='container'>
						<div className='pd'>
							<Breadcrumb>
								<Breadcrumb.Item>
									<Link to='/'>
										<HomeOutlined />
									</Link>
								</Breadcrumb.Item>
								<Breadcrumb.Item>List</Breadcrumb.Item>
							</Breadcrumb>
						</div>
						<div className='block pd'>
							<Routes>
								<Route path='/' element={<PostsList />} />
							</Routes>
						</div>
					</div>
				</Content>
			</Layout>
		</>
	)
}

export default App
