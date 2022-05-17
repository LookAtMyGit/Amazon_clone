import { useState, useEffect } from "react";
import api from "../api/products";
const useData = () => {
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await api.get(`/products?title=${query}`);
      setData(response.data);
    };
    fetchData();
  }, [query]);
  return [data, query, setQuery];
};

export default useData;
