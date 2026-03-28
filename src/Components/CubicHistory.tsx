export const CubicHistory = ({a, b, c, d}: {a: number; b: number; c: number; d: number}) => {
    return (
        <div>
        <h1>History</h1>
        <table>
            <tr>
            <td>a</td>
            <td> {a} </td>
            </tr>
            <tr>
            <td>b</td>
            <td> {b} </td>
            </tr>
            <tr>
            <td>c</td>
            <td> {c} </td>
            </tr>
            <tr>
            <td>d</td>
            <td> {d} </td>
            </tr>
        </table>
        </div>
    )
}