import Head from "next/head";
import Layout from "../../../components/Layout";
import LogsLayout from "../../../components/LogsLayout";
import { useState, useEffect } from "react";
// import * as logger from "../../../lib/logger";

// export async function getServerSideProps(context) {
//   const { req } = context;

//   await logger.info(req, "get error logs");
//   const data = await logger.fetchError();
//   !data.length && (await logger.warn(req, "fetched error logs was empty"));

//   return { props: { data } };
// }

export default function ErrorLogs() {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("/api/logs/error")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  if (isLoading)
    return (
      <tbody>
        <tr>
          <td className="text-center text-muted" colSpan="7">
            Loading...
          </td>
        </tr>
      </tbody>
    );

  if (!data || !data.length)
    return (
      <tbody>
        <tr>
          <td className="text-center text-muted" colSpan="7">
            No logs
          </td>
        </tr>
      </tbody>
    );

  const rows = data.map((log) => {
    return (
      <tr key={log.id}>
        <th scope="row">
          <span className="badge bg-danger">{log.level.toUpperCase()}</span>
        </th>
        <td>{log.timestamp}</td>
        <td>{log.method}</td>
        <td>{log.url}</td>
        <td>{log.userIP}</td>
        <td>{log.host}</td>
        <td>{log.message}</td>
      </tr>
    );
  });
  return (
    <>
      <tbody>
        {rows.reverse()}
        {/* <tr>
          <th scope="row">
            <span className="badge bg-danger">ERROR</span>
          </th>
          <td>{new Date().toGMTString()}</td>
          <td>GET</td>
          <td>http://localhost:3000/logs</td>
          <td>192.168.0.1</td>
          <td>localhost</td>
        </tr>
        <tr>
          <th scope="row">
            <span className="badge bg-danger">ERROR</span>
          </th>
          <td>{new Date().toGMTString()}</td>
          <td>GET</td>
          <td>http://localhost:3000/logs</td>
          <td>192.168.0.1</td>
          <td>localhost</td>
        </tr>
        <tr>
          <th scope="row">
            <span className="badge bg-danger">ERROR</span>
          </th>
          <td>{new Date().toGMTString()}</td>
          <td>GET</td>
          <td>http://localhost:3000/logs</td>
          <td>192.168.0.1</td>
          <td>localhost</td>
        </tr> */}
      </tbody>
    </>
  );
}

ErrorLogs.getLayout = function getLayout(page) {
  return (
    <Layout>
      <LogsLayout>{page}</LogsLayout>
    </Layout>
  );
};
