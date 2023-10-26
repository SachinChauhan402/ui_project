import { useState } from "react";
import axios from "axios";

const useGetEmails = () => {
  const [emails, setEmails] = useState({});
  const [csvData, setCsvData] = useState("")

  const addEmailSubscriber = ({ email }) => {
    const URL = `http://15.207.94.37:8000/api/v1/email_subscribers`;
    const payload = {
      key: "email",
      email: email,
      type: "text",
    };
    axios
      .post(URL, payload)
      .then((response) => {
        console.log(response, "_________________response");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getAllSubscribers = () => {
    const URL = `http://15.207.94.37:8000/api/v1/email_subscribers`;
    axios
      .get(URL)
      .then((response) => {
        if (response && response.data?.data) {
          setEmails(response.data.data);
        }
      })
      .catch((error) => {
        console.log(error, "_________________response");
      });
  };

  const downloadCsv = () => {
    const URL = `http://15.207.94.37:8000/api/v1/email_subscribers_csv`;
    axios.get(URL)
    .then((response) => {
      if (response) {
        console.log(response.data,"_________________response");
        setCsvData(response.data);
      }
    })
    .catch((error) => {
      console.log(error, "_________________response");
    });
  }
  return {
    emails,
    csvData,
    addEmailSubscriber,
    getAllSubscribers,
    downloadCsv,
  };
};

export default useGetEmails;
