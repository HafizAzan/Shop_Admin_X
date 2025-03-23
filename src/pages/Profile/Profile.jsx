import React, { memo } from "react";
import PageHeader from "components/PageHeader";

function Profile() {
  return (
    <div>
      <PageHeader text="Profile" items={[{ label: "Profile" }]} />
    </div>
  );
}

export default memo(Profile);
