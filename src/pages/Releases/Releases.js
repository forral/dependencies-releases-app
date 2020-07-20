import React, { useEffect, useState } from 'react'
import ReleasesList from '../../components/ReleaseList/ReleaseList'

// const REPOS_INFO = [
//     { owner: 'mbrn', repo: 'material-table' },
//     { owner: 'babel', repo: 'babel' },
// ]

const MOCK_DATA = [
    {
        url: 'https://api.github.com/repos/mbrn/material-table/releases/28714063',
        assets_url: 'https://api.github.com/repos/mbrn/material-table/releases/28714063/assets',
        upload_url: 'https://uploads.github.com/repos/mbrn/material-table/releases/28714063/assets{?name,label}',
        html_url: 'https://github.com/mbrn/material-table/releases/tag/v1.66.0',
        id: 28714063,
        node_id: 'MDc6UmVsZWFzZTI4NzE0MDYz',
        tag_name: 'v1.66.0',
        target_commitish: 'master',
        name: 'v1.66.0',
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
        created_at: '2020-07-19T15:06:33Z',
        published_at: '2020-07-19T15:10:05Z',
        assets: [],
        tarball_url: 'https://api.github.com/repos/mbrn/material-table/tarball/v1.66.0',
        zipball_url: 'https://api.github.com/repos/mbrn/material-table/zipball/v1.66.0',
        body:
            "Version 1.66.0 published.\r\n\r\nfix React.node issue. Thanks to @developerdu \r\nFix for validatewith string. Thanks to @Domino987 \r\nChanged the filtering in 'getTableData' to no longer exclude hidden columns. Thanks to Jared Stark\r\nFix invalid expressions. Thanks to @HuangStomach \r\nguarding jsPDF to only import / run when window is present. Thanks to Florian Uhde\r\nChanges ISO dates to use date-fns's parseISO function instead of Date. Thanks to @ajmueller \r\nAdds a new table option which allows a user to pass properties to the select all checkbox in the table header. Thanks to Gunnar Bell",
    },
    {
        url: 'https://api.github.com/repos/babel/babel/releases/28556229',
        assets_url: 'https://api.github.com/repos/babel/babel/releases/28556229/assets',
        upload_url: 'https://uploads.github.com/repos/babel/babel/releases/28556229/assets{?name,label}',
        html_url: 'https://github.com/babel/babel/releases/tag/v7.10.5',
        id: 28556229,
        node_id: 'MDc6UmVsZWFzZTI4NTU2MjI5',
        tag_name: 'v7.10.5',
        target_commitish: 'main',
        name: '',
        draft: false,
        author: {
            login: 'babel-bot',
            id: 21250019,
            node_id: 'MDQ6VXNlcjIxMjUwMDE5',
            avatar_url: 'https://avatars1.githubusercontent.com/u/21250019?v=4',
            gravatar_id: '',
            url: 'https://api.github.com/users/babel-bot',
            html_url: 'https://github.com/babel-bot',
            followers_url: 'https://api.github.com/users/babel-bot/followers',
            following_url: 'https://api.github.com/users/babel-bot/following{/other_user}',
            gists_url: 'https://api.github.com/users/babel-bot/gists{/gist_id}',
            starred_url: 'https://api.github.com/users/babel-bot/starred{/owner}{/repo}',
            subscriptions_url: 'https://api.github.com/users/babel-bot/subscriptions',
            organizations_url: 'https://api.github.com/users/babel-bot/orgs',
            repos_url: 'https://api.github.com/users/babel-bot/repos',
            events_url: 'https://api.github.com/users/babel-bot/events{/privacy}',
            received_events_url: 'https://api.github.com/users/babel-bot/received_events',
            type: 'User',
            site_admin: false,
        },
        prerelease: false,
        created_at: '2020-07-14T18:10:39Z',
        published_at: '2020-07-14T18:25:50Z',
        assets: [],
        tarball_url: 'https://api.github.com/repos/babel/babel/tarball/v7.10.5',
        zipball_url: 'https://api.github.com/repos/babel/babel/zipball/v7.10.5',
        body:
            "## v7.10.5 (2020-07-14)\r\n\r\nThanks @jayaddison and @RafaelSalguero for their first PRs!\r\n\r\n#### :bug: Bug Fix\r\n* `babel-helper-builder-react-jsx-experimental`, `babel-helper-create-class-features-plugin`, `babel-helper-member-expression-to-functions`, `babel-helper-module-transforms`, `babel-helper-transform-fixture-test-runner`, `babel-plugin-proposal-async-generator-functions`, `babel-plugin-proposal-decorators`, `babel-plugin-proposal-function-bind`, `babel-plugin-proposal-partial-application`, `babel-plugin-proposal-pipeline-operator`, `babel-plugin-transform-block-scoping`, `babel-plugin-transform-modules-amd`, `babel-plugin-transform-modules-systemjs`, `babel-plugin-transform-parameters`, `babel-plugin-transform-react-jsx-source`, `babel-plugin-transform-runtime`, `babel-plugin-transform-template-literals`, `babel-plugin-transform-typescript`\r\n  * [#11807](https://github.com/babel/babel/pull/11807) Disallow duplicated AST nodes ([@JLHwung](https://github.com/JLHwung))\r\n* `babel-parser`\r\n  * [#11814](https://github.com/babel/babel/pull/11814) fix: add optional: false to chained optional call expression ([@JLHwung](https://github.com/JLHwung))\r\n  * [#11774](https://github.com/babel/babel/pull/11774) fix: throw expect jsx plugin error when an idStart or > is seen ([@JLHwung](https://github.com/JLHwung))\r\n* `babel-plugin-transform-typescript`\r\n  * [#11816](https://github.com/babel/babel/pull/11816) Typescript transform now removes generic arguments from optional calls (Closes [#11813](https://github.com/babel/babel/issues/11813)) ([@RafaelSalguero](https://github.com/RafaelSalguero))\r\n* `babel-plugin-transform-block-scoping`\r\n  * [#11802](https://github.com/babel/babel/pull/11802) Fix break/continue when switch is nested inside loop ([@existentialism](https://github.com/existentialism))\r\n* `babel-generator`, `babel-plugin-transform-typescript`, `babel-types`\r\n  * [#11582](https://github.com/babel/babel/pull/11582) Refactor generated builder names in @babel/types ([@zxbodya](https://github.com/zxbodya))\r\n* `babel-compat-data`\r\n  * [#11783](https://github.com/babel/babel/pull/11783) fix: update class properties support matrix ([@JLHwung](https://github.com/JLHwung))\r\n\r\n#### :memo: Documentation\r\n* Other\r\n  * [#11799](https://github.com/babel/babel/pull/11799) docs: update README example and REPL link ([@JLHwung](https://github.com/JLHwung))\r\n  * [#11761](https://github.com/babel/babel/pull/11761) Add note about running Make targets in Windows 10 ([@kaicataldo](https://github.com/kaicataldo))\r\n* `babel-parser`\r\n  * [#11729](https://github.com/babel/babel/pull/11729) docs: add AST spec on optional chain [skip ci] ([@JLHwung](https://github.com/JLHwung))\r\n\r\n#### :house: Internal\r\n* `babel-cli`, `babel-compat-data`, `babel-core`, `babel-helper-define-map`, `babel-helper-fixtures`, `babel-helper-module-transforms`, `babel-helper-regex`, `babel-helper-transform-fixture-test-runner`, `babel-node`, `babel-plugin-transform-proto-to-assign`, `babel-register`, `babel-traverse`, `babel-types`\r\n  * [#11818](https://github.com/babel/babel/pull/11818) Bump some deps for audit ([@existentialism](https://github.com/existentialism))\r\n* `babel-helper-fixtures`, `babel-traverse`\r\n  * [#11811](https://github.com/babel/babel/pull/11811) Replace lodash 'clone' usage with ES6 Spread initializer ([@jayaddison](https://github.com/jayaddison))\r\n* `babel-helper-fixtures`, `babel-helper-transform-fixture-test-runner`\r\n  * [#11812](https://github.com/babel/babel/pull/11812) Replace lodash 'extend' usage with Object.assign ([@jayaddison](https://github.com/jayaddison))\r\n* `babel-plugin-transform-block-scoping`\r\n  * [#11798](https://github.com/babel/babel/pull/11798) Reduce dependency on lodash functions: values, extends ([@jayaddison](https://github.com/jayaddison))\r\n* `babel-generator`, `babel-plugin-transform-typescript`, `babel-types`\r\n  * [#11582](https://github.com/babel/babel/pull/11582) Refactor generated builder names in @babel/types ([@zxbodya](https://github.com/zxbodya))\r\n* `babel-cli`, `babel-generator`, `babel-helper-transform-fixture-test-runner`, `babel-traverse`, `babel-types`\r\n  * [#11790](https://github.com/babel/babel/pull/11790) Reduce dependency on lodash functions: includes, uniq, repeat, isinteger ([@jayaddison](https://github.com/jayaddison))\r\n* Other\r\n  * [#11782](https://github.com/babel/babel/pull/11782) chore: refine yarn cache config ([@JLHwung](https://github.com/JLHwung))\r\n* `babel-register`\r\n  * [#11780](https://github.com/babel/babel/pull/11780) test: add console warn spy on babel-register tests ([@JLHwung](https://github.com/JLHwung))\r\n  * [#11776](https://github.com/babel/babel/pull/11776) chore: remove babel-register generated test artifacts ([@JLHwung](https://github.com/JLHwung))\r\n\r\n#### Committers: 7\r\n- Bogdan Savluk ([@zxbodya](https://github.com/zxbodya))\r\n- Brian Ng ([@existentialism](https://github.com/existentialism))\r\n- Huáng Jùnliàng ([@JLHwung](https://github.com/JLHwung))\r\n- James Addison ([@jayaddison](https://github.com/jayaddison))\r\n- Kai Cataldo ([@kaicataldo](https://github.com/kaicataldo))\r\n- Nicolò Ribaudo ([@nicolo-ribaudo](https://github.com/nicolo-ribaudo))\r\n- Rafael Salguero Iturrios ([@RafaelSalguero](https://github.com/RafaelSalguero))",
    },
]

function Releases() {
    const [releases, setReleases] = useState([])

    useEffect(() => {
        if (releases.length === 0) {
            // const urls = buildEndPointURLs()

            // Promise.all(
            //     urls.map((url) =>
            //         fetch(url)
            //             .then(function checkStatus(response) {
            //                 if (response.ok) {
            //                     return Promise.resolve(response)
            //                 } else {
            //                     return Promise.reject(new Error(response.statusText))
            //                 }
            //             })
            //             .then(function parseJSON(response) {
            //                 return response.json()
            //             })
            //             .catch(function (error) {
            //                 // if there's an error, log it
            //                 console.log(error)
            //             })
            //     )
            // ).then(setReleases)

            setReleases(MOCK_DATA)
        }
    }, [releases])

    // function buildEndPointURLs() {
    //     return REPOS_INFO.map(
    //         (repoInfo) => `https://api.github.com/repos/${repoInfo.owner}/${repoInfo.repo}/releases/latest`
    //     )
    // }

    return <ReleasesList repository={releases} />
}

export default Releases
