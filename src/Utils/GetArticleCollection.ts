export const GetArticleCollection = async () => {
    const url = `${process.env.REACT_APP_CONTENTFUL_HOSTNAME}spaces/${process.env.REACT_APP_CONTENTFUL_SPACE_ID}/?access_token=${process.env.REACT_APP_CONTENTFUL_API_KEY}`;

    const query = {
        query: `query {
          articleCollection(order: [publishDate_DESC], limit: 30) {
            total
            items {
              title
              publishDate
              articleSlug
              image {
                url
              }
              topicsCollection(limit: 3) {
                items {
                  name
                  slug
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
                articleCollection: {
                    items: articles = [],
                    total: totalCount = 0
                },
            },
        } = jsonResponse;
        return Promise.resolve({
            articles,
            totalCount
        });
    } else {
        return Promise.reject(new Error(response.status + 'Error'));
    }
};
