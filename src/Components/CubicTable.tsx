import { CubicData } from "./CubicData.ts";

export const CubicTable = ({ a, b, c, p, q, discriminant, roots }: CubicData) => {
    return (
        <table>
            <tr>
                <td>p</td>
                <td>{p}</td>
            </tr>
            <tr>
                <td>q</td>
                <td>{q}</td>
            </tr>
            <tr>
                <td >Discriminant</td>
                <td>{discriminant}</td>
            </tr>
            <tr>
                <td>Root 1</td>
                <td>{roots[0]}</td>
            </tr>
            <tr>
                <td>Root 2</td>
                <td>{roots[1]}</td>
            </tr>
            <tr>
                <td>Root 3</td>
                <td>{roots[2]}</td>
            </tr>
        </table>
    );
};