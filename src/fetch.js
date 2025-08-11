/**
 * Fetches a word from an API endpoint.
 * @returns {Promise<Object>} A promise that resolves to the fetched data.
 */
export const fetchWord = async () => {
  try {
    // Attempt to fetch data from the specified API endpoint
    const response = await fetch("your_api_endpoint_here");
    // Check if the response is successful
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    // Parse the response data as JSON
    const data = await response.json();
    return data;
  } catch (error) {
    // Log any errors that occur during the fetch operation
    console.error("There was a problem with the fetch operation:", error);
    // Re-throw the error to be handled by the caller
    throw error;
  }
};
