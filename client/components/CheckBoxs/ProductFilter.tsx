import React from 'react';
import { Accordion, AccordionItem, CheckboxGroup, Checkbox } from '@nextui-org/react';

type VariationsType = {
    title: string;
    options: {
        [key: string]: string[];
    };
};

interface ProductFilterProps {
    variation: VariationsType;
}

function ProductFilter({ variation }: ProductFilterProps) {
    return (
        <Accordion selectionMode="multiple" variant="splitted" className='border-2 border-blue-500'>
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
    );
}

export default ProductFilter;
