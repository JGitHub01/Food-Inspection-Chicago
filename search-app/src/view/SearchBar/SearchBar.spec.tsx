import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SearchBar from './SearchBar';

describe('SearchBar', () => {
  it('Should render the default snapshort view', () => {
    const { getByTestId } = render(<SearchBar keyword='fried' />);
    const searchBar = getByTestId('search-bar');
    expect(searchBar).toMatchSnapshot();
  });

  it('Should call onKeywordChange with the entered text when a keyword is entered', () => {
    const callback = jest.fn();
    const { getByTestId } = render(<SearchBar onKeywordChange={callback} />);
    const searchField = getByTestId('search-field');
    userEvent.type(searchField, 'fried');
    expect(callback).toBeCalledWith('fried');
  });

  it('Should call onSearch with the keyword when hit enter', () => {
    const callback = jest.fn();
    const { getByTestId } = render(<SearchBar keyword='fried' onSearch={callback} />);
    const searchField = getByTestId('search-field');
    userEvent.type(searchField, '{enter}');
    expect(callback).toBeCalledWith('fried');
  });

  it('Should call onSearch with keyword when search button is clicked', () => {
    const callback = jest.fn();
    const { getByTestId } = render(<SearchBar keyword='fried' onSearch={callback} />);
    const searchButton = getByTestId('search-button');
    userEvent.click(searchButton);
    expect(callback).toBeCalledWith('fried');
  });
});
