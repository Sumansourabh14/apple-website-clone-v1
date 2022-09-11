import { ShopAndLearn, AppleStore, Services, AboutApple } from "./FooterData";

function FooterMdScreen() {
    return (
        <div className="py-4">
            <div className="flex gap-6 justify-between text-sm">
                <ul className="flex flex-col gap-2">
                    <h2 className="font-bold">Shop and Learn</h2>
                    {ShopAndLearn.map(item => {
                        return (
                            <li key={item.id}>
                                <a className="hover:underline" href={item.link}>{item.name}</a>
                            </li>
                        )
                    })}
                </ul>
                <ul className="flex flex-col gap-2">
                    <h2 className="font-bold">Apple Store</h2>
                    {AppleStore.map(item => {
                        return (
                            <li key={item.id}>
                                <a className="hover:underline" href={item.link}>{item.name}</a>
                            </li>
                        )
                    })}
                </ul>
                <ul className="flex flex-col gap-2">
                    <h2 className="font-bold">Services</h2>
                    {Services.map(item => {
                        return (
                            <li key={item.id}>
                                <a className="hover:underline" href={item.link}>{item.name}</a>
                            </li>
                        )
                    })}
                </ul>
                <ul className="flex flex-col gap-2">
                    <h2 className="font-bold">About Apple</h2>
                    {AboutApple.map(item => {
                        return (
                            <li key={item.id}>
                                <a className="hover:underline" href={item.link}>{item.name}</a>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}

export default FooterMdScreen;