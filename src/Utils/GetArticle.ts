type Props = {
    slug: string;
}

export const GetArticle = async ({ slug }:Props) => {
    const url = 'https://graphql.contentful.com/content/v1/spaces/vnjog8kvani5/?access_token=mr5xKbqV9N0kbw96DesM1tFO6N8vnpc3YlAQ_qi2HhQ';
    const whereClause = `where: { articleSlug: "${slug}" } limit:1`;

    const query = {
        query: `query {
      articleCollection(${whereClause}) {
        total
        items {
          author
          title
          publishDate
          url
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
          content {
            json
            links {
              entries {
                block {
                    ...on Sources {
                      title
                      content {
                        json
                      }
                    }
                  }
                }
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
                    items: [article],
                },
            },
        } = jsonResponse;
        return Promise.resolve({
            article
        });
    } else {
        return Promise.reject(new Error(response.status + 'Error'));
    }
};
