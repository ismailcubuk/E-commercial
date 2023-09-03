import React from 'react'
import { Button } from "@nextui-org/react";
import { useRouter } from 'next/router';

function CustomButton(props: { children: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined; }) {

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

export default CustomButton
