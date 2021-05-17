import {ISearchResults} from 'lib/models';

export const inspectionDataUrl = 'https://data.cityofchicago.org/resource/4ijn-s7e5.json';
export default async function search(keyword: string): Promise<ISearchResults> {
  const queryStr = new URLSearchParams({
    $q: keyword,
    $order: 'inspection_date DESC'
  }).toString();
  const searchUrl = `${inspectionDataUrl}?${queryStr}`;
  try {
    const response = await fetch(searchUrl, {
      method: 'GET',
      headers: {
        "Accept": "application/json"
      }
    });
    if (response.status === 200) {
      return {
        keyword: keyword,
        items: await response.json(),
        success: true
      };
    } else {
      return {
        items: [],
        success: false,
        msg: response.statusText
      }
    }
  } catch (error) {
    return {
      items: [],
      success: false,
      msg: error.toString()
    }
  }
}
