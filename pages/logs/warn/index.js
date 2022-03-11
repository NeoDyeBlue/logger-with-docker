import Layout from "../../../components/Layout";
import LogsLayout from "../../../components/LogsLayout";
import { useState, useEffect } from "react";
import * as logger from "../../../lib/logger";

export async function getServerSideProps(context) {
  const { req } = context;

  logger.info(req, 200, "warn logs tab");

  return {
    props: { content: null },
  };
}

export default function WarnLogs() {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("/api/logs/warn")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  if (isLoading) return <Loader />;

  if (!data || !data.length) return <NoLogs />;

  const rows = data.map((log) => {
    return (
      <tr key={log.id}>
        <th scope="row">
          <span className="badge bg-warning text-black">
            {log.level.toUpperCase()}
          </span>
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

WarnLogs.getLayout = function getLayout(page) {
  return (
    <Layout>
      <LogsLayout>{page}</LogsLayout>
    </Layout>
  );
};
