import React from "react";

const LookingForAJobBanner = () => {
  return (
    <div className="bg-emerald-50 dark:bg-emerald-900 text-emerald-900 dark:text-emerald-50 text-sm text-center py-2 px-2">
      I&apos;m currently looking for a job!{" "}
      <a
        href="/contact"
        className="underline hover:text-emerald-700 dark:hover:text-emerald-300"
      >
        Get in touch
      </a>{" "}
      if you&apos;re looking for an experienced Javascript developer.
    </div>
  );
};

export default LookingForAJobBanner;
