import MarketMakingCommon from "./MarketMakingCommon";
export default function MarketMakingHedge() {
  return (
    <MarketMakingCommon
      type="hedge"
      StrategyText="Strategy 1"
      RiskBackgroundImage={{
        src: "/earn-market-risk.svg",
        alt: "market risk",
      }}
      backgroundImage={{
        src: "/earn-market-bg.png",
        alt: "Market Making Hedge",
      }}
      title="Market-Making Hedge Strategy"
      subtitle="Retain asset gains + amplify efficiency"
      apr="28"
      tooltipContent="This yield represents..."
      tokenBadge={[
        { src: "/earn-detail-token2.svg", label: "USDC+" },
        { src: "/earn-detail-orange.svg", label: "Capy Point" },
      ]}
      feature={[
        "dynamic leverage",
        "Maximize Returns",
        "Low-Risk and Stable",
        "Direct Deposit of Mainstream Assets",
      ]}
      support={{
        icons: [
          "/earn-detail-token1.svg",
          "/earn-detail-token2.svg",
          "/earn-detail-token3.svg",
          "/earn-detail-token4.svg",
        ],
        network: "Arbitrum,TBA",
      }}
      buttonText="Earn"
      example={{
        text: "e.g. 1 BTC per month earned",
        assetIncrease: "$1,633",
      }}
    />
  );
}
