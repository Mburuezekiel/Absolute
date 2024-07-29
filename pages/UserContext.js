// import React, { createContext, useContext, useState, useEffect } from 'react';

// const UserContext = createContext();

// export const UserProvider = ({ children }) => {
//   const [user, setUser] = useState({ isLoggedIn: false, name: '', profilePic: '' });

//   useEffect(() => {
  
//     const fetchUser = async () => {
      
//       const userInfo = await getUserInfoFromAPI();
//       setUser({ isLoggedIn: true, ...userInfo });
//     };

//     fetchUser();
//   }, []);

//   return (
//     <UserContext.Provider value={user}>
//       {children}
//     </UserContext.Provider>
//   );
// };

// export const useUser = () => useContext(UserContext);
