import React from "react";
import { useDispatch } from 'react-redux';
import { toggleMenu } from '../../redux/Features/ToggleMenu/action';

import Search from '@/components/Header/Search'
import Login from '@/components/Header/Login'
import Brand from '@/components/Header/Brand'
import ShoppingCartBadge from '@/components/Header/ShoppingCartBadge'

import {
  Navbar,
  NavbarContent,
  NavbarItem,
  Link,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";

export default function App() {

  function generateItemUrl(item: string) {
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
  const dispatch = useDispatch();
  const handleBrandClick = () => {
    dispatch(toggleMenu());
  };
  return (
    <div>
      <Navbar onMenuOpenChange={handleBrandClick} maxWidth="2xl" className="bg-white" >
        <Brand />
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
