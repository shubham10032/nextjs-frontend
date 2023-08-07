import Link from 'next/link'
import { useRouter } from 'next/router';
const subMenu = ({ data, setActive, setVisible }) => {
  const router = useRouter()
  let utmData = '';
  const { utm_campaign, utm_id, utm_medium, utm_source } = router.query
  if (!utm_campaign) {
    utmData = `?utm_source=direct_visitors&utm_medium=self&utm_campaign=&utm_id=`
  } else {
    utmData = `?utm_source=${utm_source}&utm_medium=${utm_medium}&utm_campaign=${utm_campaign}&utm_id=${utm_id}`
  }

  const setMenuStatus = () => {
    setActive('');
    

    if (typeof window !== 'undefined') {
      window.localStorage.removeItem("token");
      window.localStorage.removeItem("full_name");
      window.localStorage.removeItem("pan");
      window.localStorage.removeItem("phone");
    }
  }



  const items = data.map((item, index) => (
    item.id != null
      ? (<li onClick={() => { 
        setVisible((current) => !current)
        setMenuStatus() 
      }} key={index}><Link href={'/' + item.slug + utmData}><a tabIndex="-1" >{item.name}</a></Link></li>)
      : null

  ))

  return (
    <>{items}</>
  )
}

export default subMenu