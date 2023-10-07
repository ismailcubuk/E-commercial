import React from 'react'
import HeadphonesList from "@/components/HeadphonesList";
import { useSelector } from 'react-redux';

function index() {
  const { firstName, lastName, email } = useSelector((state) => state.user);
  return (
    <div>
      <HeadphonesList />
      <div>
        user firstname : {firstName}
      </div>
      <div>
        user lastname : {lastName}
      </div>
      <div>
        user mail : {email}
      </div>
    </div>
  )
}

export default index