import MarketMakingCommon from "./MarketMakingCommon";
export default function MarketMakingVolatility() {
  return (
    <MarketMakingCommon
      type="volatility"
      StrategyText="Strategy 2"
      RiskBackgroundImage={{
        src: "/earn-vol-risk.svg",
        alt: "vol risk",
      }}
      backgroundImage={{
        src: "/earn-market-bg2.png",
        alt: "market bg 2",
      }}
      title="Volatility Capture Strategy"
      subtitle="Retain asset gains + amplify efficiency"
      apr="108"
      tooltipContent="This yield represents..."
      tokenBadge={[
        { src: "/earn-detail-token2.svg", label: "USDC+" },
        { src: "/earn-detail-orange.svg", label: "Capy Point" },
      ]}
      feature={[
        "Volatility Capture Algorithm",
        "Low Leverage",
        "Medium risk",
        "Volatility Strategy",
      ]}
      support={{
        icons: ["/earn-detail-token1.svg", "/earn-detail-token2.svg"],
        network: "TBA",
      }}
      buttonText="Coming Soon"
      example={{
        text: "e.g. 1 BTC per month earned",
        assetIncrease: "$1,633",
      }}
    />
  );
}
