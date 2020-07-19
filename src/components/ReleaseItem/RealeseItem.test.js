import React from 'react'
import { render, cleanup } from '@testing-library/react'
import { screen } from '@testing-library/dom'

import '@testing-library/jest-dom/extend-expect'

import ReleaseItem from './ReleaseItem'

afterEach(() => {
    cleanup()
})

test('it should render the date, version number and a description of a release repository', () => {
    const DATE = 'a date'
    const VERSION_NUMBER = 'a version number'
    const DESCRIPTION = 'a description'

    render(<ReleaseItem published_at={DATE} name={VERSION_NUMBER} body={DESCRIPTION} />)

    expect(screen.getByTestId('version-date')).toHaveTextContent(DATE)
    expect(screen.getByTestId('version-number')).toHaveTextContent(VERSION_NUMBER)
    expect(screen.getByTestId('version-description')).toHaveTextContent(DESCRIPTION)
})
