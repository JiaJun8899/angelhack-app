import React from 'react'
import Navbar from '../../components/navbar'
import Header from '../../components/header'

const explore = () => {
    return (
        <>
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                <Header />
                <Navbar />
            </div>
        </>
    )
}

export default explore