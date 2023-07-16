import useEntries from '../hooks/useEntries';
import Block from '../shared/block/Block';
import HomeSearch from '../home-search/HomeSearch';

import './entriesSearch.css';

const EntriesSearch = () => {
  const { entries, searchParams, setSearchParams } = useEntries();

  return (
    <main className='entriesSearch'>
      <HomeSearch
        searchParams={searchParams}
        setSearchParams={setSearchParams}
      />

      <ul className='block-container'>
        {entries.length > 0 ? (
          entries.map((entry) => {
            return <li key={entry.id}>{entry.description}</li>;
          })
        ) : (
          <li>¡No se ha encontrado ninguna entrada!</li>
        )}
      </ul>
    </main>
  );
};

export default EntriesSearch;
