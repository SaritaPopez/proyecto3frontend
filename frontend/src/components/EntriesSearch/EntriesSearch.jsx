
import useEntries from "../hooks/useEntries";
import Block from "../shared/block/Block";

import './entriesSearch.css';

const EntriesSearch = () => {
  const { entries } = useEntries();

  return (
    <main className="entriesSearch">
        <h2>Listado de entries</h2>
        
       
        <ul className="block-container">
            {  entries && entries.length > 0 ? (
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