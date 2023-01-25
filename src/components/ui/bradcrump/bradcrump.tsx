import { Link, NavLink, useLocation } from 'react-router-dom'
import { Breadcrumb } from 'antd'
import { HomeOutlined } from '@ant-design/icons'
import style from './bradcrump.module.sass'

const MyBredcrump = () => {
	const { pathname } = useLocation()

	const breadcrumb = pathname.split('/').filter((item) => item !== '')

	return (
		<Breadcrumb className={style.bradcrump}>
			<Breadcrumb.Item>
				<NavLink
					to='/'
					style={({ isActive }) => (isActive ? { cursor: 'default' } : undefined)}
				>
					<HomeOutlined />
				</NavLink>
			</Breadcrumb.Item>
			{breadcrumb.map((item, index) => (
				<Breadcrumb.Item key={'bread' + index}>
					{index === breadcrumb.length - 1 ? (
						<span>{item}</span>
					) : (
						<Link key={'bread' + index} to={'/' + item}>
							{item}
						</Link>
					)}
				</Breadcrumb.Item>
			))}
		</Breadcrumb>
	)
}

export default MyBredcrump
