import React from 'react'
import Footer from './Footer'
import NavBar from './NavBar'

export default function Layout({ children, title, description, keywords, author }) {
    return (
        <>
            <main style={{ minHeight: '80vh' }}>
            <NavBar />
                {children}
            </main>
            <Footer />
        </>
    )
}