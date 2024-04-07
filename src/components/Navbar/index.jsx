import Telegram from '../../assets/icons/telegram.svg';
import Discord from '../../assets/icons/discord.svg';
import Twitter from '../../assets/icons/twitter.svg';

const Navbar = () => {
    return (
        <header className="w-full flex items-center justify-between px-5 tablet:px-20 h-[80px] shadow-lg bg-[#491349]">
            <h1 className="text-2xl tablet:text-3xl text-gradient font-bold">U-EX</h1>
            <button className="rounded-full px-6 py-3 bg-gradient text-xs tablet:text-sm">Connect Wallet</button>
            
        </header>
    )
}

export default Navbar
