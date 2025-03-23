import React, { memo } from "react";
import PageHeader from "components/PageHeader";

function Settings() {
  return (
    <div>
      <PageHeader text="Settings" items={[{ label: "Settings" }]} />
    </div>
  );
}

export default memo(Settings);
