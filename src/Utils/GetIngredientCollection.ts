export const GetIngredientCollection = async () => {
    const url = `${process.env.REACT_APP_CONTENTFUL_HOSTNAME}spaces/${process.env.REACT_APP_CONTENTFUL_SPACE_ID}/?access_token=${process.env.REACT_APP_CONTENTFUL_API_KEY}`;

    const query = {
        query: `query {
          ingredientInfoCollection(limit: 40) {
            total
            items {
              name
              description
              lookFor
              ewg
              sources {
                title
                content {
                  json
                 }
              }
            }
          }
        }`
    };

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(query),
    });

    if(response.ok) {
        const jsonResponse = await response.json();
        const {
            data: {
                ingredientInfoCollection: {
                    items: ingredients = [],
                    total: totalCount = 0
                },
            },
        } = jsonResponse;
        return Promise.resolve({
            ingredients,
            totalCount
        });
    } else {
        return Promise.reject(new Error(response.status + 'Error'));
    }
};
