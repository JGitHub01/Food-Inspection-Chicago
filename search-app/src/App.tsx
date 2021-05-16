import { useState } from 'react';
import SearchBar from 'view/SearchBar/SearchBar';
import SearchResults from 'view/SearchResults/SearchResults';
import search from 'lib/search';
import './styles/app.scss';

function App() {
  const [keyword, setKeyword] = useState<string>("");
  const [results, doSearch] = useSearch();
  return (
    <div className="search-app-view">
      <SearchBar
        keyword={keyword}
        onKeywordChange={setKeyword}
        onSearch={doSearch}
      />
      <SearchResults results={results}/>
    </div>
  );
}

const useSearch = (): [string, (keyword: string) => void] => {
  const [results, setResults] = useState<string>("Search results for: ");
  const doSearch = (keyword: string) => {
    const results = search(keyword);
    setResults(results);
  }

  return [results, doSearch];
}
export default App;
