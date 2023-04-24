import React from "react";

export default function SignalsExample({signals}) {

    return (
        <div className='signals'>
            <h3>Available Signals:</h3>
            <table>
                <thead>
                    <tr>
                        <th>Indicator ID</th>
                        <th>Signal ID</th>
                        <th>Name</th>
                        <th align='left'>Description</th>
                    </tr>
                </thead>
                <tbody>
                    {signals.map((val, key) => {
                        return (
                            <tr key={key}>
                                <td>{val.indicator_id}</td>
                                <td>{val.signal_id}</td>
                                <td>{val.name}</td>
                                <td>{val.description}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    )
}
