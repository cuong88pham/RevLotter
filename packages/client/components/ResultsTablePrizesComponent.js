import React from 'react';

export default function ResultsTablePrizesComponent({ prizeBreakdown }) {
  return (
    <table className="table table-hover">
      <thead>
        <tr>
          <th scope="col">Divisions</th>
          <th scope="col">Match</th>
          <th scope="col">Payout per winner</th>
          <th scope="col">Jackpot</th>
          <th scope="col">Payout per winners</th>
        </tr>
      </thead>
      <tbody>
        {prizeBreakdown.map((row, index) => {
          return (
            <tr key={index}>
              <td>{row.division}</td>
              <td>{row.match}</td>
              <td>{row.payoutPerWinner}</td>
              <td>{row.jackpot}</td>
              <td>{row.payoutPerWinners}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
