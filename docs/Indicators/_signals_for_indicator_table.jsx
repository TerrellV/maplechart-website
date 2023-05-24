import React, {useState, useEffect} from "react"


export default function SignalsExample({ indicator_id, indicator_name }) {

    // const [indicators, setIndicators] = useState([])
    const [signals, setSignals] = useState([])

    function filter_signals(all_signals) {
        let filtered_signals = all_signals.filter(sig => sig.indicator_id.toUpperCase() == indicator_id.toUpperCase())
        let signals = filtered_signals.map(sig => {
            return {signal_id: sig.signal_id, indicator_id: indicator_id, name: sig.name, description: sig.description}
        })
        setSignals(signals)
    }

    function get_signals() {
        const today = new Date().toISOString().slice(0, 10)
        let signals = localStorage.getItem("signals")
        let signalsDate = localStorage.getItem("signalsDate")
        if (signals === null || signalsDate != today || signals === "null") {
            // write a javascript function to get related signals to a list of indicators
            console.log("Fetching signals from api")
            fetch("https://api.maplechart.com/v1/signals")
                .then(r => {
                    return r.json()
                })
                .then(data => {
                    const all_signals = data["data"]
                    localStorage.setItem("signals", JSON.stringify(all_signals))
                    localStorage.setItem("signalsDate", today)
                    filter_signals(all_signals)
                })
        } else {
            console.log("Signals found in cache")
            filter_signals(JSON.parse(signals))
        }

    }

    useEffect(() => {
        console.log("use effect")
        get_signals()
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
