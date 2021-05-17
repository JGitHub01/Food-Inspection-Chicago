import {render, waitFor} from '@testing-library/react';
import {rest} from 'msw';
import { setupServer } from 'msw/node';
import userEvent from '@testing-library/user-event';
import {inspectionDataUrl} from 'lib/search';
import { inspection_data} from 'resources/tests-data/inspection-data';
import App from './App';

const server = setupServer(
  rest.get(inspectionDataUrl, (req, res, ctx) => {
    return res(ctx.json(inspection_data));
  })
);

describe('App', () => {
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  it('Should render the basic snapshot view', () => {
    const {container} = render(<App />);
    expect(container).toMatchSnapshot();
  });

  it('Should initiate a search and display search result when the search button is clicked', async () => {
    const {getByTestId, getAllByTestId} = render(<App />);
    const searchField = getByTestId('search-field');
    const searchButton = getByTestId('search-button');
    userEvent.type(searchField, 'fried');
    userEvent.click(searchButton);
    await waitFor(() => getAllByTestId('result-item'));
    expect(getAllByTestId('result-item')).toHaveLength(2);
  });
});
