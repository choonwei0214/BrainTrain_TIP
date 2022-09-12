import Table from 'react-bootstrap/Table';

function Assignments3() {
    return (
        <Table striped hover>
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Project</th>
                    <th>Weightage</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>12/9/2022</td>
                    <td>English Composition, Text 1</td>
                    <td>10%</td>
                </tr>
                <tr>
                    <td>13/9/2022</td>
                    <td>E Math practice questions</td>
                    <td>10%</td>
                </tr>
                <tr>
                    <td>13/9/2022</td>
                    <td>Chinese composition revision paper</td>
                    <td>10%</td>
                </tr>
                <tr>
                    <td>12/9/2022</td>
                    <td>History section B</td>
                    <td>20%</td>
                </tr>
            </tbody>
        </Table>
    );
}

export default Assignments3;