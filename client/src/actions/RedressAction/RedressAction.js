import { transformredress } from '../../transformer/redressTransformer';
export async function fetchRedress(id) {
  try {
    const response = await fetch(
      `http://localhost:5001/participant/redress/${id}`,
    );
    if (!response.ok) {
      // Return empty results if API call fails
      return [];
    }
    const data = await response.json();

    // Run transformer here
    const transformed = transformredress(data);

    return transformed;
  } catch (error) {
    // Return empty results if there is a network or other error
    return [];
  }
}