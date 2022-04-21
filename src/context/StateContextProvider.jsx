import React, { createContext, useContext, useState } from "react";


const StateContext = createContext();
const baseURL = "https://google-search1.p.rapidapi.com/google-search";

export const StateContextProvider = ({ children }) => {
    const [results, setResults] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState("SearchQuery");

    // type -> images, video, news, search
    const getResults = async(type) => {
        setIsLoading(true);

        const response = await fetch(`${baseURL}${type}`, {
            method:"GET",
            headers: {
                'X-RapidAPI-Host': 'google-search1.p.rapidapi.com',
                'X-RapidAPI-Key': process.env.GOOGLE_API_KEY
            }
        });
        const data = await response.json();

        if(type.includes("/news")){
            setResults(data.entries);
        }else if(type.includes("/images")){
            setResults(data.image_results);
        }else{
            setResults(data.results);
        };

        setIsLoading(false);
    };


    return(
        <StateContext.Provider value={{ getResults, results, searchTerm, setSearchTerm, isLoading }}>
            {children}
        </StateContext.Provider>
    );
};

export const useStateContext = () => useContext(StateContext);