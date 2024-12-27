// src/pages/ProfilePage.jsx

import React, { useEffect, useState } from 'react';
import { fetchUserProfile } from '../utils/authUtils';

const ProfilePage = () => {
  const [userProfile, setUserProfile] = useState(null);

  useEffect(() => {
    const profile = fetchUserProfile(); // Get mock profile data
    setUserProfile(profile);
  }, []);

  return (
    <div>
      {userProfile ? (
        <div>
          <h1>{userProfile.name}</h1>
          <p>Email: {userProfile.email}</p>
          <h2>Transactions:</h2>
          <ul>
            {userProfile.transactions.map((transaction) => (
              <li key={transaction.id}>
                Amount: ${transaction.amount} on {transaction.date}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ProfilePage;
