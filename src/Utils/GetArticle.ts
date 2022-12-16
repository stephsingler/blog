type Props = {
    slug: string;
}

export const GetArticle = async ({ slug }:Props) => {
    const url = `${process.env.REACT_APP_CONTENTFUL_HOSTNAME}spaces/${process.env.REACT_APP_CONTENTFUL_SPACE_ID}/?access_token=${process.env.REACT_APP_CONTENTFUL_API_KEY}`;
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
