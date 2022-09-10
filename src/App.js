import BlackBg from "./components/BlackBg";
import WhiteBg from "./components/WhiteBg";
import Navbar from "./components/Navbar";
import Offer from "./components/Offer";
import HomepageGrid from "./components/HomepageGrid";

function App() {
  return (
    <main>
      <Navbar />
      <Offer classes="pt-12 px-16" />
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
      <BlackBg 
        mainLink="https://www.apple.com/in/airpods-pro/"
        title="AirPods Pro"
        subtitle="Rebuilt from the sound up."
        description="Available starting from 23 September"
        learnMoreLink="https://www.apple.com/in/airpods-pro/"
        orderLinkText="Order now"
        orderLink="https://www.apple.com/in/shop/goto/product/MQD83"
        imageSrc="https://cdn.vox-cdn.com/thumbor/27wAHhRmCxKRxDIDEKpJmG3_2hw=/0x0:1960x1566/1200x800/filters:focal(824x627:1136x939)/cdn.vox-cdn.com/uploads/chorus_image/image/71334656/Apple_AirPods_Pro_2nd_gen_hero_220907.7.jpg"
        imageAlt="AirPods Pro" 
      />
      <HomepageGrid />
    </main>
  );
}

export default App;
