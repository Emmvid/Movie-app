import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  // const error = useRouteError();
  // console.error(error); <i>{error.statusText || error.message}</i>

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
       
      </p>
    </div>
  );
}