import { useState } from "react";
import {
  useGetNewMoviesQuery,
  useGetTopMoviesQuery,
  useGetRandomMoviesQuery,
} from "../../redux/api/movies";

import { useFetchGenresQuery } from "../../redux/api/genre";
import SliderUtil from "../../component/SliderUtil";

const MoviesContainerPage = () => {
  const { data } = useGetNewMoviesQuery();
  const { data: topMovies } = useGetTopMoviesQuery();
  const { data: genres } = useFetchGenresQuery();
  const { data: randomMovies } = useGetRandomMoviesQuery();

  const [selectedGenre, setSelectedGenre] = useState(null);

  const handleGenreClick = (genreId) => {
    setSelectedGenre(genreId);
  };

  const filteredMovies = data?.filter(
    (movie) => selectedGenre === null || movie.genre === selectedGenre
  );

  return (
    <div className="flex flex-col lg:flex-row lg:justify-between items-center mx-auto max-w-screen-xl px-4 overflow-x-auto">
      <nav className="flex flex-row xl:flex-col lg:flex-col md:flex-row sm:flex-row mb-4 lg:mb-0">
        {genres?.map((g) => (
          <button
            key={g._id}
            className={`transition duration-300 ease-in-out hover:bg-gray-200 bg-red-500 block p-2 rounded mr-4 text-lg ${
              selectedGenre === g._id ? "bg-gray-200" : ""
            }`}
            onClick={() => handleGenreClick(g._id)}
          >
            {g.name}
          </button>
        ))}
      </nav>
  
      <section className="flex flex-col justify-center items-center w-full lg:w-auto">
        <div className="w-full lg:w-[100rem] mb-8 mx-auto">
          <h1 className="mb-5 bg-red-500 text-center text-white py-2 px-4 rounded-lg">Choose For You</h1>
          <SliderUtil data={randomMovies} />
        </div>
  
        <div className="w-full lg:w-[100rem] mb-8 mx-auto">
          <h1 className="mb-5 bg-red-500 text-center text-white py-2 px-4 rounded-lg">Top Movies</h1>
          <SliderUtil data={topMovies} />
        </div>
  
        <div className="w-full lg:w-[100rem] mb-8 mx-auto">
          <h1 className="mb-5 bg-red-500 text-center text-white py-2 px-4 rounded-lg">Choose Movie</h1>
          <SliderUtil data={filteredMovies} />
        </div>
      </section>
    </div>
  );
   
};

export default MoviesContainerPage;
