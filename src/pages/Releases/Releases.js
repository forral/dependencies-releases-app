import React, { useEffect } from 'react'
import ReleasesList from '../../components/ReleaseList/ReleaseList'

const MOCK_DATA = [
    {
        url: 'https://api.github.com/repos/mbrn/material-table/releases/28482554',
        assets_url: 'https://api.github.com/repos/mbrn/material-table/releases/28482554/assets',
        upload_url: 'https://uploads.github.com/repos/mbrn/material-table/releases/28482554/assets{?name,label}',
        html_url: 'https://github.com/mbrn/material-table/releases/tag/v1.65.0',
        id: 28482554,
        node_id: 'MDc6UmVsZWFzZTI4NDgyNTU0',
        tag_name: 'v1.65.0',
        target_commitish: 'master',
        name: 'v1.65.0',
        draft: false,
        author: {
            login: 'mbrn',
            id: 7895451,
            node_id: 'MDQ6VXNlcjc4OTU0NTE=',
            avatar_url: 'https://avatars3.githubusercontent.com/u/7895451?v=4',
            gravatar_id: '',
            url: 'https://api.github.com/users/mbrn',
            html_url: 'https://github.com/mbrn',
            followers_url: 'https://api.github.com/users/mbrn/followers',
            following_url: 'https://api.github.com/users/mbrn/following{/other_user}',
            gists_url: 'https://api.github.com/users/mbrn/gists{/gist_id}',
            starred_url: 'https://api.github.com/users/mbrn/starred{/owner}{/repo}',
            subscriptions_url: 'https://api.github.com/users/mbrn/subscriptions',
            organizations_url: 'https://api.github.com/users/mbrn/orgs',
            repos_url: 'https://api.github.com/users/mbrn/repos',
            events_url: 'https://api.github.com/users/mbrn/events{/privacy}',
            received_events_url: 'https://api.github.com/users/mbrn/received_events',
            type: 'User',
            site_admin: false,
        },
        prerelease: false,
        created_at: '2020-07-12T19:27:43Z',
        published_at: '2020-07-12T19:37:18Z',
        assets: [],
        tarball_url: 'https://api.github.com/repos/mbrn/material-table/tarball/v1.65.0',
        zipball_url: 'https://api.github.com/repos/mbrn/material-table/zipball/v1.65.0',
        body:
            "Version 1.65.0 published.\r\n\r\nFix onChange when numeric value. Thanks to @francescovenica \r\nFix typescript error TS2304: Cannot find name 'RowData'. Thanks to Sylvain Thénault\r\nAdd error text to select field. Thanks to @Domino987 \r\nAdd groupTitle to options. Thanks to @developerdu \r\nDo not show hidden columns in columnsButton. Thanks to @esjayrockz \r\nApprove edit/add on enter added. Thanks to @vijaypushkin \r\n",
    },
    {
        id: 2,
        version: 'v1.30.0',
        title: 'Version 1.30.0 published.',
        description:
            'Fix onChange when numeric value. Thanks to @francescovenica Fix typescript error TS2304: Cannot find name "RowData". Thanks to Sylvain Thénault Add error text to select field. Thanks to @Domino987 Add groupTitle to options. Thanks to @developerdu Do not show hidden columns in columnsButton. Thanks to @esjayrockz Approve edit/add on enter added. Thanks to @vijaypushkin',
    },
]

function Releases() {
    // useEffect(() => {
    //     fetch('https://api.github.com/repos/mbrn/material-table/releases/latest')
    //         .then((response) => response.json())
    //         .then((data) => console.log(data))
    // }, [])

    return <ReleasesList repository={MOCK_DATA} />
}

export default Releases
