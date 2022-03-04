import Tabs from "./Tabs";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Head from "next/head";

export default function LogsLayout({ children }) {
  // const [cleared, setCleared] = useState();
  const router = useRouter();
  const path = router.pathname;

  // console.log("re render");

  // useEffect(() => {
  //   setCleared(null);
  // }, []);

  // function deleteHandler() {
  //   fetch("/api/logs/all", { method: "DELETE" }).then((data) =>
  //     setCleared(data)
  //   );
  // }

  return (
    <div className="container-md h-100 py-3 mb-auto">
      <Head>
        <title>
          {path.split("/")[2].toUpperCase()} Logs | Logger with Docker
        </title>
      </Head>
      <div className="d-flex align-items-center justify-content-between">
        <h1>Logs</h1>
        {/* <button className="btn btn-danger" onClick={deleteHandler}>
          Clear all levels
        </button> */}
      </div>
      <Tabs />
      <div className="table-responsive mh-100">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Level</th>
              <th scope="col">Timestamp</th>
              <th scope="col">Method</th>
              <th scope="col">URL/ Referer</th>
              <th scope="col">UserIP</th>
              <th scope="col">Host</th>
              <th scope="col">Message</th>
            </tr>
          </thead>
          {children}
        </table>
      </div>
      {/* <ul className="list-group list-group-flush">{children}</ul> */}
    </div>
  );
}
