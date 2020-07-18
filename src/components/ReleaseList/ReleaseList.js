import React, { Fragment } from 'react'
import ReleaseItem from '../ReleaseItem/ReleaseItem'

function ReleaseList(props) {
    const { repository } = props

    return (
        <Fragment>
            {repository.map((item) => (
                <ReleaseItem key={item.id} body={item.body} name={item.name} published_at={item.published_at} />
            ))}
        </Fragment>
    )
}

export default ReleaseList
