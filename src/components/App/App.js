import React, { useState} from 'react';
import BusinessList from '../BusinessList/BusinessList';
import SearchBar from '../SearchBar/SearchBar';


function App() {
  const [data, setData] = useState([]);

  const setDataFromSearch = (data) => {
    setData(data);
  };

  return (
    <div>
      <SearchBar setDataFromSearch={setDataFromSearch}/>
      <BusinessList data={data}/>
    </div>
  );
}

export default App;




