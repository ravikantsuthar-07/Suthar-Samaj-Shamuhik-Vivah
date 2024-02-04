import React from 'react'
import Footer from './Footer'
import NavBar from './NavBar'

export default function Layout({ children, title, description, keywords, author }) {
    return (
        <>
            <NavBar />
            <main style={{ minHeight: '80vh' }}>
                {children}
            </main>
            <Footer />
        </>
    )
}