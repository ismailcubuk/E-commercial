import React from 'react';
import { Accordion, AccordionItem, CheckboxGroup, Checkbox } from '@nextui-org/react';
import { Grid, Hidden } from "@mui/material";
import { variations } from '@/components/variants/data';

interface FilterProps {
    category: string;
}

function Filter({ category }: FilterProps) {
    const variation = variations[category];

    if (!variation) {
        return <div>Category not found</div>;
    }

    return (
        <Hidden smDown>
            <Grid item md={4} lg={3} xl={3} className='w-full h-fit py-4  '>
                <Accordion selectionMode="multiple" variant="splitted">
                    {Object.keys(variation.options).map((optionKey) => (
                        <AccordionItem key={optionKey} aria-label={optionKey} title={optionKey}>
                            <CheckboxGroup>
                                {variation.options[optionKey].map((option:string) => (
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
