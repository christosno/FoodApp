import React, { useState } from "react";

const useFetch = (config, applyData) => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchFunction = async () => {
    setIsLoading(true);
    try {
      const data = await fetch(config.url, {
        method: config.method ? config.method : "GET",
        headers: config.headers ? config.headers : {},
        body: config.body ? JSON.stringify(config.body) : null,
      });
      if (!data.ok) {
        throw new Error(data.status + " Ooops... we could not fetch data");
      }
      const restaurantData = await data.json();
      applyData(restaurantData);
    } catch (error) {
      setError(error.message || "Something went wrong!");
    }
    setIsLoading(false);
  };

  return {
    isLoading,
    error,
    fetchFunction,
  };
};

export default useFetch;
