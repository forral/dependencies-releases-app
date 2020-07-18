import React from 'react'
import { Item } from 'semantic-ui-react'

function ReleaseItem(props) {
    const { published_at, name, body } = props

    return (
        <Item.Group>
            <Item>
                <Item.Content>
                    <Item.Header>{name}</Item.Header>
                    <Item.Meta>{published_at}</Item.Meta>
                    <Item.Description>
                        <p>{body}</p>
                    </Item.Description>
                </Item.Content>
            </Item>
        </Item.Group>
    )
}
export default ReleaseItem
