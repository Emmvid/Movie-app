import Movies from "../pages/Movies";

export default function RecentlyViewed({ recentlyViewed }) {
  return (
    <section className="row">
      <h1>Recently viewed:</h1>
      <div className="row">

        {recentlyViewed.map((movie) => {
          return <Movies key={movie.id} movie={movie} />;
        })}
        </div>
    </section>
  );
}