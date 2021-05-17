import moment from 'moment';
import {IResultItem} from 'lib/models';

export default function ResultItem(props: IResultItem) {
  const { inspection_date, dba_name, address, risk } = props;

  return (
    <div className='result-item' data-testid='result-item'>
      <div className='result-item__row result-item__date-row'>
        <span>{moment(inspection_date).format('MMM Do, YYYY')}</span>
        <span className='business-name'>{dba_name}</span>
      </div>
      <div className='result-item__row'>
        {address}
      </div>
      <div className='result-item__row'>
        {risk}
      </div>
    </div>
  );
}
