import React from 'react'
import Header from '../../components/header'
import Navbar from '../../components/navbar'
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";

const SavingsAccount = () => {
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
                <div className="mt-6">
                    <Card className="mt-6 w-96">
                        <CardHeader color="blue-gray" className="relative h-56">
                            <img
                                src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                                alt="card-image"
                            />
                        </CardHeader>
                        <CardBody>
                            <Typography variant="h5" color="blue-gray" className="mb-2">
                                Savings Account
                            </Typography>
                            <Typography>
                            A savings account is a type of bank account where you can deposit your money and earn interest on it over time. It's meant for saving rather than everyday transactions, so it typically offers a higher interest rate than a checking account. 
                            <br/>
                            You can deposit and withdraw money as needed, but there might be limits on how often you can take money out without incurring fees. It's a safe and reliable way to store your money while earning a little extra through interest.
                            </Typography>
                        </CardBody>
                    </Card>
                </div>
                <Navbar />
            </div>
        </>
    )
}

export default SavingsAccount