import { useEffect, useState } from "react";
import FooterAccordion from "./FooterAccordion";
import { FooterLinks } from "./FooterData";
import FooterMdScreen from "./FooterMdScreen";

function Footer() {

    const [width, setWidth] = useState(window.innerWidth);
    const breakpoint = 768;

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth)
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <footer id="footer" className="bg-stone-50 mt-4">
            <div className="container mx-auto px-8 text-stone-600">
                <div className="text-sm py-6 border-b border-stone-300">
                    <p>‡Instant cashback of 5% of order value is available for qualifying HDFC Bank Credit Cards & HDFC Credit Card EMI only. Offer is limited to Maximum Instant Cashback Amount of ₹6000 per successful single order of ₹54900 and above. Instant cashback is available for up to two orders per 90-day period with an eligible card. Any additional orders may be cancelled. Card eligibility is subject to terms and conditions between you and your card-issuing bank. Total transaction value is calculated after any trade-in credit or eligible discount is applied. Any subsequent order adjustment(s) or cancellation(s) may result in instant cashback being recalculated, and any refund may be adjusted to account for instant cashback reclaim, which may result in no refund being made to you. Offer may be revised or withdrawn at any time without any prior notice. Terms & conditions apply. Offer cannot be combined with Apple Store for Education or Corporate Employee Purchase Plan pricing. Multiple separate orders cannot be combined for instant cashback.</p>
                    <ol className="pt-4">
                        <li>Qualified purchasers can receive promotion savings when they purchase an eligible Mac or eligible iPad with eligible AirPods at a qualifying location. Only one pair of AirPods per eligible Mac or eligible iPad per qualified purchaser. Offer is subject to availability. Subject to terms and conditions herein.</li>
                    </ol>
                </div>

                {width > breakpoint ? <FooterMdScreen /> : <FooterAccordion />}

                <div className="text-sm py-2">
                    <p>More ways to shop: <a className="text-blue-500 hover:underline" href="https://locate.apple.com/in/en/">Find a retailer</a> near you. Or call 000800 040 1966.</p>
                </div>

                <div className="text-sm py-2 flex flex-col md:flex-row-reverse md:justify-between md:items-center md:border-t border-stone-300">
                    <a href="https://www.apple.com/choose-country-region/" className="hover:underline">India</a>
                    <div className="text-sm py-2 flex flex-col md:flex-row lg:gap-10">
                        <p>Copyright © 2022 Apple Inc. All rights reserved.</p>
                        <ul className="flex gap-4">
                            {FooterLinks.map(item => {
                                return (
                                    <li key={item.id}>
                                        <a className="hover:underline" href={item.link}>{item.name}</a>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>

                
                <p className="text-center text-sm py-4">Built by <a href="https://github.com/Sumansourabh14" className="text-stone-900 hover:underline">Suman Sourabh</a></p>

                
            </div>
        </footer>
    )
}

export default Footer;