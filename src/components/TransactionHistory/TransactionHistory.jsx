import PropTypes from 'prop-types'
import s from './TransactionHistory.module.css'

const TransactionHistory = ({items}) => {
    return (
        <table className={"transaction-history"}>
  <thead>
    <tr>
      <th className={s.tb_title}>Type</th>
      <th className={s.tb_title}>Amount</th>
      <th className={s.tb_title}>Currency</th>
    </tr>
  </thead>
  <tbody>

        {items.map(({id, type, amount, currency}) => (
      <tr className={s.item} key={id}>
      <td className={s.item_type} >{type}</td>
      <td className={s.item_type}>{amount}</td>
      <td className={s.item_type}>{currency}</td>
    </tr>   
        ))}
  </tbody>
</table>
    );
}
TransactionHistory.propTypes = {
    items: PropTypes.array,
};

export default TransactionHistory;