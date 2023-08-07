import Head from "next/head"
export default function Header(children) {
    let meta_title = '';
    if (children.children.props.data !== undefined) {
        if (children.children.props.data.length != 0) {
            meta_title = children.children.props.data[0].meta_title;
        }
    }

    const titles = (meta_title || 'Apply Personal Loan, Gold Loan, Home Loan, Business Loan, Education Loan Online India - ReferLoan');
    
    return (
        <>
            <Head>
                <title>{titles}</title>
                <link href={'/css/global.css'} rel={'stylesheet'} preload="true" />
                <link href={'/css/styles.css'} rel={'stylesheet'} preload="true" />
                <link href={'/css/slick.css'} rel={'stylesheet'} preload="true" />
                <link href={'/css/menu.css'} rel={'stylesheet'} preload="true" />
                <link href={'/css/custom.css'} rel={'stylesheet'} preload="true" />

                <link href={'/css/media.css'} rel={'stylesheet'} preload="true" />
                <link href={'/css/innerPages.css'} rel={'stylesheet'} preload="true" />
                <link href={'/css/menu-new.css'} rel={'stylesheet'} preload="true" />
                {/* <link href={'/css/custom.css'} rel={'stylesheet'} /> */}
                <link href={'/css/new_style.css'} rel={'stylesheet'} preload="true" />
                <link href={'/favicon.ico'} rel={'icon'} type={'image/x-icon'} />
                <link rel={'stylesheet'} href={'/css/css-pro-layout.css'} />
                <link href={'/css/user-dashboard.css'} rel={'stylesheet'} />
                <link href={'/css/all.css'} rel={'stylesheet'} />
                <link href={'/css/home.css'} rel={'stylesheet'} />
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/remixicon@2.2.0/fonts/remixicon.css" preload="true"/>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" preload="true" />
            </Head>
        </>
    )
}
