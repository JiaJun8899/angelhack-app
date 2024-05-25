import React from 'react'
import {
    Card,
    CardHeader,
    CardBody,
    Typography
} from "@material-tailwind/react";

const EducationLoans = () => {
    return (
        <>
            <div className="mt-6">
                <Card className="w-[90%] m-auto mt-6 mb-24">
                    <CardHeader color="blue-gray" className="relative h-56">
                        <img
                            src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                            alt="card-image"
                        />
                    </CardHeader>
                    <CardBody>
                        <Typography variant="h5" color="blue-gray" className="mb-2">
                            Education Loan
                        </Typography>
                        <Typography>
                            An education loan, also known as a student loan, is a type of financial assistance specifically designed to help students pay for higher education expenses such as tuition fees, books, and living expenses.
                            <br />
                            <br />
                            These loans are offered by banks, financial institutions, and government agencies. They typically have lower interest rates compared to other types of loans and often offer flexible repayment options, such as deferred payments until after graduation.
                            <br />
                            <br />
                            The purpose of education loans is to make higher education more accessible to students who may not have the financial means to afford it otherwise.
                        </Typography>
                    </CardBody>
                </Card>
            </div>
        </>
    )
}

export default EducationLoans