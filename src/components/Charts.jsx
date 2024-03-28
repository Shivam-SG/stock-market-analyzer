// TradingViewWidget.jsx
import React, { useEffect, useRef, memo } from 'react';

function Charts() {
  const container = useRef();

  useEffect(
    () => {
      const script = document.createElement("script");
      script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
      script.type = "text/javascript";
      script.async = true;
      script.innerHTML = `
        {
          "container_id": "analytics-platform-chart-demo",
          "width": "100%",
          "height": "100%",
          "autosize": true,
          "symbol": "NASDAQ:AAPL",
          "interval": "D",
          "timezone": "exchange",
          "theme": "Dark",
          "style": "0",
          "withdateranges": true,
          "allow_symbol_change": true,
          "save_image": false,
          "details": true,
          "hotlist": true,
          "calendar": true
        }`;
      container.current.appendChild(script);
    },
    []
  );

  return (
    <div className="tradingview-widget-container" ref={container} style={{ height: "100%", width: "100%" }}>
      <div className="tradingview-widget-container__widget" style={{ height: "calc(100% - 32px)", width: "100%" }}></div>
      <div className="tradingview-widget-copyright"><a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank"><span className="blue-text">Track all markets on TradingView</span></a></div>
    </div>
  );
}

export default memo(Charts);
