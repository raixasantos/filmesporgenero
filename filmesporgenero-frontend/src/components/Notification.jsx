import { useState, useEffect } from "react";
import { fetchEventSource } from "@microsoft/fetch-event-source";

const serverBaseURL = "http://localhost:8080";

const NotificationComponent = () => {
  const [data, setData] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     await fetchEventSource(`${serverBaseURL}/sse`, {
  //       method: "POST",
  //       headers: {
  //         Accept: "text/event-stream",
  //       },
  //       onopen(res) {
  //         if (res.ok && res.status === 200) {
  //           console.log("Connection made ", res);
  //         } else if (
  //           res.status >= 400 &&
  //           res.status < 500 &&
  //           res.status !== 429
  //         ) {
  //           console.log("Client side error ", res);
  //         }
  //       },
  //       onmessage(event) {
  //         console.log(event.data);
  //         const parsedData = JSON.parse(event.data);
  //         setData((data) => [...data, parsedData]);
  //       },
  //       onclose() {
  //         console.log("Connection closed by the server");
  //       },
  //       onerror(err) {
  //         console.log("There was an error from server", err);
  //       },
  //     });
  //   };
  //   fetchData();
  // }, []);

  return (
    <div>
      {data}
    </div>
  );
};

export default NotificationComponent;