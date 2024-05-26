import React from 'react'
import Navbar from '../../components/navbar'
import Header from '../../components/header'
import {
    Card,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";
import { useLocation, useNavigate } from 'react-router-dom';

const login: React.FC = () => {
    let navigate = useNavigate();
    let location = useLocation();
    const routeChange = (newPath: string) => {
        navigate(location.pathname + newPath);
    }

    return (
        <>
            <Card className="w-[90%] m-auto mt-20">
                <CardBody>
                    <Typography variant="h5" color="blue-gray" className="mb-2">
                        Login
                    </Typography>
                    <Typography>
                        Login with your singpass to access your profile.
                    </Typography>
                </CardBody>
                <CardFooter className="pt-0">
                    <Button color='red' className='text-white' onClick={() => routeChange("Home")}>Login with Singpass</Button>
                </CardFooter>
            </Card>
        </>
    )
}

export default login;
