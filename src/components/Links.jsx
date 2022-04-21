import React from 'react';
import { NavLink } from "react-router-dom";


const links = [
    {url: "/search", text: "⚲ All"},
    {url: "/images", text: "☛ Images"},
    {url: "/videos", text: "☛ Videos"},
    {url: "/news", text: "☛ News"},
]

export const Links = () => {
  return (
    <div className="flex sm:justify-around justify-between items-center mt-4">
        {links.map(({ url, text }) => (
            <NavLink to={url} key={url} className="text-gray-500 border-b-2 dark:text-blue-300 border-blue-700 pb-1 mx-3 mb-0 hover:text-blue-700">
                {text}
            </NavLink>
        ))}
    </div>
  )
}
