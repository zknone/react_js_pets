
import { fetchData } from "../helper/fetchData";
import { useState, useEffect } from "react";

export default function Home  () {
  const [data, setData] = useState<unknown>(null);  
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null); 

  const apiKey = import.meta.env.VITE_API_KEY;


  console.log(apiKey);

  useEffect(() => {
    const fetchMuseumData = async () => {
      try {
        const museumData = await fetchData<unknown>('https://api.harvardartmuseums.org/RESOURCE_TYPE', {
        });
        setData(museumData); 
      } catch (err) {
        setError('Error fetching data');
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    fetchMuseumData(); 
  }, []); 

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
      <h1>Museum Data</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>);
};