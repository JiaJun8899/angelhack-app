import React from 'react'
import Navbar from '../../components/navbar'
import Header from '../../components/header'

const profile: React.FC = () => {  
    const name = "John Doe";
    const additionalBio = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac lobortis libero.";
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
                        <div className="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                            <svg className="absolute w-12 h-12 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
                        </div>
                        <h2 className="text-xl font-bold">{name}</h2>
                        <p className="text-gray-600 mt-2">Age: 70</p>
                        <p className="text-gray-600 mt-2">Birth Date: 02/05/1940</p>
                        <p className="text-gray-600 mt-2">Financial Literacy: Low</p>
                    </div>
                </div>
                <hr className="w-full border-gray-300 mb-4" />
                <div className="bg-white rounded-lg shadow-md p-6">
                    <p className="text-lg font-semibold mb-2">Additional Bio</p>
                    <p className="text-gray-600 mt-2">Financial Goals: {additionalBio}</p>
                    <p className="text-gray-600 mt-2">Interest: {additionalBio}</p>
                    <p className="text-gray-600 mt-2">Spending Habits: {additionalBio}</p>
                    <p className="text-gray-600 mt-2">Risk Tolerance: {additionalBio}</p>
                    <p className="text-gray-600 mt-2">Achievements: {additionalBio}</p>
                    <div className="flex mt-4 md:mt-6">
                        <a href="#" className="py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Edit</a>
                    </div>
                </div>
            </div>
        </div>
        <Navbar />
    </div>
    </>
    )
}

export default profile;
