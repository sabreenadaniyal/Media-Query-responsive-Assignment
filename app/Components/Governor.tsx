import Image from "next/image"
export default function Governor() {
    return (
        <div>
            <div className="relative z-0 w-full overflow-hidden items-center">

                <div className="absolute inset-0 -z-50 h-full w-full bg-zinc-100 bg-opacity-80 ">
                </div>

                <div className=" z-50 m-auto mt-6 block w-[95%] items-center md:flex
                    md:flex-col  lg:flex lg:flex-row lg:w-8/12 ">

                    <div className="w-full pt-5 md:w-1/2 md:py-5">

                        <h1 className="whitespace-nowrap text-center text-[2rem] font-extrabold text-blue-900
                            leading-10 tracking-wider text-main sm:text-5xl sm:leading-none md:text-left lg:text-6xl lg:ml-[-42%]">
                            Governor Sindh</h1>

                        <h1 className=" whitespace-nowrap text-center text-[1.5rem] font-normal leading-[2rem] text-blue-800
                         tracking-wider text-main sm:text-4xl sm:leading-[3rem] md:text-left lg:text-[2.5rem] lg:ml-[-42%]">
                            Kamran Khan Tessori</h1>

                        <h1 className="mt-5 whitespace-nowrap text-center text-[1.5rem] font-bold leading-[2rem]
                          text-blue-400 tracking-wider text-sub sm:text-4xl sm:leading-5xl md:text-center
                           lg:text-4xl lg:text-left lg:font-extrabold lg:ml-[-42%]">
                            Certified Cloud<br />Applied Generative AI<br />Engineer (GenEng)</h1>

                        <p className="my-5 whitespace-nowrap text-center text-xl font-bold tracking-widest text-blue-900
                             text-main sm:text-2xl md:text-center lg:ml-[-82%] lg:font-extrabold">
                                Earn up to $5,000 / month
                        </p>
                        <p className="my-5 whitespace-pre-wrap w-full text-center text-[1.25rem] font-extrabold md:ml-[-20%]
                                 tracking-widest text-blue-900 sm:text-2xl md:w-full md:text-nowrap lg:w-6/12 lg:ml-[-42%]
                                 lg:font-extrabold">
                            Now admissions are open in Hyderabad
                        </p>

                        <div className="mb-7 mt-5 flex flex-col items-center sm:mt-10 sm:flex-row sm:gap-5 md:mb-0">
                            <button className="w-full rounded-md py-3  text-center text-sm font-semibold tracking-widest
                             text-white sm:py-4 sm:text-base md:w-[550%] md:ml-[-50%] bg-blue-800 md:text-bold 
                             lg:w-[100%] lg:ml-[-42%] ">
                                APPLY NOW</button>

                            <div className="mt-4 flex w-full flex-col items-center sm:mt-0 md:ml-[10%]">
                                <div className="flex-col text-center text-xl tracking-widest text-main sm:text-3xl ">
                                    <div className="w-50 font-extrabold text-blue-800 md:mr-[-115%] lg:ml-[-170%]">
                                        562,143</div>
                                </div>

                                <div className="text-center text-xs tracking-wider text-main sm:mb-0 sm:text-sm text-blue-800
                                    md:mr-[-110%] lg:-mr-36 lg:ml-[-98%]">
                                    Accepted Applications</div>
                            </div>
                        </div>
                    </div>

                    <div className="relative whitespace-nowrap mt-7 flex  w-full items-end justify-center ml-[10%] 
                    md:ml-[20%] md:m-auto md:justify-end lg:ml-[10%]">
                        <Image className="min-w-[900px] lg:w-[600px]"
                            src="/kamran tessori.png" alt="giaic"
                            width={500}
                            height={300} />

                    </div>
                </div>
            </div>
        </div>


    )
}