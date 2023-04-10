import React, {useEffect, useState} from "react";
import {motion, stagger} from "framer-motion";

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
    return (

        <div className={" w-full h-full shrink-0 flex flex-col justify-center items-start -mt-2 z-30 lg:h-full lg:place-items-start lg:w-1/2"}>
            <div
                className={"rounded-[3rem] w-11/12 max-w-lg mx-auto bg-white/80 backdrop-blur relative overflow-hidden pb-10 lg:h-2/3"}>
                <div className={"w-full bg-white/70 h-20 flex flex-row items-center justify-start px-3 "}>
                    <img src="/ghadi/images/unimun.png" alt="Unimun" className={"rounded-full w-16 h-16"}/>
                    <div className={"flex flex-col justify-center items-start h-full mr-3 "}>
                        <span className={" text-xl IranSansMedium"}>یونیمون</span>
                        <span className={"mt-1 text-ghadi-bg text-sm IranSans"}>آنلاین</span>
                    </div>
                </div>
                <div className={"w-full flex flex-col justify-start items-end px-3 gap-2 pt-5 IranSans"}>


                    <motion.div className={"contents"}>
                        <motion.div whileInView={{opacity: 1, y: 0}} initial={{opacity: 0, y: 100}}
                                    className={"bg-white rounded-3xl rounded-bl-none  flex flex-col justify-start items-end px-3 py-2 text-sm"}>
                            <h3>ســلام ، عیدت مبارک</h3>
                            <p className={"text-sm mt-1 text-gray-600"}>13:02</p>
                        </motion.div>

                        <motion.div whileInView={{opacity: 1, y: 0}} transition={{delay: 0.2}}
                                    initial={{opacity: 0, y: 100}}
                                    className={"bg-white rounded-3xl rounded-bl-none  flex flex-col justify-start items-end px-3 py-2 text-sm"}>
                            <h3>بی زحمت یه عکس قدی از کتابت میشه بفرستی ؟</h3>
                            <p className={"text-sm mt-1 text-gray-600"}>13:02</p>
                        </motion.div>

                    </motion.div>
                    <motion.div layout className={"test anim"}></motion.div>

                    <button
                        className={"h-14 shrink-0 bg-ghadi-bg mx-auto text-white rounded-2xl px-4 IranSansMedium mt-8"}>
                        آپلود عکس قدی
                    </button>

                    <div id="dropzone"
                         className={"w-full h-20 flex flex-col justify-center items-center text-[0.8rem]"}>
                        یا اگه دوس داری
                        عکسو بکش بنداز اینجا
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Chat;
