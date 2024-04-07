import Telegram from '../../assets/icons/telegram.svg';
import Discord from '../../assets/icons/discord.svg';
import Twitter from '../../assets/icons/twitter.svg';

const Footer = () => {
    return (
        <footer className='footer-gradient min-h-[100px] mt-20 flex flex-wrap gap-5 items-center justify-between p-5 tablet:px-20'>
            <h1 className="text-3xl tablet:text-4xl text-gradient font-bold">U-EX</h1>
            <div className='flex items-center gap-3'>
                <img src={Telegram} className='w-[30px]' alt="" />
                <img src={Discord} className='w-[30px]' alt="" />
                <img src={Twitter} className='w-[30px]' alt="" />
            </div>
            <ul className='text-[12px]'>
                <li>Wallet connect</li>
                <li>Token checkup</li>
                <li>Community social channels</li>
            </ul>
        </footer>
    )
}

export default Footer
