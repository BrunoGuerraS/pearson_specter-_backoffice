import { render, screen } from "@testing-library/react"
import Header from "./Header"

describe('Header', () => {
    test('should render', () => {
        render(<Header />)
        expect(screen.getByText('Header')).toBeDefined()
    })
})