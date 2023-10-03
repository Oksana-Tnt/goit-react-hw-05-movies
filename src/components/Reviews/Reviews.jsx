import { getDetailsById } from 'Services/Film-api';
import { STATUS } from 'components/APP/APP';
import Loader from 'components/Loader/Loader';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const END_POINT = 'reviews';
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [status, setStatus] = useState(STATUS.IDLE);

  useEffect(() => {
    const castById = async movieId => {
      try {
        setStatus(STATUS.PENDING);
        const data = await getDetailsById(movieId, END_POINT);
        setReviews(data.data.results);
        setStatus(STATUS.RESOLVED);
      } catch (err) {
        setStatus(STATUS.REJECTED);
      }
    };

    castById(movieId);
  }, [movieId]);

  if (status === STATUS.PENDING) return <Loader />;
  else if (status === STATUS.RESOLVED && reviews.length !== 0) {
    return (
      <>
        <ul>
          {reviews.map(item => (
            <li key={item.id}>
              <p>Author: {item.author}</p>
              <p>{item.content}</p>
            </li>
          ))}
        </ul>
      </>
    );
  } else if (reviews.length === 0) return <div>There is no reviews</div>;
};

export default Reviews;
