import React, {useState, useEffect} from "react"
import GetApiData from './_get_api_data'

export default function IndicatorDescription({ indicator_id}) {

    const [indicator, setIndicator] = useState([])

    useEffect(() => {
        GetApiData("https://api.maplechart.com/v1/indicators").then(
            data => {
                let indicators = data["data"]
                const indicator = indicators.filter(i => i.indicator_id.toUpperCase() == indicator_id.toUpperCase())[0]
                setIndicator(indicator)
            }
        )
    }, [])

    return (
        <p >
            {indicator.description}
        </p>
    )
}
