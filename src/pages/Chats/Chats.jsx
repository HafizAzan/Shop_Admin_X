import React, { memo } from "react";
import PageHeader from "components/PageHeader";

function Chats() {
  return (
    <div>
      <PageHeader text="Chats" items={[{ label: "Chats" }]} />
    </div>
  );
}

export default memo(Chats);
