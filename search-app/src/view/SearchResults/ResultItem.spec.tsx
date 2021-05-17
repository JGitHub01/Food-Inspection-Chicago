import { render } from '@testing-library/react';
import ResultItem from './ResultItem';

describe('ResultItem', () => {
  const item = {
    "inspection_date": "2021-05-13T00:00:00.000",
    "dba_name": "SCHUBA'S TAVERN/TIED HOUSE",
    "risk": "Risk 1 (High)",
    "address": "3153-3159 N SOUTHPORT AVE "
  }
  it('should render the basic snapshot view', () => {
    const { getByTestId } = render(<ResultItem {...item}/>);
    const resultItem = getByTestId('result-item');
    expect(resultItem).toMatchSnapshot();
  });
});
