import { useState } from 'react';
import './homeSearch.css';

function homeSearch() {
  //Estado buscador
  const [search, setSearch] = useState('');
  const [entries, setEntries] = useState([]);

  /*const loadEntries = async (search) => {
    try {
      const response = await searchTodos(search);
      setTodos(response.data.todos);
      setTotal(response.data.total);
    } catch (error) {
      // Mostraríamos el pop up de error como en el dashboard normal
    }
  };*/

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const searchEntries = async () => {
    try {
      const response = await axios.get(`/entries?search=${search}`);
      setEntries(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  const searchButton = () => {
    console.log(search);
  };
  return (
    <div className='container'>
      <input
        className='searchbar'
        type='text'
        value={search}
        onChange={handleSearch}
        placeholder='Inicia tu búsqueda'
      ></input>
      <button className='buttonsearch' onClick={searchEntries}>
        <img src='src/assets/search.png' alt='lupa con lineas' />
      </button>
      <ul>
        {entries.map((entry) => (
          <li key={entry.id}>
            <h3>{entry.title}</h3>
            <p>{entry.description}</p>
            <p>Ciudad: {entry.city}</p>
            <p>Barrio: {entry.neighborhood}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default homeSearch;

