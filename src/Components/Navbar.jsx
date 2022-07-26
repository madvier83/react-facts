import React from "react"
import logo from "../logo.svg"

export default function Navbar() {
    return (
        <>
            <nav className="bg-[#21222A] text-[#00D8FF]">
                <div className="flex px-12 py-4 items-center justify-between">
                    <div className="flex items-center">
                        <img src={logo} alt="logo" className="w-24" />
                        <h1 className="text-3xl font-bold">ReactFacts</h1>
                    </div>
                    <p className="text-xl text-white">React Course - Project 1</p>
                </div>
            </nav>
        </>
    )
}