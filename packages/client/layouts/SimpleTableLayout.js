import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  makeStyles
} from '@material-ui/core';

const useStyles = makeStyles({
  tableCellHeader: {
    fontWeight: 600,
  },
  tableCellBody: {
    fontWeight: 600
  }
});



const SimpleTableLayout = ({ data = [], headers = [], headerOpacity = false }) => {
  const classes = useStyles();
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            {
              headers.map(({ header = '', style = {} }, index) => (
                <TableCell
                  className={classes.tableCellHeader}
                  key={index}
                  style={headerOpacity ? Object.assign({}, { opacity: 0.5 }, style) : style}>
                  {header}
                </TableCell>
              ))
            }
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, index) => (
            <TableRow key={index} >
              {
                headers.map(({ key, bodyStyle = {} }, index) => {
                  return (
                    <TableCell
                      className={classes.tableCellBody}
                      style={bodyStyle}
                      key={index}>
                      {row[key] || 'not defined yet'}
                    </TableCell>
                  )
                })
              }
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer >
  )
}

export default SimpleTableLayout;