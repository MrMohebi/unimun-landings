import React from "react";
import Head from "next/head";
import Carousel from "@/components/ghadi/Carousel/Carousel";
import Chat from "@/components/ghadi/Chat/Chat";

const Ghadi = () => {
    return (
        <>
            <Head>
                <title>Ghadi Befrest</title>
                <meta name="description" content="Generated by create next app"/>
                <meta name="viewport"
                      content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <div className={"w-full inset-0 bg-ghadi-bg lg:h-full"}>
                <main className={"w-full h-full"}>
                    <section
                        className={"main flex flex-col justify-start items-start w-full  overflow-hidden lg:flex-row lg:h-full"}>
                        <div className={"send-photo flex flex-col justify-start items-start  w-full pr-5 lg:w-1/2"}>
                            <h3 style={{}}
                                className={" mt-5 font whitespace-nowrap text-white w-full k-black text-[9vw] lg:text-[5vw]"}>یـــــــــه
                                عـــــــکـــــــــســــــــ قـــــدیـــــــــــــــــــــــ</h3>
                            <h3 style={{}}
                                className={" whitespace-nowrap text-white w-full k-medium text-[9vw] lg:text-[5vw] "}>از
                                کـتابـت بــرامـون
                                بــفرســــــــــــــــ</h3>

                        </div>
                        <Carousel/>
                        <Chat/>

                    </section>

                    <div
                        className=" hidden abstract ghadi-masked w-full h-full  -bottom-20 left-0 bg-white/60 backdrop-blur fixed lg:block"/>
                </main>
            </div>
        </>
    );
};

export default Ghadi;
