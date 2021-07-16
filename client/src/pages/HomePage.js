import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { RiArrowDownSFill } from 'react-icons/ri';
import DisplayComponent from '../components/DisplayComponent';

export default function HomePage() {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function getData() {
      const data = await axios.get('http://localhost:3333/api');
      setData(data.data.albums.data);
      console.log(data.data);
    }
    getData();
  }, []);
  return (
    <div className="my-5 d-flex flex-column align-items-center justify-content-center">
      <div className="d-flex flex-column align-items-center content-top">
        <h1>DISCOVER YOUR NEW FAVORITE ALBUM</h1>
        <RiArrowDownSFill size={60} />
      </div>
      <div className="mx-auto d-flex flex-wrap justify-content-center">
        {data.map((item) => (
          <DisplayComponent key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
}
