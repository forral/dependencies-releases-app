import React from 'react'
import { Item } from 'semantic-ui-react'

function ReleaseItem(props) {
    const { version, title, description } = props

    return (
        <Item.Group>
            <Item>
                <Item.Content>
                    <Item.Header>{version}</Item.Header>
                    <Item.Meta>{title}</Item.Meta>
                    <Item.Description>
                        <p>{description}</p>
                    </Item.Description>
                </Item.Content>
            </Item>
        </Item.Group>
    )
}
export default ReleaseItem
