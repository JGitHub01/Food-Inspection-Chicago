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
  const buttonRef = useRef<HTMLButtonElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    const onButtonClick = () => {
      onSearch && onSearch(keyword);
    };
    const onKeypress = (e: KeyboardEvent) => {
      if (e.key === 'Enter') {
        onSearch && onSearch(keyword);
      }
    }
    buttonRef.current?.addEventListener('click', onButtonClick);
    inputRef.current?.addEventListener('keypress', onKeypress);

    return (() => {
      buttonRef.current?.removeEventListener('click', onButtonClick);
      inputRef.current?.removeEventListener('keypress', onKeypress);
    });
  }, [keyword]);

  return (
    <div className='search-bar' data-testid='search-bar'>
      <TextField
        className='search-bar__text'
        label='Type a keyword'
        variant='filled'
        inputRef={inputRef}
        inputProps={{'data-testid': 'search-field'}}
        onChange={(e) => {
          onKeywordChange && onKeywordChange(e.target.value);
        }}
      >
        {keyword}
      </TextField>
      <div className='search-bar__button'>
        <Button
          variant='contained'
          color='primary'
          ref={buttonRef}
          data-testid='search-button'
        >
          Search
        </Button>
      </div>
    </div>
  );
}
