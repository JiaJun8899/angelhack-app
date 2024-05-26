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
    List,
    ListItem,
} from "@material-tailwind/react";
import { savingsAccountLinks } from '../../data/explore-data';

const SavingsAccount = () => {
    return (
        <>
            <div className="mt-6 max-w-md">
                <Card className="w-[90%] m-auto mt-6 mb-24">
                    <CardHeader color="blue-gray" className="relative h-56">
                        <img
                            src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                            alt="card-image"
                        />
                    </CardHeader>
                    <CardBody>
                        <Typography variant="h4" color="blue-gray" className="mb-2">
                            Savings Account
                        </Typography>
                        <Typography>
                            A savings account is a type of bank account where you can deposit your money and earn interest on it over time.
                            <br />
                            <br />
                            It's meant for saving rather than everyday transactions, so it typically offers a higher interest rate than a checking account.
                            <br />
                            <br />
                            You can deposit and withdraw money as needed, but there might be limits on how often you can take money out without incurring fees.
                            It's a safe and reliable way to store your money while earning a little extra through interest.
                        </Typography>
                        <br />
                        <Typography variant="h4" color="blue-gray" className="mb-2">
                            Create with our partners
                        </Typography>
                        <Typography>
                            <List>
                                {
                                    savingsAccountLinks.map((link, index) => {
                                        const bankName = Object.keys(link)[0];
                                        const bankLink = link[bankName];
                                        console.log(bankName, bankLink);
                                        return (
                                            <a className='underline' href={bankLink} key={index} target="_blank" rel="noreferrer">
                                                <ListItem>
                                                    {bankName}
                                                </ListItem>
                                            </a>
                                        )
                                    })
                                }
                            </List>
                        </Typography>
                    </CardBody>
                </Card>
            </div>
        </>
    )
}

export default SavingsAccount