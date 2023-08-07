import Button from '@mui/material/Button';
import { useRouter } from 'next/router'
const error = () => {
const router = useRouter();

  return (

    <div className='error404'>
      <h2>Page Not Found</h2>
      <Button variant="contained" onClick={() => router.push('/')}>Back Home</Button>
    </div>

  )
}

export default error