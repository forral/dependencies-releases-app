import React, { Fragment } from 'react'
import ReleaseItem from '../ReleaseItem/ReleaseItem'

const MOCK_DATA = [
    {
        id: 1,
        version: 'v1.65.0',
        title: 'Version 1.65.0 published.',
        description:
            'Fix onChange when numeric value. Thanks to @francescovenica Fix typescript error TS2304: Cannot find name "RowData". Thanks to Sylvain Thénault Add error text to select field. Thanks to @Domino987 Add groupTitle to options. Thanks to @developerdu Do not show hidden columns in columnsButton. Thanks to @esjayrockz Approve edit/add on enter added. Thanks to @vijaypushkin',
    },
    {
        id: 2,
        version: 'v1.30.0',
        title: 'Version 1.30.0 published.',
        description:
            'Fix onChange when numeric value. Thanks to @francescovenica Fix typescript error TS2304: Cannot find name "RowData". Thanks to Sylvain Thénault Add error text to select field. Thanks to @Domino987 Add groupTitle to options. Thanks to @developerdu Do not show hidden columns in columnsButton. Thanks to @esjayrockz Approve edit/add on enter added. Thanks to @vijaypushkin',
    },
]

function ReleaseList() {
    return (
        <Fragment>
            {MOCK_DATA.map((item) => (
                <ReleaseItem key={item.id} version={item.version} title={item.title} description={item.description} />
            ))}
        </Fragment>
    )
}

export default ReleaseList
