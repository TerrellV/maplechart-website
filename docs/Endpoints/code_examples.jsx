import React from "react";
import TabItem from "@theme/TabItem";
import Tabs from "@theme/Tabs";
import CodeBlock from '@theme/CodeBlock';

const shellCode = (url) => {
    return `curl "${url}"`
}
const pythonCode = (url) => {
    const code = `\
import json
import requests  # pip install requests

url = "${url}"
r = requests.get(url)
data = r.json()["data"]

print(json.dumps(data, indent=4))\
`
    return code
}

const javascriptCode = (url) => {
    const code = `\
fetch("${url}")
    .then((r) => r.json())
    .then((data) => console.log(data));`
    return code
}

export default function CodeExamples({url}) {
    return (
        <Tabs>
            <TabItem value="Python">
                <CodeBlock
                    language="python"
                    title="python 3 example"
                    showLineNumbers
                >
                    {pythonCode(url)}
                </CodeBlock>
            </TabItem>
            <TabItem value="JavaScript">
                <CodeBlock
                    language="javascript"
                    title="javascript example"
                    showLineNumbers
                >
                    {javascriptCode(url)}
                </CodeBlock>
            </TabItem>
            <TabItem value="Shell">
                <CodeBlock
                    language="bash"
                    title="cURL example"
                    showLineNumbers
                >
                    {shellCode(url)}
                </CodeBlock>
            </TabItem>
        </Tabs>
    )
}