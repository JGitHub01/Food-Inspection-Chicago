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
    const buttonDom = buttonRef.current;
    const inputDom = inputRef.current;
    buttonDom?.addEventListener('click', onButtonClick);
    inputDom?.addEventListener('keypress', onKeypress);

    return (() => {
      buttonDom?.removeEventListener('click', onButtonClick);
      inputDom?.removeEventListener('keypress', onKeypress);
    });
  }, [keyword, onSearch]);

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
