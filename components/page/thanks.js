import { useRouter } from 'next/router';
import Link from 'next/link'
import { useEffect, useState } from 'react';
const Thanks = ({ product, result, redirectUrl }) => {
  const router = useRouter()
  const [time, setTime] = useState(0)
  let utmData = '';
  const { utm_campaign, utm_id, utm_medium, utm_source } = router.query
  if (!utm_campaign) {
    utmData = `?utm_source=direct_visitors&utm_medium=self&utm_campaign=&utm_id=`
  } else {
    utmData = `?utm_source=${utm_source}&utm_medium=${utm_medium}&utm_campaign=${utm_campaign}&utm_id=${utm_id}`
  }

  useEffect(() => {
    if (redirectUrl) {
      let timeleft = 3;
      var downloadTimer = setInterval(function () {
        timeleft--;
        setTime(timeleft)
        if (timeleft <= 0)
          clearInterval(downloadTimer);
      }, 1000);
      setTimeout(() => {
        const newWindow = window.open(redirectUrl, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
      }, 3000);
    }
  }, [])

  const random = Math.floor(Math.random() * (999999999 - 100000000 + 1)) + 100000000;
  return (
    <>
      <div className="jumbotron text-center">
        <h1 className="display-3">Thank You!</h1>
        <p className="lead">Apply successfully for <span style={{ textTransform: 'capitalize' }}>{product}</span></p>

        {result != 'custom' && <div className="fw-bold">Your reference number : {!result ? random : result} </div>}
        {(redirectUrl && time != 0) ? <div className='mt-4'> Please wait...  <span id="verifiBtn"> {time != 0 ? + time + ' Seconds' : ''}  </span></div> : null}
        <hr />
        <p>
          Our team will contact you soon!
        </p>
        <p className="lead">
          <Link href={'/' + utmData}><a className="btn btn-bg " role="button">Continue to homepage</a></Link>
        </p>
      </div>
    </>
  )
}

export default Thanks