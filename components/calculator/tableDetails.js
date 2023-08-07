import { Table, TableCell, TableRow } from '@material-ui/core'
import { TableHead } from '@mui/material'
import {formatNumberAmount} from './../../utils' 
const tableDetails = (props) => {
  

  return (
    <Table style={{ width: "100%", border: "2px solid #ccc" }} area-lable="sample table" >
      <TableHead>
        <TableRow>
          <TableCell className='ETablecellText'>Loan Amount</TableCell>
          <TableCell className='ETablecellValue'><strong>₹</strong>{formatNumberAmount(props.loanamt)}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className='ETablecellText'>Interest %</TableCell>
          <TableCell className='ETablecellValue'>{props.interest} <strong> % </strong></TableCell>
        </TableRow>
        <TableRow>
          <TableCell className='ETablecellText'>Tenure ({props.tenureType})</TableCell>
          <TableCell className='ETablecellValue'>{props.tenure}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className='ETablecellText'>Emi (monthly)</TableCell>
          <TableCell className='ETablecellValue'><strong>₹ </strong>{formatNumberAmount(props.emi)}</TableCell>
        </TableRow>

        <TableRow>
          <TableCell className='ETablecellText'>Total Interest</TableCell>
          <TableCell className='ETablecellValue'><strong>₹ </strong>{formatNumberAmount(props.totalIntrest)}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className='ETablecellText'>Loan Amount + Interest</TableCell>
          <TableCell className='ETablecellValue'><strong>₹ </strong>{props.tatalpayment ? formatNumberAmount(props.tatalpayment) : 0}</TableCell>
        </TableRow>
      </TableHead>
    </Table>
  )
}

export default tableDetails