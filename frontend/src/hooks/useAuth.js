import { useSelector } from 'react-redux'
import { selectCurrentToken } from '../features/auth/authSlice'
import jwtDecode from 'jwt-decode'

const useAuth = () => {
    const token = useSelector(selectCurrentToken)

    if (token) {
        const decoded = jwtDecode(token)

        const { username, firstname, lastname, buyingPower } = decoded.UserInfo
        return { username, firstname, lastname, buyingPower }
    }


    return { username: '', firstname: '', lastname: '', buyingPower: 0 }

}

export default useAuth
