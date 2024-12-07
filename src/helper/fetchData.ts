type fetchDataOptions = {
    method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
    headers?: Record<string, string>;
    body?: unknown;
}

export const fetchData = async<T>(
    endpoint: string, 
    options?: fetchDataOptions
): Promise<T> => {

    const apiKey = process.env.HARVARD_API_KEY;
    const url = `${endpoint}?apikey=${apiKey}`;


    try{
        const response = await fetch(url, {
            method: options?.method || 'GET',
            headers: {
                'Content-type': 'application/json',
                ...options?.headers, 
            },
            body: options?.body ? JSON.stringify(options.body) : undefined,
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`)
        };

        const data = (await response.json()) as T;
        return data;

    } catch (error) {
        console.log('Sorry, error:', error);
        throw error;
    }
}