import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
    List,
    ListItem,
    Input
} from "@material-tailwind/react";
import {exploreData, resourceLinks} from '../../data/explore-data';

const explore = () => {
    let navigate = useNavigate();
    let location = useLocation();
    const routeChange = (newPath: string) => {
        navigate(location.pathname + "/" + newPath);
    }

    const [open, setOpen] = useState(1);
    const [filteredData, setFilteredData] = useState(exploreData);

    const handleOpen = (value: number) => setOpen(open === value ? 0 : value);
    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        const searchTerm = e.target.value.toLowerCase();
        const filtered = Object.keys(exploreData).reduce((acc, category) => {
            const filteredItems = exploreData[category].filter(item =>
                item.toLowerCase().includes(searchTerm)
            );
            if (filteredItems.length > 0) {
                acc[category] = filteredItems;
            }
            return acc;
        }, {});
        setFilteredData(filtered);
    }
    
    return (
        <>
            <div className="w-[90%] mt-6 mx-auto text-center">
                <Input
                    type="text"
                    placeholder="Search for resources..."
                    className="!border !border-gray-300 bg-white rounded-full text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 placeholder:opacity-100 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
                    labelProps={{className: "hidden"}}
                    onChange={handleSearch}
                />

                {Object.entries(filteredData).map(([category, items], index) => (
                    <Accordion key={index} open={open === index}>
                        <AccordionHeader className="text-md" onClick={() => handleOpen(index)}>
                            {category}
                        </AccordionHeader>
                        <AccordionBody>
                            <List>
                                {items.map((item, itemIndex) => (
                                    <ListItem key={itemIndex} onClick={() => routeChange(item.toLowerCase().replace(/\s+/g, '-'))}>
                                        {item}
                                    </ListItem>
                                ))}
                            </List>
                        </AccordionBody>
                    </Accordion>
                ))}
            </div>
        </>
    )
}

export default explore