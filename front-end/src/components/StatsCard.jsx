import React from 'react'

export default function StatsCard({ title, value, color }) {
    return (
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
            <h2 className="text-gray-700 text-lg font-semibold mb-2">{title}</h2>
            <p className={`text-3xl font-bold ${color}`}>{value}</p>
        </div>
    )
}
