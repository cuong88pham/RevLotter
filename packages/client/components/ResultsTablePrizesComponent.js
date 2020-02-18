import React from 'react';
import { withTranslation } from '../i18n';

function ResultsTablePrizesComponent({ prizeBreakdown = [], t }) {
  return (
    <table className="table table-background table-hover">
      <thead>
        <tr>
          <th scope="col">{t('results.division')}</th>
          <th scope="col">{t('results.match')}</th>
          <th scope="col">{t('results.number_of_winners')}</th>
          <th scope="col">{t('results.payout_per_winner')}</th>
          <th scope="col">{t('results.jackpot')}</th>
          <th scope="col">{t('results.payout_per_winners')}</th>
        </tr>
      </thead>
      <tbody>
        {prizeBreakdown.map((row, index) => {
          return (
            <tr key={index}>
              <td>{row.division}</td>
              <td>{row.match}</td>
              <td>{row.numberOfWinners}</td>
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
export default withTranslation('views')(ResultsTablePrizesComponent);
