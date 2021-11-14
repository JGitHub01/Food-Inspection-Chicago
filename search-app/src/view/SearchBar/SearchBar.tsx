import { useRef, useEffect } from 'react';
import { TextField, Button } from '@material-ui/core';
import './styles/search-bar.scss';

interface ISearchBarProps {
  keyword?: string
  onKeywordChange?: (keyword: string) => void
  onSearch?: (keyword: string) => void
}

export default function SearchBar(props: ISearchBarProps) {
  const { keyword = "", onKeywordChange, onSearch } = props;

  return (
    <div className='search-bar' data-testid='search-bar'>
      <TextField
        className='search-bar__text'
        label='Type a keyword'
        variant='filled'
        inputProps={{ 'data-testid': 'search-field' }}
        onChange={(e) => {
          return onKeywordChange && onKeywordChange(e.target.value);
        }}
        onKeyPress={(e) => {
          if (e.key === 'Enter') {
            return onSearch && onSearch(keyword);
          }
        }}
      >
        {keyword}
      </TextField>
      <div className='search-bar__button'>
        <Button
          variant='contained'
          color='primary'
          onClick={() => {
            return onSearch && onSearch(keyword);
          }}
          data-testid='search-button'
        >
          Search
        </Button>
      </div>
    </div>
  );
}
