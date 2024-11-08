import {calculateInvestmentResults,formatter} from '../util/investment.js'
export default function Results({userdata}){
    const res = calculateInvestmentResults(userdata)
    const initInvest = res[0].valueEndOfYear-
        res[0].interest-
        res[0].annualInvestment;
    return (
       <table id="result">
        <thead>
        <tr>
            <th>Year</th>
            <th>Investment Value</th>
            <th>Interest (Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
            </tr>
        </thead>
        <tbody>
           {res.map((dispdata)=>{
            const totalint = dispdata.valueEndOfYear - dispdata.interest*dispdata.year-initInvest;
            const totalAmt = dispdata.valueEndOfYear - totalint;
            return(
                <tr key={dispdata.year}>
                    <td>{dispdata.year}</td>
                    <td>{formatter.format(dispdata.valueEndOfYear)}</td>
                    <td>{formatter.format(dispdata.interest)}</td>
                    <td>{formatter.format(totalint)}</td>
                    <td>{formatter.format(totalAmt)}</td>
                </tr>
    )         
           }
           )}
        </tbody>
       </table>
    );
    }