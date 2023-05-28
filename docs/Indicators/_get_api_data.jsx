import React, {useState, useEffect} from "react"


function _fetch_and_cache_data(url) {
    const today = new Date().toISOString().slice(0, 10)
    console.log(`Fetching data from ${url}`)
    return fetch(url)
        .then((r)=> r.json())
        .then(data => {
            let cached_string = JSON.stringify({
                "as_of_date": today,
                "json_response": data,
            });
            localStorage.setItem(url, cached_string);
        })
}

export default async function GetApiData(url) {

    const today = new Date().toISOString().slice(0, 10)
    let cached_data = localStorage.getItem(url)

    if (cached_data === null || cached_data.as_of_date != today) {
        const data = await _fetch_and_cache_data(url)
    }

    const data = JSON.parse(cached_data)
    return data.json_response

}
