import React, { useEffect } from 'react';
import HeadphonesList from "@/components/HeadphonesList";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setUserData } from '@/redux/slices/userSlice';
import jwt from 'jsonwebtoken';

function index() {
  const dispatch = useDispatch();

  const { firstName, lastName } = useSelector((state: any) => state.user);
  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
        const decodedToken = jwt.decode(token);

        if (decodedToken) {
            dispatch(setUserData({
                email: decodedToken.email,
                firstName: decodedToken.firstName,
                lastName: decodedToken.lastName,
            }));
        }
    }
}, [dispatch]);
  return (
    <div>
      <HeadphonesList />
      <div>
        <div>
          User First Name: {firstName}
          User Last Name: {lastName}
        </div>
      </div>
    </div>
  )
}

export default index