import PropTypes from 'prop-types';
import css from 'components/TransactionHistory/TransactionHistory.module.css';

export const TransactionHistory = ({ props }) => {
  return (
    <section className={css.transactionSection}>
      <h1 className={css.sectionTitle}>TRANSACTION HISTORY</h1>
      <table className={css.transactionHistory}>
        <thead className={css.transactionTitle}>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>
        {props.map(({ id, type, amount, currency }) => (
          <tbody className={css.transactionData} key={id}>
            <tr>
              <td className={css.transactionType}>{type}</td>
              <td>{amount}</td>
              <td>{currency}</td>
            </tr>
          </tbody>
        ))}
      </table>
    </section>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
