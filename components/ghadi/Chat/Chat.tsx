import React from 'react';
import { motion } from "framer-motion"
const Chat = () => {
    return (
        <div className={' w-full h-auto shrink-0 grid place-items-center -mt-2 z-30 '}>
            <div className={'rounded-[3rem] w-11/12 max-w-md  bg-white/80 backdrop-blur relative overflow-hidden'}>
                <div className={'w-full bg-white/30 h-20 flex flex-row items-center justify-start px-3 '}>
                    <img src="/ghadi/images/unimun.png" alt="Unimun" className={'rounded-full w-16 h-16'}/>
                    <div className={'flex flex-col justify-center items-start h-full mr-3 '}>
                        <span className={'k-medium text-xl'}>یونیمون</span>
                        <span className={'mt-1 text-ghadi-bg k-medium'}>آنلاین</span>
                    </div>
                </div>
                <div className={'w-full h-48 flex flex-col justify-start items-end px-3 gap-3 pt-5'}>


                    <motion.div whileInView={{opacity:1}}  initial={{opacity:0}} className={'bg-white rounded-2xl rounded-bl-none drop-shadow-md flex flex-col justify-start items-end px-3 py-2'}>
                        <h3>ســلام ، عیدت مبارک</h3>
                        <p className={'text-sm mt-1 text-gray-600'}>13:02</p>
                    </motion.div>
                    <div
                        className={'bg-white rounded-2xl rounded-bl-none drop-shadow-md flex flex-col justify-start items-end px-3 py-2'}>
                        <h3>ســلام ، عیدت مبارک</h3>
                        <p className={'text-sm mt-1 text-gray-600'}>13:02</p>
                    </div>

                    <div
                        className={'bg-white rounded-2xl rounded-bl-none drop-shadow-md flex flex-col justify-start items-end px-3 py-2'}>
                        <h3>ســلام ، عیدت مبارک</h3>
                        <p className={'text-sm mt-1 text-gray-600'}>13:02</p>
                    </div>


                </div>

            </div>
        </div>
    );
};

export default Chat;
