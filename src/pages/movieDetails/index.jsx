import { useParams  } from "react-router-dom";
import { useEffect, useState } from 'react';
import Spinner from "../../components/common/Spinner";
import axios from "axios";
import { getMovieDetailsUrl } from "../../config/baseUrl";
import Details from "../../components/PlotDetails.jsx/Details";

const MovieDetails = () => {
  const { id } = useParams();
  const [isSearching, setIsSearching] = useState(false);
  const [details, setDetails] = useState([]);


  //Get movie plot summary and more info api
  useEffect(() => {
    const fetch = async (id) => {
      const url = getMovieDetailsUrl(id);
      setIsSearching(true);
      try {
        const res = await axios.get(url);
        const result = res?.data;
        if (result) {
          setDetails(result);
          setIsSearching(false);
        }
      } catch (err) {
        console.error("err");
        setIsSearching(false);
      }
    };
    fetch(id);
  }, [id]);


  return (
    <>{isSearching || !details ? <Spinner /> : <Details details={details} />}</>
  );
};

export default MovieDetails;
