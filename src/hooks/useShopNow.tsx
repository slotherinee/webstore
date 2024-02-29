import { useNavigate } from 'react-router-dom'

const useShopNow = () => {
  const navigate = useNavigate()

  const handleShopNowClick = () => {
    navigate('/store')
    window.scroll({ top: 0, left: 0, behavior: 'smooth' })
  }

  return handleShopNowClick
}

export default useShopNow
