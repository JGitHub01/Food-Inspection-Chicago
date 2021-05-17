import { ISearchResults } from 'lib/models';
import ResultItem from './ResultItem';
import './styles/search-results.scss';

export default function SearchResults(props: ISearchResults) {
  const { keyword, items, success = true, msg } = props;
  return (
    <div className='search-results' data-testid='search-results'>
      {success ?
        (
          items.length > 0 ?
            <div className='search-results__list'>
              {items.map((item, idx) => <ResultItem {...item} key={idx} />)}
            </div> :
            <div className='search-results__not-found'>
              { (keyword == null || keyword.trim() === '') ? 'Please enter a keyword' : 'No results are found!'}
            </div>
        ) :
        <div className='search-results__not-found'>
          {`No results are found: ${msg}`}
        </div>
      }
    </div>
  );
}
