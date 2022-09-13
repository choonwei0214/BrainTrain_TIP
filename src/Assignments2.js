import Table from 'react-bootstrap/Table';

function Assignments2() {
    return (
        <Table striped hover>
            <thead>
                <tr className="lolol">
                    <th>Date</th>
                    <th>Project</th>
                    <th>Weightage</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>12/9/2022</td>
                    <td><span className='hist-ass ass-icon'></span> History section B</td>
                    <td>20%</td>
                </tr>
                <tr>
                    <td>12/9/2022</td>
                    <td><span className='eng-ass ass-icon'></span> English Composition, Text 1</td>
                    <td>10%</td>
                </tr>
                <tr>
                    <td>13/9/2022</td>
                    <td><span className='e-math-ass ass-icon'></span> E Math practice questions</td>
                    <td>10%</td>
                </tr>
                <tr>
                    <td>13/9/2022</td>
                    <td><span className='chi-ass ass-icon'></span> Chinese composition revision paper</td>
                    <td>10%</td>
                </tr>
            </tbody>
        </Table>
    );
}

export default Assignments2;