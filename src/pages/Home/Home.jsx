import React, { memo } from "react";
import PageHeader from "components/PageHeader";
import CustomAnalyticCard from "../../components/CustomAnalyticCard";

function Home() {
  return (
    <div>
      <PageHeader text="Home" />
      <main className="grid grid-cols-1 gap-4 mt-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
        <CustomAnalyticCard />
        <CustomAnalyticCard label="Total Income" />
        <CustomAnalyticCard label="New Order" />
        <CustomAnalyticCard label="Active Users " />
      </main>
    </div>
  );
}

export default memo(Home);
