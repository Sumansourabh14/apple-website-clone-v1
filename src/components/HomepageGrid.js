import { faApple } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import GridBlackBg from "./GridBlackBg";
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
        </section>
    )
}

export default HomepageGrid;