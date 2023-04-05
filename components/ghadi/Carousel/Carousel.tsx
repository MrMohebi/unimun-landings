import React, {useEffect, useRef, useState} from "react";
import gsap from "gsap";
import $ from "jquery";

const Carousel = () => {


    function findCenterDiv(num: number, arr: any[]) {
        let minDiff = Infinity;
        let nearestNum = null;

        for (let i = 0; i < arr.length; i++) {
            const diff = Math.abs(num - arr[i]);

            if (diff < minDiff) {
                minDiff = diff;
                nearestNum = arr[i];
            }
        }

        return nearestNum;
    }

    const next = () => {
        let itemWidth = 0;
        try {
            console.log((scroller.current as HTMLDivElement));
            itemWidth = (scroller.current?.firstChild as HTMLDivElement).getBoundingClientRect().width;
            console.log(itemWidth);
        } catch (e) {
            next();
        }

        let itemsXPositions = [] as any[];
        scroller.current?.childNodes.forEach((div) => {
            itemsXPositions.push(
                {
                    el: div,
                    x: (div as HTMLDivElement).getBoundingClientRect().x
                }
            );
        });
        console.log(itemsXPositions);

    };
    const [currentIndex, setCurrentIndex] = useState(0);
    useEffect(() => {
        setInterval(() => {
            next();
        }, 2000);
    }, []);
    const scroller = useRef<HTMLDivElement | null>(null);
    return (
        <>
            <div className={"relative w-full"}>
                <div
                    className={"flex flex-row justify-start items-center gap-3 snap-x snap-mandatory w-full overflow-scroll scroll-smooth relative"}
                    ref={scroller}>
                    {
                        Array(50).fill(0).map((item, index) => {
                            return <div id={"book-" + index} key={index}
                                        className={"book-image-container shrink-0 bg-white/80 rounded-2xl flex flex-col justify-start items-center p-1 snap-center "}>
                                <img id={"img-" + index} className={"rounded-2xl w-28"}
                                     src="data:image/jpeg;base64,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"
                                     alt="book"/>
                            </div>;
                        })
                    }
                </div>
                <img src="/ghadi/images/phone.png"
                     className={"absolute bottom-[-7.2rem] -translate-x-1/2 left-1/2 scale-[3] h-full"}
                     alt=""/>
            </div>

        </>
    );
};

export default Carousel;