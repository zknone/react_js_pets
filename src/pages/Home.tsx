import { fetchData } from "../helper/fetchData";
import { useState, useEffect } from "react";
import { MuseumData } from "../type/content";

export default function Home() {
  const [data, setData] = useState<MuseumData | null>(null);  
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null); 
  const [page, setPage] = useState<number>(1);

  const apiKey = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    const fetchMuseumData = async (page: number) => {
      setLoading(true);
      setError(null);

      try {
        const museumData = await fetchData<MuseumData>(`https://api.harvardartmuseums.org/exhibition?hasimage=1&apikey=${apiKey}&page=${page}`, {
          method: 'GET',
        });
        setData(museumData);
      } catch (err) {
        setError('Error fetching data');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchMuseumData(page);
  }, [apiKey, page]); // Зависимость от 'page' для обновления при изменении страницы

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
      <h1>Museum Data</h1>
      {data?.records.length ? (
        <div>
          {data.records.map((item, index) => (
            <div key={index}>
              <h3>{item.title}</h3>
              <img src={`${item.primaryimageurl}?height=300&width=300`} alt={item.title} />
            </div>
          ))}
        </div>
      ) : (
        <div>No records found</div>
      )}
      <div>
        <button onClick={() => setPage(page - 1)} disabled={page <= 1}>Previous</button>
        <span>Page {page}</span>
        <button onClick={() => setPage(page + 1)} disabled={page >= (data?.info.pages || 1)}>Next</button>
      </div>
    </>
  );
};
