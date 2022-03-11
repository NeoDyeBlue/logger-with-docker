import Head from "next/head";
import Layout from "../../../components/Layout";
import LogsLayout from "../../../components/LogsLayout";
import { useState, useEffect } from "react";
import * as logger from "../../../lib/logger";

export async function getServerSideProps(context) {
  const { req } = context;

  logger.info(req, 200, "all logs tab");

  return {
    props: { content: null },
  };
}

export default function AllLogs() {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("/api/logs/all")
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
    let style = null;
    switch (log.level) {
      case "trace":
        style = "bg-secondary";
        break;

      case "debug":
        style = "bg-success";
        break;

      case "info":
        style = "bg-info text-black";
        break;

      case "warn":
        style = "bg-warning text-black";
        break;

      case "error":
        style = "bg-danger";
        break;

      case "fatal":
        style = "bg-dark";
        break;

      default:
        break;
    }

    return (
      <tr key={log.id}>
        <th scope="row">
          <span className={`badge ${style}`}>{log.level.toUpperCase()}</span>
        </th>
        <td>{log.timestamp}</td>
        <td>{log.method}</td>
        <td>{log.status}</td>
        <td>{log.url}</td>
        <td>{log.userIP}</td>
        <td>{log.host}</td>
        <td>{log.message}</td>
      </tr>
    );
  });

  return (
    <>
      <tbody>{rows.reverse()}</tbody>
    </>
  );
}

AllLogs.getLayout = function getLayout(page) {
  return (
    <Layout>
      <LogsLayout>{page}</LogsLayout>
    </Layout>
  );
};
