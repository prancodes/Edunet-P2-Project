import axios from "axios";

export const fetchWalletBalance = async () => {
  const response = await axios.get("/api/wallet");
  return response.data;
};
