import "./App.css";
import LaunchDarkly from "./LaunchDarkly";
import UploadFileToS3 from "./UploadFileToS3";
import LDClient from "launchdarkly-js-client-sdk";
import { useState } from "react";
import Hangman from "./Hangman";
import InfiniteScroll from "./InfiniteScroll";
import ErrorBoundary from "./ErrorBoundary";
import TextEditor from "./TextEditor";
import FormAutoSave from "./FormAutoSave";
import DynamicDataTableComponent from "./dynamic-data-table/DynamicDataTableComponent";
import VirtualScroll from "./VirtualScroll";
import ScaredButton from "./ScaredButton";
import TodoList from "./TodoList";
import S3ConfigUpdateCmp from "./s3-config-update/S3ConfigUpdateCmp";
import DoNotOpen from "./do-not-open/DoNotOpen";

const context = {
  kind: "user",
  key: "toggle-feature",
};
const client = LDClient.initialize("64f0735398ec7612a44724f6", context);

function App() {
  const [showFeature, setShowFeature] = useState(false);

  // useEffect(() => {
  //   client.on("ready", () => {
  //     const flagValue = client.variation("toggle-feature", false);
  //     setShowFeature(flagValue);
  //   });
  // }, []);

  client.on("change", (flag) => {
    setShowFeature(flag["toggle-feature"]["current"]);
  });

  return <DoNotOpen />;
}

export { App };
