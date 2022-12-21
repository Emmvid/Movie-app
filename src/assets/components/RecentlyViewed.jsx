import Movies from "../pages/Movies";

export default function RecentlyViewed({ recentlyViewed }) {
  return (
    <section className="row">
      {recentlyViewed.map((movie) => {
        return <Movies key={movie.id} movie={movie} />;
      })}
    </section>
  );
}
