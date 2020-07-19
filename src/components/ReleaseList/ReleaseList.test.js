import React from 'react'
import { render, cleanup } from '@testing-library/react'
import { screen } from '@testing-library/dom'

import '@testing-library/jest-dom/extend-expect'

import ReleaseList from './ReleaseList'

afterEach(() => {
    cleanup()
})

test('it should render Release items elements the length number of REPOS', () => {
    const REPOS = [
        {
            id: 1,
            body: 'a description about the release',
            name: 'the version number of the release',
            published_at: 'the date of the release',
        },
        {
            id: 2,
            body: 'a description about the release',
            name: 'the version number of the release',
            published_at: 'the date of the release',
        },
        {
            id: 3,
            body: 'a description about the release',
            name: 'the version number of the release',
            published_at: 'the date of the release',
        },
    ]

    render(<ReleaseList repository={REPOS} />)

    expect(screen.queryAllByTestId('version-date').length).toEqual(REPOS.length)
    expect(screen.queryAllByTestId('version-number').length).toEqual(REPOS.length)
    expect(screen.queryAllByTestId('version-description').length).toEqual(REPOS.length)
})
