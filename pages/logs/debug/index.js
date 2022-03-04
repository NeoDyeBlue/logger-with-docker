import Head from "next/head";
import Layout from "../../../components/Layout";
import LogsLayout from "../../../components/LogsLayout";
import { useState, useEffect } from "react";
// import * as logger from "../../../lib/logger";

// export async function getServerSideProps(context) {
//   const { req } = context;

//   await logger.info(req, "get debug logs");
//   const data = await logger.fetchDebug();
//   !data.length && (await logger.warn(req, "fetched debug logs was empty"));

//   return { props: { data } };
// }

export default function DebugLogs() {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("/api/logs/debug")
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
          <span className="badge bg-success">{log.level.toUpperCase()}</span>
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
            <span className="badge bg-success">DEBUG</span>
          </th>
          <td>{new Date().toGMTString()}</td>
          <td>GET</td>
          <td>http://localhost:3000/logs</td>
          <td>192.168.0.1</td>
          <td>localhost</td>
        </tr>
        <tr>
          <th scope="row">
            <span className="badge bg-success">DEBUG</span>
          </th>
          <td>{new Date().toGMTString()}</td>
          <td>GET</td>
          <td>http://localhost:3000/logs</td>
          <td>192.168.0.1</td>
          <td>localhost</td>
        </tr>
        <tr>
          <th scope="row">
            <span className="badge bg-success">DEBUG</span>
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

DebugLogs.getLayout = function getLayout(page) {
  return (
    <Layout>
      <LogsLayout>{page}</LogsLayout>
    </Layout>
  );
};