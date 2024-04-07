import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer';

// Images
import DesignOne from '../../assets/images/design-1.png';
import DesignTwo from '../../assets/images/design-2.png';

// Icons
import Swap from '../../assets/icons/swap.svg';
import Simplicity from '../../assets/icons/simplicity.svg';
import NoKYC from '../../assets/icons/no-kyc.svg';
import Token from '../../assets/icons/token.svg';

const Home = () => {
    return (
        <main className='home-gradient text-white'>
            <Navbar />

            <div className='px-5 tablet:px-20 mx-auto'>

                {/*  */}
                <section className='w-full'>
                    <div className='mt-10 min-h-[250px] tablet:min-h-[300px] p-4 rounded-2xl bg-gradient flex flex-col justify-center gap-5 px-5 tablet:px-10 relative'>
                        <h2 className='text-lg tablet:text-4xl w-[70%] tablet:w-[60%] relative z-10'>Decentralize Exchange: Swap crypto tokens in Real time</h2>

                        <div className='flex gap-3 tablet:gap-7 relative z-10 text-sm'>
                            <p className='underline'>No Banks</p>
                            <p className='underline'>No Brokers</p>
                        </div>

                        <div className='absolute z-0 top-0 right-3 tablet:right-7 flex gap-2 tablet:gap-4 h-full items-center'>
                            <img src={DesignTwo} className='h-full' alt="" />
                            <img src={DesignOne} className='h-full' alt="" />
                        </div>
                    </div>
                </section>

                {/*  */}
                <section className='w-full mt-10 pb-5'>
                    <h2 className='capitalize text-2xl tablet:text-4xl tablet:max-w-[500px] font-semibold'>Boost your <span className='text-gradient'>financial</span> transactions</h2>
                    <p className='text-sm font-light text-[#EFBCEE] py-4 max-w-[70%]'>
                        Swap, trade verified crypto tokens in real time, hassle free 
                    </p>
                    <div className='mt-4 flex gap-4'>
                        <button className="rounded-full px-6 py-3 bg-gradient text-xs tablet:text-sm">Connect Wallet</button>
                        <button className="rounded-full px-10 py-3 border border-[#7E0096] text-gradient text-xs tablet:text-sm bg">Trade</button>
                    </div>
                </section>

                {/*  */}
                <div className='w-full mt-10 border border-[purple] rounded-xl p-5 tablet:p-10 bg-gradient-2'>
                    <h3 className='text-sm'>Advantage of U-EX</h3>
                    <h2 className='text-2xl tablet:text-4xl mt-3'>What We Offer</h2>

                    <ul className='flex flex-wrap justify-between gap-y-8 mt-8'>
                        <li className='tablet:w-[46%]'>
                            <img src={Swap} className='w-[40px] tablet:w-[60px]' alt="" />
                            <p className='mt-3 py-2'>Swap</p>
                            <p className='text-[#EFBCEE] text-sm max-w-[280px]'>Swap verified crypto tokens instantly across multiple exchange</p>
                        </li>
                        <li className='tablet:w-[46%]'>
                            <img src={Simplicity} className='w-[40px] tablet:w-[60px]' alt="" />
                            <p className='mt-3 py-2'>Simplicity</p>
                            <p className='text-[#EFBCEE] text-sm max-w-[280px]'>Navigation between U-EX services and offers to partake in will be laid out in the simplest way</p>
                        </li>
                        <li className='tablet:w-[46%]'>
                            <img src={NoKYC} className='w-[40px] tablet:w-[60px]' alt="" />
                            <p className='mt-3 py-2'>No KYC process</p>
                            <p className='text-[#EFBCEE] text-sm max-w-[280px]'>We want you to trade on exchange quickly and still protect your data</p>
                        </li>
                        <li className='tablet:w-[46%]'>
                            <img src={Token} className='w-[40px] tablet:w-[60px]' alt="" />
                            <p className='mt-3 py-2'>Referral to earn TOKEN</p>
                            <p className='text-[#EFBCEE] text-sm max-w-[280px]'>Earn crypto token for every trader that trades on our platform with your link</p>
                        </li>
                    </ul>
                </div>

                <section className='mt-16 w-full flex flex-wrap gap-y-6 gap-x-5 justify-between '>
                    <div className='border border-[purple] rounded-xl p-5 tablet:p-10 bg-gradient-2 w-full tablet:w-[48%]'>
                        <h3 className='text-xs'>Monetization formula</h3>
                        <h2 className='text-2xl tablet:text-4xl mt-3'>Why Choose Us</h2>
                        <h2 className='mt-10 text-lg'>Fiat Charges</h2>
                        <ul className='mt-2 flex flex-col gap-4'>
                            <li className='list-disc ml-5 text-[#EFBCEE] font-medium text-xs'>We will charge a fiat 0.25% fee on every swap transaction.</li>
                            <li className='list-disc ml-5 text-[#EFBCEE] font-medium text-xs'>We will implement a sweet-swap-Friday deal every last Friday of the month.</li>
                            <li className='list-disc ml-5 text-[#EFBCEE] font-medium text-xs'>Every swap deal will have a 0.5% discount charge, meaning we will charge just 0.2% for swap costs every last Friday of every month.</li>
                        </ul>
                    </div>
                    <div className='border border-[purple] rounded-xl p-5 tablet:p-10 bg-gradient-2 w-full tablet:w-[48%]'>
                        <h3 className='text-xs'>Future development plan</h3>
                        <h2 className='text-2xl tablet:text-4xl mt-3'>Our vision</h2>
                        <h2 className='mt-10 text-lg'>Plans</h2>
                        <ul className='mt-2 flex flex-col gap-4'>
                            <li className='list-disc ml-5 text-[#EFBCEE] font-medium text-xs'>A portfolio that showcase where users would guided on investments, purchase stocks on agreeable terms and monitor  their return on investments (ROI).</li>
                            <li className='list-disc ml-5 text-[#EFBCEE] font-medium text-xs'>App users will have an option to connect to a profession licensed portfolio manager to oversee, monitor and manage their investments upon agreeing on terms and conditions.</li>
                            <li className='list-disc ml-5 text-[#EFBCEE] font-medium text-xs'>New companies will undergo proper financial investigation through a security checker before being enlisted on U-EX invest.</li>
                        </ul>
                    </div>
                </section>
                
            </div>

            <Footer />
        </main>
    )
}

export default Home
