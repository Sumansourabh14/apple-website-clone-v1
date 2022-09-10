import BlackBg from "./components/BlackBg";
import WhiteBg from "./components/WhiteBg";
import Navbar from "./components/Navbar";
import Offer from "./components/Offer";

function App() {
  return (
    <main>
      <Navbar />
      <Offer classes="pt-12 px-16" />
      {/* <BlackBg /> */}
      <BlackBg 
        mainLink="https://www.apple.com/in/iphone-14-pro/"
        title="iPhone 14 Pro"
        subtitle="Pro. Beyond."
        description="Available starting from 16 September"
        learnMoreLink="https://www.apple.com/in/iphone-14-pro/"
        orderLinkText="Pre-order"
        orderLink="https://www.apple.com/in/shop/goto/buy_iphone/iphone_14_pro"
        imageSrc="https://www.apple.com/v/iphone-14-pro/a/images/overview/hero/hero_iphone_14_pro__kzr001ge0262_large.jpg"
        imageAlt="iPhone 14 Pro" 
      />
      <WhiteBg 
        mainLink="https://www.apple.com/in/iphone-14/"
        title="iPhone 14"
        subtitle="Big and bigger."
        description="iPhone 14 available starting from 16 September"
        learnMoreLink="https://www.apple.com/in/iphone-14/"
        orderLinkText="Pre-order"
        orderLink="https://www.apple.com/in/shop/goto/buy_iphone/iphone_14"
        imageSrc="https://www.apple.com/in/iphone-14/images/overview/display/xdr_display__cxbhgrgt5keq_large.jpg"
        imageAlt="iPhone 14" 
      />
    </main>
  );
}

export default App;
