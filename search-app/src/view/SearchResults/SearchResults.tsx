import './styles/search-results.scss';

interface ISearchResultsProps {
  results?: string
}
export default function SearchResults(props: ISearchResultsProps) {
  const { results = "Search results for: " } = props;
  return (
    <div className='search-results'>
      {results}
    </div>
  )
}
