import React from "react";
import logobg from "../logobg.png"

export default function Main() {
    return (
        <>
            <div className="text-white px-16 py-8 relative">
                <h1 className="font-semibold text-3xl">Fun facts about React</h1>
                <ul className="list-disc marker:text-[#61DAFB] p-8 space-y-4">
                    <li>Was first release in 2013</li>
                    <li>Was originally created by Jordan Walke</li>
                    <li>Has well over 100k stars on Github</li>
                    <li>Is maintained by Facebook</li>
                    <li>Powers thousand of enterprise app, including mobile app</li>
                </ul>
                <div className="absolute top-[10vh] right-0">
                    <img src={logobg} alt="logo bg" className="h-[350px] lg:h-[450px]" />
                </div>
            </div>
        </>
    )
}