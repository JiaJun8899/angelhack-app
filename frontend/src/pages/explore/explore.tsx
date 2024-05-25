import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import Navbar from '../../components/navbar'
import Header from '../../components/header'
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
    List,
    ListItem,
    Input
} from "@material-tailwind/react";

const explore = () => {
    let navigate = useNavigate();
    let location = useLocation();
    const routeChange = (newPath: string) => {
        navigate(location.pathname + "/" + newPath);
    }

    const [open, setOpen] = React.useState(1);
    const handleOpen = (value) => setOpen(open === value ? 0 : value);

    return (
        <>
            <div className='flex flex-col items-center overflow-hidden w-auto'>
                <Header />
                <div className="mt-6">
                    <Input
                        type="text"
                        placeholder="Search for resources..."
                        className="!border !border-gray-300 bg-white rounded-full text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 placeholder:opacity-100 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10 w-[90%] m-auto"
                        labelProps={{
                            className: "hidden",
                        }}
                    />
                    <Accordion open={open === 1}>
                        <AccordionHeader onClick={() => handleOpen(1)}>Banking</AccordionHeader>
                        <AccordionBody>
                            <List>
                                <ListItem onClick={() => routeChange("savings-account")}>Savings Account</ListItem>
                                <ListItem>Fixed Deposits</ListItem>
                            </List>
                        </AccordionBody>
                    </Accordion>
                    <Accordion open={open === 2}>
                        <AccordionHeader onClick={() => handleOpen(2)}>
                            Loans
                        </AccordionHeader>
                        <AccordionBody>
                            <List>
                                <ListItem onClick={() => routeChange("education-loan")}>Education Loans</ListItem>
                                <ListItem>Car Loans</ListItem>
                                <ListItem>Home Loans</ListItem>
                                <ListItem>Renovation Loans</ListItem>
                                <ListItem>Personal Loans</ListItem>
                            </List>
                        </AccordionBody>
                    </Accordion>
                    <Accordion open={open === 3}>
                        <AccordionHeader onClick={() => handleOpen(3)}>
                            Investments
                        </AccordionHeader>
                        <AccordionBody>
                            We&apos;re not always in the position that we want to be at. We&apos;re constantly
                            growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express
                            ourselves and actualize our dreams.
                        </AccordionBody>
                    </Accordion>
                </div>
                <div className="glossary">
                    <h1>Glossary</h1>
                </div>
                <Navbar />
            </div>
        </>
    )
}

export default explore