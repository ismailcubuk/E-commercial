import React from "react";
import Image from 'next/image';

import { SearchIcon } from "./SearchIcon.jsx";
import ShantyIcon from "./shanty.png";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Input
} from "@nextui-org/react";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  function generateItemUrl(item) {
    return `${item.toLowerCase()}`;
  }
  const menuItems = [
    "Headphones",
    "Headset",
    "Keyboard",
    "Mouse",
    "Phone",
    "Shoes",
    "Tracksuit",
    "Tshirt",
    "Watch",
  ];

  return (
    <div>
      <Navbar onMenuOpenChange={setIsMenuOpen} maxWidth="2xl" className="bg-white" >
        <NavbarContent>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden text-black"
          />
          <NavbarBrand className="pr-10 w-full" as={Link} href="/">
            <Image
              src={ShantyIcon}
              alt="My Image"
              width={36}
              height={36}
            />
            <p className="hidden sm:block font-bold font-serif text-inherit  text-shanty text-xl cursor-default">SHANTY</p>
          </NavbarBrand>
        </NavbarContent>
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
        <NavbarContent justify="end">
          <NavbarItem >
            <Button as={Link} color="primary" href="#" variant="solid" className="px-10 font-bold">
              Sign Up
            </Button>
          </NavbarItem>
        </NavbarContent>
        <NavbarMenu >
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color={
                  index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
                }
                className="w-full"
                href={generateItemUrl(item)}
                size="lg"
              >
                {item}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
      <Navbar className="hidden sm:flex border-t-2 bg-mySecond " height={"full"}>
        <NavbarContent justify="center" className="w-full">
          <NavbarItem className="w-full flex justify-between  ">
            {menuItems.map((item, index) => (
              <Link
                href={generateItemUrl(item)}
                key={`${item}-${index}`}
                className=" text-black flex-1 flex justify-center items-center px-4 py-1 font-semibold "
                underline="hover"
              >
                {item}
              </Link>
            ))}
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    </div>
  );
}
