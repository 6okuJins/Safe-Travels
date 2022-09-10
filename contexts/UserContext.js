import React, { useContext, useState } from 'react';

const UserContext = React.createContext();
const UpdateUserContext = React.createContext();

export function useUserContext() {
  return useContext(UserContext);
}
export function useUpdateUserContext() {
  return useContext(UpdateUserContext);
}
export function UserContextProvider({ children }) {
  const [auth, setAuth] = useState();
  return (
    <UserContext.Provider value={auth} >
      <UpdateUserContext.Provider value={setAuth}>
        {children}
      </UpdateUserContext.Provider>
    </UserContext.Provider>
  )
}