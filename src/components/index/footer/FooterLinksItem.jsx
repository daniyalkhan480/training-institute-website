import React from 'react'

const FooterLinksItem = ({item}) => {
    return (
        <div className="col-lg-2 col-md-6 col-sm-6 col-12">
            <div className="footer-widget">
                <h5 className="ft-title">{item.title}</h5>
                <ul className="ft-link">
                    {item.links.map((link,index) => {
                        return (
                            <li key={index}>
                                <a href={link.link}>{link.title}</a>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}

export default FooterLinksItem
