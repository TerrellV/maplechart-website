import React, { useEffect, useState } from "react";
import CodeBlock from '@theme/CodeBlock';

export function SampleResponse({endpoint, method = "GET"}) {

    let [{ json_str }, setState] = useState({ json_str: '' })

    useEffect(() => {

        console.log("use effect")
        let isMounted = true
        endpoint = (endpoint[0] === "/") ? endpoint.slice(1) : endpoint
        endpoint = endpoint.replace(/^\/|\/$/, "")  // replace leading and trailing '/'s

        const filename = endpoint.replace(/\//g, '#')  // replace internal '/'s
        const json_path = `/sample_endpoint_responses/${filename}.json`
        console.log(`fetching local json file ${json_path}`)

        async function loadJson() {
            const r = await fetch(json_path)
            if (r.status === 200 & isMounted) {
                const data = await r.json()
                setState(state => {
                    return {json_str: JSON.stringify(data, null, 4)}
                })
            }

        }

        loadJson()
        return () => {
            isMounted = false;
        }


    }, [endpoint])

    return (
        <CodeBlock
            language="json"
            title={`${method} 'api.maplechart.com/${endpoint}' status code = 200`}
            showLineNumbers={false}
        >
            {json_str}
        </CodeBlock>
    )
}