// A service to interact with transactions API
export const fetchTransactions = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/transactions'); // Assuming the backend API
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching transactions:", error);
    }
  };
  