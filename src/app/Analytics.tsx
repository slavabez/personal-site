"use client";

import React from "react";

const Analytics = () => {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `
          (function () {
          var el = document.createElement('script');
          el.setAttribute('src', 'https://analytics.ipbez.kz/script.js');
          el.setAttribute('data-website-id', '${process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID}');
          document.body.appendChild(el);
        })();`,
      }}
    ></script>
  );
};

export default Analytics;
