import React from 'react'
import PropTypes from 'prop-types'

import { Item } from 'semantic-ui-react'

const propTypes = {
    published_at: PropTypes.string,
    name: PropTypes.string,
    body: PropTypes.string,
}

const defaultProps = {
    published_at: '',
    name: '',
    body: '',
}

function ReleaseItem(props) {
    const { published_at, name, body } = props

    return (
        <Item.Group>
            <Item>
                <Item.Content>
                    <Item.Header data-testid='version-number'>{name}</Item.Header>
                    <Item.Meta data-testid='version-date'>{published_at}</Item.Meta>
                    <Item.Description>
                        <p data-testid='version-description'>{body}</p>
                    </Item.Description>
                </Item.Content>
            </Item>
        </Item.Group>
    )
}

ReleaseItem.propTypes = propTypes
ReleaseItem.defaultProps = defaultProps

export default ReleaseItem
