import React from "react";
import {BsCodeSlash} from 'react-icons/bs';

function Footer (){
    return (

        <div>

        <div className=" flex mx-auto justify-center py-3 hover:cursor-pointer hover:text-gray-900 hover:shadow-zinc-700 w-[180px]">
            <BsCodeSlash className="my-1 gap-7 text-2xl"/>
            <div className="gap-3 py-1 px-2">by Manish Sahu</div>
        </div>

        </div>
    );
}


export default Footer;