import React, { useEffect, useState } from "react";
import CodeBlock from '@theme/CodeBlock';
import useBaseUrl from '@docusaurus/useBaseUrl'
import myData from '/data_responses/indicators.json';

export function SampleResponse({endpoint, show_line_numbers}) {

    let [{ json_str }, setState] = useState({ json_str: '' })

    useEffect(() => {
        console.log("use effect")
        endpoint = (endpoint[0] === "/") ? endpoint.slice(1) : endpoint
        endpoint = endpoint.replace(/^\/|\/$/, "")  // replace leading and trailing '/'s

        const filename = endpoint.replace(/\//g, '#')  // replace internal '/'s
        const json_path = `/data_responses/${filename}.json`
        console.log(`fetching local json file ${json_path}`)
        async function loadJson() {
            const r = await fetch(json_path)
            console.log(r)
        }

        loadJson()



    }, [endpoint])

    return (
        <CodeBlock
            language="json"
            title="test"
            showLineNumbers
        >
            {json_str}
        </CodeBlock>
    )
}