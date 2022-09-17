import { TickerTape } from "react-ts-tradingview-widgets";

export const CryptoTracker = () => (
  <TickerTape
    symbols={[
      {
        proName: "BITSTAMP:BTCUSD",
        title: "Bitcoin",
      },
      {
        proName: "BITSTAMP:ETHUSD",
        title: "Ethereum",
      },
      {
        description: "USDC",
        proName: "GEMINI:USDCUSD",
      },
      {
        description: "Tether",
        proName: "COINBASE:USDTUSD",
      },
      {
        description: "Cardano",
        proName: "COINBASE:ADAUSD",
      },
      {
        description: "Solana",
        proName: "COINBASE:SOLUSD",
      },
      {
        description: "Dogecoin",
        proName: "FTX:DOGEUSD",
      },
      {
        description: "Binance",
        proName: "FTX:BNBUSD",
      },
    ]}
    showSymbolLogo={true}
    isTransparent={false}
    displayMode="adaptive"
    locale="en"
    colorTheme="dark"
  />
);
