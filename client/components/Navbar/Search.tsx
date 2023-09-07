import React from 'react'
import { SearchIcon } from "../Icons/Navbar/SearchIcon";

import {
    NavbarContent,
    Input,
} from "@nextui-org/react";

export default function Search() {
    return (
        <NavbarContent className="hidden sm:flex gap-4 w-full border-2 border-none" justify="center" >
            <Input
                classNames={{
                    base: "max-w-full sm:max-w-[25rem] h-10",
                    mainWrapper: "h-full",
                    input: "text-small",
                    inputWrapper: "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
                }}
                placeholder="Type to search..."
                size="sm"
                startContent={<SearchIcon size={18} width={undefined} height={undefined} />}
                type="search"
            />
        </NavbarContent>
    )
}
