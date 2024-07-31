import axios from 'axios';

const API_BASE_URL = 'http://20.244.56.144/test';

export const fetchProducts = async (company = 'AMZ', category = 'Laptop', top = 10, minPrice = 1, maxPrice = 10000) => {
    try {
        const url = `${API_BASE_URL}/companies/${company}/categories/${category}/products`;

        // Add more detailed headers or parameters if needed
        const response = await axios.get(url, {
            params: { top, minPrice, maxPrice },
            headers: {
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzIyNDEyODIyLCJpYXQiOjE3MjI0MTI1MjIsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6ImFhODdkNjQwLTIwNDgtNDA2Yi05NzQ4LTk1YWZkYzRkYWIwNyIsInN1YiI6InN1ZGhpc2hhbWl0aTIwMDNAZ21haWwuY29tIn0sImNvbXBhbnlOYW1lIjoiTEVOREkiLCJjbGllbnRJRCI6ImFhODdkNjQwLTIwNDgtNDA2Yi05NzQ4LTk1YWZkYzRkYWIwNyIsImNsaWVudFNlY3JldCI6IkhXVm1sVFVrUVNrWUpFWU0iLCJvd25lck5hbWUiOiJBbWl0aSBTdWRoaXNoIiwib3duZXJFbWFpbCI6InN1ZGhpc2hhbWl0aTIwMDNAZ21haWwuY29tIiwicm9sbE5vIjoiMjFLRDFBMDUwOCJ9.pa_PUVaCGTyEcGRhPdVVtbE2L2OlBYHbwCW-8g3qHXQ'
            },
            timeout: 10000 // Optional: Set a timeout for the request
        });

        return response.data;
    } catch (error) {
        console.error('Error fetching products:', {
            message: error.message,
            code: error.code,
            response: error.response ? {
                status: error.response.status,
                data: error.response.data
            } : null,
            config: error.config // Show the request configuration for debugging
        });
        return [];
    }
};
