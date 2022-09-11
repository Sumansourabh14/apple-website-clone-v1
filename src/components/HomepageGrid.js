import { faApple } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BlackBg from "./BlackBg";
import WhiteBg from "./WhiteBg";
import GridBlackBg from "./GridBlackBg";
import GridGreyBg from "./GridGreyBg";
import GridWhiteBg from "./GridWhiteBg";

function HomepageGrid() {
    return (
        <section>
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

            <section className="grid md:grid-cols-2 gap-2 bg-stone-100">
                <GridWhiteBg  
                    mainLink="https://www.apple.com/in/apple-watch-ultra/"
                    icon={<FontAwesomeIcon icon={faApple} className="pr-2 text-3xl" />}
                    title="WATCH"
                    subtitle="Adventure awaits."
                    description="Available starting from 23 September"
                    learnMoreLink="https://www.apple.com/in/apple-watch-ultra/"
                    orderLinkText="Order now"
                    orderLink="https://www.apple.com/in/shop/goto/apple_watch_ultra"
                    imageSrc="https://www.apple.com/in/apple-watch-ultra/images/overview/design/dive_face_dark_part2_endframe__gngvfua035m6_large.jpg"
                    imageAlt="Apple Watch Ultra"
                />
                <GridBlackBg  
                    mainLink="https://www.apple.com/in/apple-watch-series-8/"
                    icon={<FontAwesomeIcon icon={faApple} className="pr-2 text-3xl" />}
                    title="WATCH"
                    subtitle="A healthy leap ahead"
                    description="Available starting from 16 September"
                    learnMoreLink="https://www.apple.com/in/apple-watch-series-8/"
                    orderLinkText="Order now"
                    orderLink="https://www.apple.com/in/shop/goto/apple_watch_series_8"
                    imageSrc="https://www.apple.com/v/apple-watch-series-8/a/images/overview/hero/hero_static__c9d1bk9frtua_large.jpg"
                    imageAlt="Apple Watch Series 8"
                />
                <GridWhiteBg  
                    mainLink="https://www.apple.com/in/apple-watch-se/"
                    icon={<FontAwesomeIcon icon={faApple} className="pr-2 text-3xl" />}
                    title="WATCH"
                    subtitle="A great deal to love."
                    description="Available starting from 16 September"
                    learnMoreLink="https://www.apple.com/in/apple-watch-se/"
                    orderLinkText="Order now"
                    orderLink="https://www.apple.com/in/shop/goto/buy_watch/apple_watch_se"
                    imageSrc="https://www.apple.com/in/apple-watch-se/images/overview/hero/hero__fmx18j9bq0ya_large.jpg"
                    imageAlt="Apple Watch SE"
                />
                <GridGreyBg  
                    mainLink="https://www.apple.com/in-edu/shop/back-to-school"
                    subtitle="Save on Mac or iPad"
                    description="Plus get Airpods."
                    orderLinkText="Shop now"
                    orderLink="https://www.apple.com/in-edu/shop/back-to-school"
                    imageSrc="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/bts-header-hero-airpods-geoalt-202206?wid=948&hei=986&fmt=png-alpha&.v=1654669403404"
                    imageAlt="Mac, iPad, Airpods"
                />
                <GridWhiteBg  
                    mainLink="https://www.apple.com/in/macbook-air-m2/"
                    title="MacBook Air"
                    subtitle="Supercharged by M2"
                    learnMoreLink="https://www.apple.com/in/macbook-air-m2/"
                    orderLinkText="Buy"
                    orderLink="https://www.apple.com/in/shop/goto/buy_mac/macbook_air_m2"
                    classesImg="-rotate-45 py-12 "
                    imageSrc="https://www.apple.com/v/macbook-air-m2/b/images/overview/hero/hero_chevron_spacegray__de41jkv6pryq_large.jpg"
                    imageAlt="MacBook Air"
                />
                <GridBlackBg  
                    mainLink="https://www.apple.com/in/ipad-air/"
                    title="iPad air"
                    subtitle="Light. Bright. Full of might."
                    learnMoreLink="https://www.apple.com/in/ipad-air/"
                    orderLinkText="Buy"
                    orderLink="https://www.apple.com/in/shop/goto/buy_ipad/ipad_air"
                    imageSrc="https://www.apple.com/v/ipad-air/r/images/meta/ipad-air_overview__cahgij9otxua_og.png?202207060512"
                    imageAlt="Apple iPad air"
                />
            </section>
        </section>
    )
}

export default HomepageGrid;