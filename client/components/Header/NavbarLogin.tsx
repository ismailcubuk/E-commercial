import React from "react";
import Image from 'next/image';
import ShantyIcon from "./shanty.png";

import Search from '@/components/Header/Search'
import Login from '@/components/Header/Login'
import ShoppingCartBadge from '@/components/Header/ShoppingCartBadge'

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
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


        <Search />
        <Login />
        <ShoppingCartBadge />




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
