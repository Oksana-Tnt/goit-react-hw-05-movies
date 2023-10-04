import { getDetailsById } from 'Services/Film-api';
import { STATUS } from 'components/APP/APP';
import ErrorCard from 'components/ErrorCard/ErrorCard';
import Loader from 'components/Loader/Loader';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import css from './Cast.module.css';
import defaultImg from '../default-pfp-aesthetic.jpg';

const Cast = () => {
  const END_POINT = 'credits';
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [status, setStatus] = useState(STATUS.IDLE);
  const CONFIG = 'https://image.tmdb.org/t/p/w200';

  useEffect(() => {
    const castById = async movieId => {
      try {
        setStatus(STATUS.PENDING);
        const data = await getDetailsById(movieId, END_POINT);
        setCast(data.data.cast);
        setStatus(STATUS.RESOLVED);
      } catch (err) {
        setStatus(STATUS.REJECTED);
      }
    };
    castById(movieId);
  }, [movieId]);

  if (status === STATUS.PENDING) return <Loader />;
  else if (status === STATUS.RESOLVED) {
    return (
 
        <ul className={css.castList}>
          {cast.map(item => (
            <li className={css.castItem} key={item.id}>
              {item.profile_path ? (
                <img
                  className={css.castImg}
                  src={`${CONFIG}/${item.profile_path}`}
                  alt={item.name}
                />
              ):(<img
                className={css.castImg}
                src={defaultImg}
                alt={item.name}
              />)}
              <div className={css.description}>
              <p className={css.castName}>{item.name}</p>
              <p className={css.castName}>Character: {item.character}</p>
              </div>
            </li>
          ))}
        </ul>
    
    );
  } else if (status === STATUS.REJECTED) return <ErrorCard />;
};

export default Cast;
