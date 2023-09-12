import React from 'react';
import { Accordion, AccordionItem, CheckboxGroup, Checkbox } from '@nextui-org/react';
import { Grid, Hidden } from "@mui/material";

type VariationsType = {
    title: string;
    options: {
        [key: string]: string[];
    };
};

interface ProductFilterProps {
    variation: VariationsType;
}

function Filter({ variation }: ProductFilterProps) {
    
    return (
        <Hidden smDown>
            <Grid item md={4} lg={3} xl={3} className='w-full h-fit py-4  '>
                <Accordion selectionMode="multiple" variant="splitted">
                    {Object.keys(variation.options).map((optionKey) => (
                        <AccordionItem key={optionKey} aria-label={optionKey} title={optionKey}>
                            <CheckboxGroup >
                                {variation.options[optionKey].map((option) => (
                                    <Checkbox key={option} value={option}>
                                        {option}
                                    </Checkbox>
                                ))}
                            </CheckboxGroup>
                        </AccordionItem>
                    ))}
                </Accordion>
            </Grid>
        </Hidden>

    );
}

export default Filter;
