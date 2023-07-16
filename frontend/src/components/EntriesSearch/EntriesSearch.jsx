import useEntries from '../hooks/useEntries';
import Entry from '../entry/Entry';
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
            return <Entry key={entry.id} entry={entry} />;
          })
        ) : (
          <li>¡No se ha encontrado ninguna entrada!</li>
        )}
      </ul>
    </main>
  );
};

export default EntriesSearch;
