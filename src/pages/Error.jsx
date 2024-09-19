import { useLocation } from 'react-router-dom';

const ErrorPage = () => {
  const location = useLocation();
  const error = location.state || {};
  console.log("page error", error);

  let title = "An Error Occurred!";
  let message = "Page Not Found!";

  if (error.status === 500) {
    message = error.message;
  }

  if (error.status === 404) {
    title = "Not Found!";
    message = "Page Not Found";
  }

  return (
    <section className="bg-[#ffd37c] p-4 flex flex-col gap-4 w-[90%] md:w-1/2 mx-auto my-40 justify-center items-center text-2xl md:text-4xl	rounded">
      <h1>{title}</h1>
      <p>{message}</p>
    </section>
  );
};

export default ErrorPage;
