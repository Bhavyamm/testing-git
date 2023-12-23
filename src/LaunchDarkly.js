import React from "react";

function LaunchDarkly(showFeature) {
  return showFeature.showFeature ? (
    <div>Feature is enabled for this user!</div>
  ) : (
    <div>Feature is not enabled for this user!</div>
  );
}

export default LaunchDarkly;
