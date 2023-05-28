import React, {useState, useEffect} from "react"
import GetApiData from './_get_api_data'

export default function SignalsExample({ indicator_id, indicator_name }) {

    const [signals, setSignals] = useState([])

    function filter_signals(all_signals) {
        let filtered_signals = all_signals.filter(sig => sig.indicator_id.toUpperCase() == indicator_id.toUpperCase())
        let signals = filtered_signals.map(sig => {
            return {signal_id: sig.signal_id, indicator_id: indicator_id, name: sig.name, description: sig.description}
        })
        setSignals(signals)
    }

    useEffect(() => {
        GetApiData("https://api.maplechart.com/v1/signals").then(
            data => {
                let signals = data["data"]
                filter_signals(signals)
            }
        )
    }, [])

    return (
        <div className='signals'>
            <h3>{indicator_name} Signals:</h3>
            <table>
                <thead>
                    <tr>
                        <th align='left'>Signal ID</th>
                        <th align='left'>Name</th>
                        <th align='left'>Description</th>
                        <th align='left'>Indicator ID</th>
                    </tr>
                </thead>
                <tbody>
                    {signals.map((signal, i) => {
                        return (
                            <tr key={i}>
                                <td>{signal.signal_id}</td>
                                <td>{signal.name}</td>
                                <td>{signal.description}</td>
                                <td>{signal.indicator_id}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    )
}
