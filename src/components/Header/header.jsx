import { HiChevronDown } from "react-icons/hi";

export default function Header() {
    return (
        <>
            <nav className= "mx-auto bg-white flex justify-between p-5 items-center ">
                <ul className=" flex gap-2 font-light font-sans">
                    <li><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Grammarly_logo.svg/1200px-Grammarly_logo.svg.png" className="w-40 " /></li>
                    <li className="p-2 flex items-center">Why Grammarly <span className="cursor-pointer"><HiChevronDown /></span></li>
                    <li className="p-2 flex items-center">For Work <span className="cursor-pointer"><HiChevronDown /></span></li>
                    <li className="p-2 flex items-center">For Education <span className="cursor-pointer"><HiChevronDown /></span></li>
                    <li className="p-2 flex items-center">Compare Plans <span className="cursor-pointer"><HiChevronDown /></span></li>
                    <li className="p-2 flex items-center">Tools & Guides <span className="cursor-pointer"><HiChevronDown /></span></li>
                    
                </ul>

                <div className="font-bold ">
                <button className="hover:bg-gray-500 rounded-md p-3 cursor-pointer transition-all duration-200 mr-3">My Grammarly</button>
                <button className="bg-green-800 hover:bg-green-950 text-white rounded-md p-3 cursor-pointer transition-all duration-200">Start a free trial</button>
                </div>
            </nav>

            <div className="bg-gray-200 border-gray-700 p-4 flex items-center">
                <div className="ms-4 text-2xl"><strong>Business</strong></div>
                <ul className="flex ms-6">
                    <li className="ms-4 font-sans ">Pricing</li>
                    <li className="ms-4 font-sans flex items-center ">Solutions <span className="cursor-pointer"><HiChevronDown /> </span></li>
                    <li className="ms-4 font-sans ">Learn</li>
                    <li className="ms-4 font-sans ">Security</li>
                </ul>
            </div>
        </>
    )
}