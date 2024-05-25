import React from 'react'
import Navbar from '../../components/navbar'
import Header from '../../components/header'

const login: React.FC = () => {  
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
        <div className="container mx-auto px-4">
            <div className="flex flex-col items-center justify-center mt-10">
                <div className="bg-white rounded-lg shadow-md p-6 mb-4">
                    <div className="flex flex-col items-center justify-center">
                        <h2 className="text-xl font-bold">Login Page</h2>
                        <div className="flex mt-4 md:mt-6">
                            <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">Login with Singpass</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Navbar />
    </div>
    </>
    )
}

export default login;
