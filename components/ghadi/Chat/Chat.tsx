import React, {useEffect, useRef, useState} from "react";
import {motion} from "framer-motion";
import {ButtonBase} from "@mui/material";

const Chat = () => {

    useEffect(() => {
        let dropzone = document.getElementById("dropzone") ?? document.createElement("div");

        // Prevent default drag behaviors
        ["dragenter", "dragover", "dragleave", "drop"].forEach(eventName => {
            dropzone.addEventListener(eventName, preventDefaults, false);
            document.body.addEventListener(eventName, preventDefaults, false);
        });

        // Highlight drop zone when item is dragged over it
        ["dragenter", "dragover"].forEach(eventName => {
            dropzone.addEventListener(eventName, highlight, false);
        });

        ["dragleave", "drop"].forEach(eventName => {
            dropzone.addEventListener(eventName, unhighlight, false);
        });

        // Handle dropped files
        dropzone.addEventListener("drop", handleDrop, false);

        function preventDefaults(e: any) {
            e.preventDefault();
            e.stopPropagation();
        }

        function highlight() {
            dropzone.style.backgroundColor = "rgba(238,238,238,0.63)";
        }

        function unhighlight() {
            dropzone.style.backgroundColor = "";
        }

        function handleDrop(e: any) {
            var dt = e.dataTransfer;
            var files = dt.files;

            handleFiles(files);
        }

        function handleFiles(files: any) {

        }
    }, []);

    const [items, setItems] = useState([{name: "1"}, {name: "2"}]);

    useEffect(() => {
        setTimeout(() => {
            setItems(items);
        }, 2000);
    }, []);
    const getCurrentTime = () => {
        let date = new Date();
        return date.getHours() + ":" + date.getMinutes();
    };


    const [imageFile, setImageFile] = useState(null);
    const imgRef = useRef<HTMLImageElement | null>(null);
    const [uniTyping, setUniTyping] = useState(false);
    const [priceSection, setPriceSection] = useState(false);
    const chatScroller = useRef<HTMLDivElement | null>(null);
    const [price, setPrice] = useState("");
    const priceInputRef = useRef<HTMLInputElement | null>(null);
    const [priceTextInput, setPriceTextInput] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [render, setRender] = useState(false);
    const scrollDown = () => {
        console.log("ay");
        chatScroller.current?.scrollBy(0, 5000);
    };
    useEffect(() => {
        setRender(true);
    }, []);
    const [seen, setSeen] = useState(false);
    return render ? (

        <div
            className={" w-full h-full shrink-0 flex flex-col justify-center items-start -mt-2 z-30 lg:h-full lg:place-items-start lg:w-1/2 "}>
            <div
                className={"rounded-[3rem] w-11/12 max-w-lg mx-auto bg-white/80 backdrop-blur relative overflow-hidden h-96  lg:h-2/3"}>
                <div className={"w-full bg-white/70 h-20 flex flex-row items-center justify-start px-3 "}>
                    <img src="/ghadi/images/unimun.png" alt="Unimun" className={"rounded-full w-16 h-16"}/>
                    <div className={"flex flex-col justify-center items-start h-full mr-3 "}>
                        <span className={" text-xl IranSansMedium"}>یونیمون</span>
                        <span
                            className={"mt-1 text-ghadi-bg text-sm IranSans"}>{uniTyping ? "درحال نوشتن..." : "آنلاین"}</span>
                    </div>
                </div>
                <div
                    className={" scroller scroll-smooth w-full h-full flex flex-col justify-start items-end px-3 gap-2 pt-5 IranSans overflow-y-scroll relative"}
                    ref={chatScroller}>


                    <motion.div className={"contents shrink-0"}>
                        <motion.div viewport={{once: true}} animate={{opacity: 1, y: 0}}
                                    initial={{opacity: 0, y: 100}}
                                    className={"bg-white rounded-3xl rounded-bl-none  flex flex-col justify-start items-end px-3 py-2 text-sm"}>
                            <h3>ســلام ، عیدت مبارک</h3>
                            <p className={"text-sm mt-1 text-gray-600"}>{getCurrentTime()}</p>
                        </motion.div>

                        <motion.div viewport={{once: true}} animate={{opacity: 1, y: 0}} transition={{delay: 0.2}}
                                    initial={{opacity: 0, y: 100}}
                                    className={"bg-white rounded-3xl rounded-bl-none  flex flex-col justify-start items-end px-3 py-2 text-sm"}>
                            <h3>بی زحمت یه عکس قدی از کتابت میشه بفرستی ؟</h3>
                            <p className={"text-sm mt-1 text-gray-600"}>{getCurrentTime()}</p>
                        </motion.div>

                    </motion.div>


                    {
                        imageFile ?
                            <div className={"w-full flex flex-row items-start justify-start relative"}>
                                <motion.div onAnimationStart={scrollDown} onAnimationEnd={() => {

                                    console.log("ay");
                                    chatScroller.current?.scrollBy(0, 500);


                                }} animate={{opacity: 1, y: 0}} transition={{delay: 0.2}}
                                            initial={{opacity: 0, y: 100}}
                                            className={"bg-white rounded-3xl rounded-br-none shrink-0 flex flex-col justify-start items-end px-3 py-2 text-sm relative overflow-hidden"}>
                                    <div onClick={() => {
                                        if (submitted) {
                                            setSeen(true);
                                            return;
                                        }
                                        if (!uniTyping) {
                                            setImageFile(null);
                                            setPriceSection(false);
                                            setPriceTextInput(false);
                                            setPrice("");
                                        }


                                    }}
                                         className={"absolute w-full h-full top-0 left-0 bg-white/70 backdrop-blur rounded-2xl grid place-items-center opacity-0 hover:opacity-100 transition-all cursor-pointer"}>
                                        {
                                            uniTyping ?
                                                <p>یونیمون هنوز ندیده عکست رو</p>
                                                :
                                                <img src="/ghadi/icon/trash.png" className={"w-10"} alt=""/>

                                        }
                                    </div>

                                    <img src={imageFile} alt="" ref={imgRef} className={"max-w-sm w-64 rounded-2xl  "}/>
                                    <p className={"text-sm mt-1 text-gray-600 text-right w-full"}>{getCurrentTime()}</p>
                                </motion.div>
                            </div> :
                            <>
                                <motion.div className={"w-full flex flex-col justify-center items-center shrink-0"}
                                            initial={{
                                                y: 50,
                                                opacity: 0
                                            }} animate={{
                                    y: 0,
                                    opacity: 1
                                }}>
                                    <button
                                        className={"h-14 shrink-0 bg-ghadi-bg mx-auto text-white rounded-2xl px-4 IranSansMedium mt-10 relative"}>
                                        آپلود عکس قدی
                                        <input onChange={(e) => {
                                            e.target.files = null;
                                            let fr = new FileReader();
                                            fr.onload = function () {
                                                setImageFile(fr.result);
                                            };
                                            fr.readAsDataURL(e.currentTarget.files[0]);
                                            setTimeout(() => {
                                                setUniTyping(true);

                                            }, 500);
                                            setTimeout(() => {
                                                setUniTyping(false);
                                                setPriceSection(true);
                                                setPriceTextInput(true);
                                            }, 2000);
                                        }} className={"w-full h-full absolute left-0 top-0 opacity-0 cursor-pointer"}
                                               type="file"
                                               accept="image/*"/>
                                    </button>

                                    <div id="dropzone"
                                         className={"w-full h-20 flex flex-col justify-center items-center text-[0.8rem]"}>
                                        یا اگه دوس داری
                                        عکسو بکش بنداز اینجا
                                    </div>
                                </motion.div>


                            </>

                    }

                    {
                        priceSection ?
                            <motion.div onAnimationStart={scrollDown} animate={{opacity: 1, y: 0}}
                                        initial={{opacity: 0, y: 100}}
                                        className={"bg-white rounded-3xl rounded-bl-none  flex flex-col justify-start items-end px-3 py-2 text-sm shrink-0"}>
                                <h3>قیمت چند بزاریم واست؟</h3>
                                <p className={"text-sm mt-1 text-gray-600"}>{getCurrentTime()}</p>
                            </motion.div>
                            :
                            null
                    }
                    {price ?

                        <div className={"flex flex-row justify-start items-start w-full"}>
                            <motion.div onAnimationStart={scrollDown} animate={{opacity: 1, y: 0}}
                                        initial={{opacity: 0, y: 100}}
                                        className={"bg-white rounded-3xl rounded-br-none  flex flex-col justify-start items-end px-3 py-2 text-sm shrink-0"}>
                                <h3 dir={"rtl"}> {price} تومان</h3>
                                <p className={"text-sm mt-1 text-gray-600"}>{getCurrentTime()}</p>
                            </motion.div>
                        </div>
                        : null


                    }
                    {
                        submitted ?
                            <motion.div onAnimationStart={scrollDown} animate={{opacity: 1, y: 0}}
                                        initial={{opacity: 0, y: 100}}
                                        className={"bg-white rounded-3xl rounded-bl-none  flex flex-col justify-start items-end px-3 py-2 text-sm shrink-0"}>
                                <h3>چند مین دیگه توی یونیمون کتابتو چک کن :)</h3>
                                <p className={"text-sm mt-1 text-gray-600"}>{getCurrentTime()}</p>
                            </motion.div>
                            :
                            null
                    }
                    {
                        seen ?
                            <motion.div onAnimationStart={scrollDown} animate={{opacity: 1, y: 0}}
                                        initial={{opacity: 0, y: 100}}
                                        className={"bg-white rounded-3xl rounded-bl-none  flex flex-col justify-start items-end px-3 py-2 text-sm shrink-0"}>
                                <h3>عکستو فرستادم رفت دیگه واسه پاک کردنش دیره 💔</h3>
                                <p className={"text-sm mt-1 text-gray-600"}>{getCurrentTime()}</p>
                            </motion.div>
                            :
                            null
                    }

                    <div className={"w-full h-36 shrink-0"}></div>

                </div>
                {
                    priceTextInput ?

                        <div
                            className={"absolute left-0 top-0 w-full h-full flex flex-col-reverse items-center justify-start pointer-events-none"}>
                            <motion.div initial={{opacity: 0, y: 50}} animate={{opacity: 1, y: 0}}
                                        className={" w-full h-16 bg-white grid grid-cols-12 place-items-center px-4  left-0 bottom-0 pointer-events-auto"}>
                                <ButtonBase onClick={() => {
                                    console.log(priceInputRef.current?.value);
                                    setPrice(priceInputRef.current?.value);

                                    setPriceTextInput(false);
                                    setUniTyping(true);
                                    setTimeout(() => {
                                        setSubmitted(true);
                                        setUniTyping(false);
                                    }, 1000);

                                }}
                                            className={"rounded-full w-12 h-12 col-span-2 flex flex-col justify-center items-center"}>
                                    <img src="/ghadi/icon/send.png" className={"w-5 aspect-square  "} alt=""/>


                                </ButtonBase>
                                <input type="number" pattern="[0-9]*" inputMode="numeric"
                                       className={"bg-gray-100/50 outline-0 px-3 h-10 rounded-full col-span-10 w-full"}
                                       ref={priceInputRef}/>
                            </motion.div>
                        </div> :
                        null

                }


            </div>
        </div>
    ) : null
        ;
};

export default Chat;
