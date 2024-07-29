import React, { createContext, useContext, useState, useEffect } from 'react';

// Define the mock function to simulate fetching user data from an API
const getUserInfoFromAPI = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        name: 'John Doe',
        profilePic: 'https://example.com/profile-pic.jpg',
        email: 'john.doe@example.com'
      });
    }, 1000); // 1 second delay
  });
};

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({ isLoggedIn: false, name: '', profilePic: '', email: '' });

  useEffect(() => {
    const fetchUser = async () => {
      const userInfo = await getUserInfoFromAPI();
      setUser({ isLoggedIn: true, ...userInfo });
    };

    fetchUser();
  }, []);

  return (
    <UserContext.Provider value={user}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
