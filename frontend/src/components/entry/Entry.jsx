import PropTypes from 'prop-types';

import './entry.css';

const Entry = ({ entry }) => {
  return (
    <li className='entry'>
      <header className='headerEntry'>
        <p>{entry.username}</p>
        <p>{entry.title}</p>
        <time>
          {new Date(entry.createdAt).toLocaleDateString('es-ES', {
            hour: '2-digit',
            minute: '2-digit',
            day: '2-digit',
            month: '2-digit',
            year: '2-digit',
          })}
        </time>
      </header>
      <div>
        <p>{entry.description}</p>
        {entry.photos && (
          <img
            src={`http://localhost:8080/${entry.photos}`}
            alt='imagen adjunta a la entry'
          />
        )}
      </div>
      <footer>
        <p> aquí irá el like</p>
      </footer>
    </li>
  );
};

Entry.propTypes = {
  entry: PropTypes.object,
};

export default Entry;
