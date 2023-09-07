import React from 'react'
import { Button } from "@nextui-org/react";
import { useRouter } from 'next/router';

function CustomButton(props: any) {
  const router = useRouter();

  const handleButtonClick = () => {
    if (props.children === 'asd') {
      router.push('/login/signin');
    }
  };

  return (
    <Button color="primary" onClick={handleButtonClick}>
      {props.children}
    </Button>
  )
}

function CustomWButton(props: any) {
  const router = useRouter();

  const handleButtonClick = () => {
    if (props.children === 'asd') {
      router.push('/login/signin');
    }
  };

  return (
    <Button color="primary" fullWidth onClick={handleButtonClick}>
      {props.children}
    </Button>
  )
}

export { CustomButton, CustomWButton };
