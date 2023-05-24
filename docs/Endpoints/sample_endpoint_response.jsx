import TabItem from "@theme/TabItem";
import Tabs from "@theme/Tabs";
import CodeBlock from '@theme/CodeBlock';
import React, { useState, useEffect } from "react"
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';


export default function EndpointResponse({ endpoint, max_items}) {

    const {siteConfig} = useDocusaurusContext()
    const [json_response, set_json_response] = useState("{}")

    useEffect(() => {
        fetch(`${siteConfig.customFields.rootAPIUrl}${endpoint}`)
            .then(r => r.json())
            .then((data) => {
                if (endpoint.includes("pairs/signals")) {
                    // TODO: truncate result
                }

                else {
                    data["data"] = data.data.slice(0, max_items)
                }
                set_json_response(JSON.stringify(data, null, 4))
            })
    }, [])

    return (
        <CodeBlock
            language="json"
            title={`GET '${siteConfig.customFields.rootAPIUrl}${endpoint}' status_code = 200`}
        >
            {json_response}
        </CodeBlock>
    )
}