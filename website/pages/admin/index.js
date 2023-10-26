import React, { useEffect, useRef, useState } from "react";
import Head from "next/head";
import useGetEmails from "../../customHooks/useGetEmails";
import { CSVLink, CSVDownload } from "react-csv";

const Admin = () => {
  const { downloadCsv, getAllSubscribers, emails, csvData } = useGetEmails();
  const [isLOggedIn, setIsLOggedIn] = useState(false);
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    getAllSubscribers();
    downloadCsv();
  }, []);

  const handleChange = (key, value) => {
    setCredentials({
      ...credentials,
      [key]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      credentials.email === "admin@10xtd.in" &&
      credentials.password === "admin@123"
    ) {
      setIsLOggedIn(true);
    }
  };

  const handleLogout = () => {
    setIsLOggedIn(false);
  };

  const handleDownloadCsv = () => {
    downloadCsv();
  };

  return (
    <div>
      <Head>
        <title>Admin</title>
      </Head>
      <div className="h-screen flex flex-col text-center">
        <p className="bg-black text-white w-min mx-auto px-12 py-2 my-4 text-xl font-semibold rounded-full shadow-xl">
          Admin
        </p>
        <div className="flex justify-center text-center">
          {!isLOggedIn ? (
            <div className="bg-gray-300 shadow-lg md:p-4 md:m-4 p-2 m-1">
              <p>Login</p>
              <form onSubmit={handleSubmit}>
                <div className="flex flex-col">
                  <input
                    className="m-2 py-1 px-2 rounded-full text-center focus:outline-none border focus:border-blue-500 focus:bg-blue-200"
                    type="email"
                    value={credentials.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                  />
                  <input
                    className="m-2 py-1 px-2 rounded-full text-center focus:outline-none border focus:border-blue-500 focus:bg-blue-200"
                    type="password"
                    value={credentials.password}
                    onChange={(e) => handleChange("password", e.target.value)}
                  />
                  <button
                    className={`
                    bg-blue-500 
                    text-white 
                    font-semibold 
                    w-2/3 
                    p-2 
                    text-lg 
                    my-4 
                    mx-auto 
                    rounded-full 
                    transition 
                    duration-300 
                    transform 
                    hover:bg-blue-400 
                    hover:-translate-y-1 
                    hover:scale-110 
                    focus:bg-blue-500
                  `}
                    type="submit"
                  >
                    Login
                  </button>
                </div>
              </form>
            </div>
          ) : (
            <div className="flex">
              {/* <div className="my-12">
                <p className="text-2xl md:mt-12 mt-12 mx-1">Subscibers</p>
                <ol className="list-decimal list-outside">
                  {emails.map((email, index) => {
                    return (
                      <li key={index} className="">
                        {email.email}
                      </li>
                    );
                  })}
                </ol>
              </div> */}
              <CSVLink
                data={csvData}
                filename={`${new Date().getFullYear()}_${
                  new Date().getMonth() + 1
                }_${new Date().getDate()}_10xtd_subscriber_list.csv`}
              >
                <button
                  className="bg-blue-500 text-white font-semibold p-2 text-lg my-4 mx-12 p-4 rounded-full transition duration-300 transform hover:bg-blue-400 hover:-translate-y-1 hover:scale-110 focus:bg-blue-500"
                  onClick={handleDownloadCsv}
                >
                  Download CSV
                </button>
              </CSVLink>
              <div className="absolute right-10 top-0">
                <button
                  className="bg-blue-500 text-white font-semibold p-2 text-lg my-4 mx-12 p-4 rounded-full transition duration-300 transform hover:bg-blue-400 hover:-translate-y-1 hover:scale-110 focus:bg-blue-500"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Admin;
