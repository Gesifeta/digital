import React from "react";

import styles from "./page.module.css";

const Dashboard = async ({ params }) => {
  const { id } = await params;
  return (
    <section className={styles.dashboard}>
      <div className={styles.header}>DashbaordHeader</div>
      {id}
    </section>
  );
};

export default Dashboard;
