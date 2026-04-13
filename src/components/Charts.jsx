import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Label } from 'recharts'

const CustomTooltip = ({ active, payload, unit }) => {
    if (!active || !payload || !payload.length) return null
    const name = payload[0]?.payload?.name ?? ''
    const value = payload[0]?.value
    return (
        <div style={{
            background: 'var(--bg)',
            border: '1px solid var(--border)',
            borderRadius: '8px',
            padding: '0.5rem 0.75rem',
            maxWidth: '180px',
            fontSize: '0.78rem',
            lineHeight: '1.5',
        }}>
            <p style={{ fontWeight: 600, marginBottom: '0.25rem', wordBreak: 'break-word' }}>{name}</p>
            <p style={{ opacity: 0.7 }}>{value}{unit}</p>
        </div>
    )
}

const Charts = ({ results }) => {
    const healthData = results.map(r => ({ name: r.title, healthScore: r.healthScore }))
    const cookingTimeData = results.map(r => ({ name: r.title, minutes: r.readyInMinutes }))

    return (
        <>
            <div className="chart-block">
                <h4>Health Score</h4>
                <ResponsiveContainer width="100%" height={200}>
                    <BarChart data={healthData} margin={{ bottom: 20 }}>
                        <XAxis dataKey="name" hide>
                            <Label value="Health Score (0-100)" position="insideBottom" offset={-10} style={{ fontSize: '0.7rem', opacity: 0.6 }} />
                        </XAxis>
                        <YAxis domain={[0, 100]} width={30} />
                        <Tooltip content={<CustomTooltip unit="" />} />
                        <Bar dataKey="healthScore" fill="#c2714f" radius={[3, 3, 0, 0]} />
                    </BarChart>
                </ResponsiveContainer>
            </div>

            <div className="chart-block">
                <h4>Cook Time (min)</h4>
                <ResponsiveContainer width="100%" height={200}>
                    <BarChart data={cookingTimeData} margin={{ bottom: 20 }}>
                        <XAxis dataKey="name" hide>
                            <Label value="Cook Time (minutes)" position="insideBottom" offset={-10} style={{ fontSize: '0.7rem', opacity: 0.6 }} />
                        </XAxis>
                        <YAxis domain={[0, 'auto']} width={30} />
                        <Tooltip content={<CustomTooltip unit=" min" />} />
                        <Bar dataKey="minutes" fill="#a0522d" radius={[3, 3, 0, 0]} />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </>
    )
}

export default Charts
