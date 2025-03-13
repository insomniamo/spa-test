import "./Loader.style.scss"
import { LoadingIcon } from '@/icons'

function Loader() {
  return (
    <div className='loader'>
        <LoadingIcon className='loader__icon'/>
    </div>
  )
}

export default Loader