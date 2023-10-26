import React from "react";
import useGetEmails from "../../customHooks/useGetEmails";
import Notify from "../common/Notify";

const NewsLetter = () => {
  const { addEmailSubscriber } = useGetEmails();
  const [email, setEmail] = React.useState("");
  const [show, setShow] = React.useState(false);

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addEmailSubscriber({ email: email });
    setEmail("");
    setShow(true);
    setTimeout(() => {
      setShow(false);
    }, 5000);
  };

  return (
    <div>
      <Notify
        message="Congratulations!!! You have subscribed successfully!"
        show={show}
        hideShow={() => setShow(false)}
      />
      <footer className="w-full py-6 px-4 bg-blue-950">
        <div className="flex flex-wrap md:justify-center text-white max-w-7xl mx-auto">
          <div className="flex md:flex-col px-5 md:w-1/5 w-full items-center mb-4 md:mb-0">
            <p className="md:text-xl text-xs font-light">
              Blogs and Videos{" "}
              <span className="md:hidden inline">for Talents, Partners and Entrepreneurs</span>
            </p>
            <p className="text-xs font-light md:block hidden">
              for Talents, Partners and Entrepreneurs
            </p>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="flex">
              <div className="flex flex-col mx-5">
                <input
                  className="bg-white rounded h-11 w-full px-5 text-black"
                  placeholder="Email Address"
                  type="email"
                  value={email}
                  onChange={handleChange}
                />
                <p className="text-xs font-thinner mt-2 text-gray-400">
                  By clicking subscribe you’ll receive occasional emails from
                  10XTD Network
                </p>
              </div>
              <button
                type="submit"
                className="bg-blue-450 rounded h-11 px-8 transition duration-500 ease-in-out transform hover:scale-110 bg-white hover:bg-blue-600"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </footer>
    </div>
  );
};

export default NewsLetter;
