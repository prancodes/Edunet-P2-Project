// A service to interact with user profile API
export const fetchUserProfile = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/user/profile'); // Assuming the backend API
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching user profile:", error);
    }
  };
  
  export const updateUserProfile = async (updatedData) => {
    try {
      const response = await fetch('http://localhost:5000/api/user/profile', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedData),
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error updating user profile:", error);
    }
  };
  