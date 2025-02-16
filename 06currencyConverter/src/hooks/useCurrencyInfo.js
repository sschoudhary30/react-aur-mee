import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({}); // ✅ Start with an empty object

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch currency data");
        }
        const result = await response.json();
        console.log("Fetched data:", result); // ✅ Debugging

        if (result && result[currency]) {
          setData(result[currency]); // ✅ Only update if valid data exists
        } else {
          setData({}); // ✅ Fallback in case data is missing
        }
      } catch (error) {
        console.error("Error fetching currency data:", error);
        setData({}); // ✅ Prevent app from breaking on errors
      }
    };

    fetchData();
  }, [currency]); // ✅ Updates when 'currency' changes

  return data; // ✅ Returns exchange rate object
}

export default useCurrencyInfo;

// ye custom hook hai .
// custom hook can use per build hook.
// same custom hook return data and function
