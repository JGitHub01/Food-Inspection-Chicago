import { useState } from 'react';
import SearchBar from 'view/SearchBar/SearchBar';
import SearchResults from 'view/SearchResults/SearchResults';
import search from 'lib/search';
import { ISearchResults } from 'lib/models';
import './styles/app.scss';

function App() {
  const [keyword, setKeyword] = useState<string>("");
  const [results, doSearch] = useSearch();
  return (
    <>
      <div className='search-app__sticky-header'>
        <h2 className='title'>Chicago Food Inspection</h2>
        <SearchBar
          keyword={keyword}
          onKeywordChange={setKeyword}
          onSearch={doSearch}
        />
      </div>
      <SearchResults {...results} />
    </>
  );
}

const useSearch = (): [ISearchResults, (keyword: string) => void] => {
  const [results, setResults] = useState<ISearchResults>({ items: [] });
  const doSearch = async (keyword: string) => {
    const results = await search(keyword);
    setResults(results);
  }

  return [results, doSearch];
}
export default App;
