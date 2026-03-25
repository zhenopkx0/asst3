import { CubicData } from "./CubicData.ts";

export const CubicTable = ({p, q, discriminant, root1, root2, root3}: CubicData) => {
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
                <td>{root1}</td>
            </tr>
            <tr>
                <td>Root 2</td>
                <td>{root2}</td>
            </tr>
            <tr>
                <td>Root 3</td>
                <td>{root3}</td>
            </tr>
        </table>
    );
};