// src/utils/authUtils.js

// Mock login function
export const mockLogin = () => {
    const user = { id: 1, username: 'mockuser', name: 'John Doe' };
    localStorage.setItem('user', JSON.stringify(user));
    return user;
  };
  
  // Check if the user is logged in
  export const isLoggedIn = () => {
    return localStorage.getItem('user') !== null;
  };
  
  // Mock logout function
  export const mockLogout = () => {
    localStorage.removeItem('user');
  };
  
  // Mock function to fetch user profile
  export const fetchUserProfile = () => {
    return {
      id: 1,
      name: 'John Doe',
      email: 'john@example.com',
      transactions: [
        { id: 1, amount: 100, date: '2024-12-01' },
        { id: 2, amount: 50, date: '2024-12-10' },
      ]
    };
  };
  
  // Mock function to fetch transactions
  export const fetchTransactions = () => {
    return [
      { id: 1, amount: 100, date: '2024-12-01' },
      { id: 2, amount: 50, date: '2024-12-10' },
    ];
  };
  