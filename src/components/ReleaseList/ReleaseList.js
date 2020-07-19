import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import ReleaseItem from '../ReleaseItem/ReleaseItem'

const propTypes = {
    repository: PropTypes.arrayOf(PropTypes.any),
}

const defaultProps = {
    repository: [],
}

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

ReleaseList.propTypes = propTypes
ReleaseList.defaultProps = defaultProps

export default ReleaseList
