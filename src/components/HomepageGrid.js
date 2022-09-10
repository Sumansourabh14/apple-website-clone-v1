import { faApple } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import GridBlackBg from "./GridBlackBg";
import GridGreyBg from "./GridGreyBg";
import GridWhiteBg from "./GridWhiteBg";

function HomepageGrid() {
    return (
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
                subtitle="Supercharged by"
                learnMoreLink="https://www.apple.com/in/macbook-air-m2/"
                orderLinkText="Buy"
                orderLink="https://www.apple.com/in/shop/goto/buy_mac/macbook_air_m2"
                classes="rotate-12 max-w-sm"
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
    )
}

export default HomepageGrid;