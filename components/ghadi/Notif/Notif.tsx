import React, {useEffect, useState} from "react";

const Notif = () => {
    const [showNotif, setShowNotif] = useState(false);
    const messages = ["befrest aksa ro dige", "shab kojaii?", "kdoom ketab?", "too unimun bood","vpn chi dari?",'ketaba manm bzan','khoshet oomade?'];
    useEffect(() => {
        setMessage(messages[Math.floor(Math.random() * messages.length)]);
        setTimeout(() => {
            setShowNotif(true);
            setTimeout(() => {
                setShowNotif(false);
            }, 3000);
        }, 3000);
    }, []);
    const [message, setMessage] = useState("");
    return (
        <div dir={"ltr"}
             className={`absolute top-0 h-10 w-36 left-1/2 -translate-x-1/2 px-2 h-12 bg-white/50 backdrop-blur rounded-2xl flex flex-row justify-start items-center transition-all duration-200 ${showNotif ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full"}`}>

            <img src="/ghadi/images/amir.png" className={"w-8 h-8 rounded-xl object-cover "} alt=""/>

            <div className={"flex ml-1 flex-col justify-start items-start h-full py-2"}>
                <span className={"text-[0.6rem]"}>Amir</span>
                <span className={"font-light text-[0.6rem]"}>{message}</span>
            </div>
        </div>
    );
};

export default Notif;