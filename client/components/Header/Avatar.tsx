import React from 'react';
import { Avatar, Button, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Badge } from "@nextui-org/react";
import { useRouter } from 'next/router';

export default function ShoppingCartBadge() {
  const avatarImage = "https://i.pravatar.cc/150?u=a042581f4e29026024d";
  const items = [
    {
      key: "Account",
      label: "Account",
      route: "/Account"
    },
    {
      key: "Orders",
      label: "Orders",
      route: "/Orders"

    },
    {
      key: "Favorite",
      label: "Favorite ",
      route: "/Favorite"
    },
    {
      key: "Logout",
      label: "Logout",
      route: "/"
    }
  ];

  const router = useRouter();

  const handleItemClick = (route: string) => {
    router.push(route.toLowerCase());
  };

  const dropdownItems = items.map((item) => (
    <DropdownItem
      key={item.key}
      color={item.key === "Logout" ? "danger" : "default"}
      onClick={() => handleItemClick(item.route)}
      className={item.key === "Logout" ? "bg-red-500 text-white" : "bg-none"}
    >
      {item.label}
    </DropdownItem>
  ));

  return (
    <Dropdown>
      <Badge content="5" color="primary">
        <DropdownTrigger>
          <Button
            radius="md"
            isIconOnly
            variant="bordered"
            color='primary'
            aria-label="Open user menu"
          >
            <Avatar src={avatarImage} radius='md' isBordered />
          </Button>
        </DropdownTrigger>
      </Badge>
      <DropdownMenu className='text-black' >
        {dropdownItems}
      </DropdownMenu>
    </Dropdown>
  );
}
