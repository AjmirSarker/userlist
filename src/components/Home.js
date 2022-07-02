import React, { useEffect, useState } from 'react';
import './Home.css';
import Loading from './Loading';
import { useQuery } from 'react-query';

const Home = () => {
  const [user, setUser] = useState([]);

  const image = [
    'https://i.ibb.co/MRq7MQg/eight.jpg',
    'https://i.ibb.co/B3g6xBL/five.jpg',
    'https://i.ibb.co/GtxdthC/four.jpg',
    'https://i.ibb.co/ThnkwtT/nine.jpg',
    'https://i.ibb.co/HH83Yg0/one.jpg',
    'https://i.ibb.co/Y86KzhV/seven.jpg',
    'https://i.ibb.co/1fP23b8/six.jpg',
    'https://i.ibb.co/c32zwZt/ten.jpg',
    'https://i.ibb.co/6PQhK3f/three.jpg',
    'https://i.ibb.co/QJGgQDW/two.jpg',
    'https://i.ibb.co/MRq7MQg/eight.jpg',
    'https://i.ibb.co/B3g6xBL/five.jpg'
  ];
  let i = 1;

  const {
    data: users,
    isLoading,
    refetch
  } = useQuery('usered', () =>
    fetch('https://602e7c2c4410730017c50b9d.mockapi.io/users').then((res) =>
      res.json()
    )
  );
  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div className="home d-flex justify-content-center align-items-center">
      <div className="home-2 d-flex flex-wrap align-items-center justify-content-center">
        <div className="users">
          {users?.map((userOne) => (
            <div className="d-flex flex-wrap justify-content-between align-items-center">
              <div className="d-flex flex-wrap align-items-center justify-content-center">
                <p className="user-nm">{i++}.</p>
                <img className="user-img" src={image[i]} alt="" />

                <h5 className="user-name">
                  {userOne?.profile?.firstName} {userOne?.profile?.lastName}
                </h5>
              </div>
              <br />
              <button
                className="user-btn"
                onClick={() => {
                  setUser(userOne);

                  refetch();
                  console.log(user);
                }}
              >
                Details
              </button>
            </div>
          ))}
          {/* <Loading></Loading> */}
        </div>
        <div className="user-details-2">
          <div className="sticky-top user-detail">
            {user.profile ? (
              <div className="d-flex flex-column justify-content-center align-items-center">
                {/* <p className='user-ft'>{user.profile.username.substring(0, 1)}</p> */}
                <img
                  className="user-ft-2"
                  src={image[user?.id - 1 + 2]}
                  alt=""
                />

                <p className="text-center">@{user?.profile?.username}</p>
                <div>
                  <p className="user-bio">{user?.Bio}</p>
                  <div className="name">
                    <p className="name-2">Full Name</p>
                    <p className="name-3">
                      {user?.profile?.firstName} {user?.profile?.lastName}
                    </p>
                  </div>
                  <div className="name">
                    <p className="name-2">Job Title</p>
                    <p className="job-title">{user?.jobTitle}</p>
                  </div>
                  <div className="name">
                    <p className="name-2">Email</p>
                    <p className="name-3">{user?.profile?.email}</p>
                  </div>
                </div>
              </div>
            ) : (
              <p className="text-center">Please click any user for details</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
