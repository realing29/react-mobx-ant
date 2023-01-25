import { Link, useLocation } from 'react-router-dom'
import { Breadcrumb } from 'antd'
import { HomeOutlined } from '@ant-design/icons'
import style from './bradcrump.module.sass'

const MyBredcrump = () => {
	const { pathname } = useLocation()

	const breadcrumb = pathname.split('/').filter((item) => item !== '')

	return (
		<Breadcrumb className={style.bradcrump}>
			<Breadcrumb.Item>
				<Link to='/'>
					<HomeOutlined />
				</Link>
			</Breadcrumb.Item>
			{breadcrumb.map((item, index) => (
				<Breadcrumb.Item>
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
