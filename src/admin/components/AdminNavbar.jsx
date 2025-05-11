import { Link } from 'react-router-dom'
import { chevronSVG } from '../../../public/svg'

const AdminNavbar = ({title = "پنل ادمین"}) => {
    return (
        <nav className="flex justify-center items-center mb-10">
            <div className='flex-1 cursor-pointer'>
                <Link to={'/admin'}>
                    <div><img src={chevronSVG} alt="" /></div>
                </Link>
            </div>
            <h1 className="text-3xl">{title}</h1>
        </nav>
    )
}

export default AdminNavbar