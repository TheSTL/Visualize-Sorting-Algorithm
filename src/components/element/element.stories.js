import React from "react";
import Element from ".";

export default {
  title: "Element",
  component: Element,
};

export const Unsorted = () => (
  <Element
    count={1}
    value={2}
    newCount={-1}
    speed={10}
    setEndTimeStamp={() => {}}
  />
);

export const Sorted = () => (
    <Element
      count={1}
      value={2}
      newCount={3}
      speed={10}
      setEndTimeStamp={() => {}}
    />
  );
