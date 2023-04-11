import React, {useEffect, useRef, useState} from "react";
import gsap, {Power4} from "gsap";
import ScrollToPlugin from "gsap/dist/ScrollToPlugin";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Notif from "@/components/ghadi/Notif/Notif";
import {motion} from "framer-motion";


gsap.registerPlugin(ScrollToPlugin);
gsap.registerPlugin(ScrollTrigger);
const Carousel = () => {


    function findCenterDiv(num: number, arr: any[]) {
        let minDiff = Infinity;
        let nearestNum = null;

        for (let i = 0; i < arr.length; i++) {
            const diff = Math.abs(num - arr[i].x);

            if (diff < minDiff) {
                minDiff = diff;
                nearestNum = arr[i];
            }
        }

        return nearestNum;
    }


    const scrollToItem = (input: string) => {
        let id = input;


        let itemWidth = 0;

        itemWidth = document.querySelector("#book-2").getBoundingClientRect().width;

        let currentId = parseInt(id.split("-")[1]);

        if (currentId > 20) {



            gsap.to(scroller.current, {
                scrollTo: {
                    offsetX: (carolRef.current?.getBoundingClientRect().width / 2) - itemWidth / 2,
                    x: "#book-17"
                },
                duration: 0,

            });

            gsap.to("#book-18 > img", {
                minHeight: "11rem",
                duration: 0,
            });

            gsap.to("#book-19 > img", {
                minHeight: "11rem",
                duration: 0,
            });


            // gsap.to("#book-21 > img", {
            //     minHeight: "11rem",
            //     duration: 0,
            // });
            // gsap.to("#book-22 > img", {
            //     minHeight: "11rem",
            //     duration: 0,
            // });

            gsap.to("#book-20 > img", {
                minHeight: "11rem",
                duration: 0,
            });
            // next()
            return
        }
        try {

            gsap.to(scroller.current, {
                scrollTo: {
                    offsetX: (carolRef.current?.getBoundingClientRect().width / 2) - itemWidth / 2,
                    x: id
                },
                ease: Power4.easeOut,
                duration: 1,
                onComplete: () => {
                    gsap.to(".phone-flash", {
                        opacity: "0",
                        duration: "1",

                    });
                    gsap.to(id + " > img", {
                        minHeight: "9rem",
                        duration: 0.5,
                        ease: Power4.easeOut,
                        onComplete: () => {
                            next();
                        }
                    });
                    gsap.to(".phone-flash", {
                        opacity: "0.8",
                        duration: "0",
                    });
                }
            });
        } catch (e) {
            console.log(e);
        }


    };

    const next = () => {
        let itemsXPositions = [] as any[];
        scroller.current?.childNodes.forEach((div) => {
            itemsXPositions.push(
                {
                    el: div,
                    x: (div as HTMLDivElement).getBoundingClientRect().x
                }
            );
        });
        scrollToItem("#book-" + (parseInt((findCenterDiv(phone.current?.getBoundingClientRect().x + phone.current?.getBoundingClientRect().width / 2, itemsXPositions).el.id as string).split("-")[1]) + 1));
    };
    const [currentIndex, setCurrentIndex] = useState(0);

    const timer = useRef();
    const lastHiddenCardIndex = useRef(0);
    useEffect(() => {

        scroller.current?.childNodes.forEach((div, index) => {

            if ((div as HTMLDivElement).getBoundingClientRect().x > carolRef.current?.getBoundingClientRect().width / 2) {
                (div as HTMLDivElement).style.setProperty("opacity", "1");
            } else {
                lastHiddenCardIndex.current = index;

            }

        });
        gsap.to("#book-" + (lastHiddenCardIndex.current + 1), {
            opacity: "0",
            duration: "0",
            onComplete: () => {
                next();
            }
        });
    }, []);

    useEffect(() => {

        document.querySelectorAll(".prices").forEach((item) => {
            item.innerHTML = randPrices[Math.floor(Math.random() * randPrices.length)];
        });
    }, []);

    const scroller = useRef<HTMLDivElement | null>(null);
    const carolRef = useRef<HTMLImageElement | null>(null);
    const phone = useRef<HTMLImageElement | null>(null);

    const [randPrices, setRandPrices] = useState([
        "20,000 تومان", "120,000 تومان ", "45,000 تومان", "رایگان", "90,000 تومان"
    ]);
    const counter = useRef(0);
    const [render, setRender] = useState(false);

    useEffect(() => {
        setRender(true);
    }, []);
    return (
        <>
            <div dir={"ltr"} className={"relative w-full lg:fixed lg:bottom-64 lg:w-full lg:translate-x-32 mt-20 "}
                 ref={carolRef}>

                <div
                    className={"flex flex-row justify-start items-center gap-3  w-full overflow-scroll relative"}
                    ref={scroller}
                    style={{scrollBehavior: "initial"}}>
                    {
                        Array(40).fill(0).map((item, index) => {
                            counter.current = counter.current + 1;
                            let div = <motion.div style={{opacity: "0"}} id={"book-" + index} key={index}
                                                  className={"book-image-container min-h-[11.5rem] max-h-[11.5rem] shrink-0 bg-white/80 rounded-2xl flex flex-col justify-start items-center p-1 snap-center "}>
                                <img id={"img-" + index} className={"rounded-2xl w-28 object-cover"}
                                     style={{minHeight: "11rem"}}
                                     src={"/ghadi/images/book" + counter.current + ".jpg"}
                                     alt="book"/>
                                <span dir={"rtl"}
                                      className={"shrink-0 mt-1 IranSans prices text-sm"}></span>
                            </motion.div>;
                            if (counter.current === 3)
                                counter.current = 0;

                            return div;
                        })
                    }
                </div>
                <div style={{opacity: "0"}}
                     className={"phone-flash w-[11rem] h-[15rem] absolute bg-white left-1/2 -translate-x-1/2 -top-3 "}></div>

                <Notif/>
                <img src="/ghadi/images/phone.png"
                     className={"absolute bottom-[-7.2rem] -translate-x-1/2 left-1/2 scale-[3] h-full z-20  "}
                     alt="" ref={phone}/>

            </div>
            <div className={"w-full bg-transparent pointer-events-none min-h-[19rem]"}></div>

        </>
    );
};

export default Carousel;