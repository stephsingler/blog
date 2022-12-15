export const GetArticleCollection = async () => {
    const url = 'https://graphql.contentful.com/content/v1/spaces/vnjog8kvani5/?access_token=mr5xKbqV9N0kbw96DesM1tFO6N8vnpc3YlAQ_qi2HhQ';

    const query = {
        query: `query {
          articleCollection(order: [publishDate_DESC], limit: 30) {
            total
            items {
              title
              publishDate
              articleSlug
              image {
                title
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
