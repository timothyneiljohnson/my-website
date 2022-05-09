export const CategoriesFixture = [
  {
    id: 6,
    count: 1,
    description: '',
    link: 'http://localhost:10003/category/featured/awards/',
    name: 'Awards',
    slug: 'awards',
    taxonomy: 'category',
    parent: 3,
    meta: [],
    _links: {
      self: [
        {
          href: 'http://localhost:10003/wp-json/wp/v2/categories/6',
        },
      ],
      collection: [
        {
          href: 'http://localhost:10003/wp-json/wp/v2/categories',
        },
      ],
      about: [
        {
          href: 'http://localhost:10003/wp-json/wp/v2/taxonomies/category',
        },
      ],
      up: [
        {
          embeddable: true,
          href: 'http://localhost:10003/wp-json/wp/v2/categories/3',
        },
      ],
      'wp:post_type': [
        {
          href: 'http://localhost:10003/wp-json/wp/v2/posts?categories=6',
        },
      ],
      curies: [
        {
          name: 'wp',
          href: 'https://api.w.org/{rel}',
          templated: true,
        },
      ],
    },
  },
  {
    id: 7,
    count: 1,
    description: '',
    link: 'http://localhost:10003/category/featured/photography/',
    name: 'Photography',
    slug: 'photography',
    taxonomy: 'category',
    parent: 3,
    meta: [],
    _links: {
      self: [
        {
          href: 'http://localhost:10003/wp-json/wp/v2/categories/7',
        },
      ],
      collection: [
        {
          href: 'http://localhost:10003/wp-json/wp/v2/categories',
        },
      ],
      about: [
        {
          href: 'http://localhost:10003/wp-json/wp/v2/taxonomies/category',
        },
      ],
      up: [
        {
          embeddable: true,
          href: 'http://localhost:10003/wp-json/wp/v2/categories/3',
        },
      ],
      'wp:post_type': [
        {
          href: 'http://localhost:10003/wp-json/wp/v2/posts?categories=7',
        },
      ],
      curies: [
        {
          name: 'wp',
          href: 'https://api.w.org/{rel}',
          templated: true,
        },
      ],
    },
  },
  {
    id: 8,
    count: 0,
    description: '',
    link: 'http://localhost:10003/category/featured/video/',
    name: 'Video',
    slug: 'video',
    taxonomy: 'category',
    parent: 3,
    meta: [],
    _links: {
      self: [
        {
          href: 'http://localhost:10003/wp-json/wp/v2/categories/8',
        },
      ],
      collection: [
        {
          href: 'http://localhost:10003/wp-json/wp/v2/categories',
        },
      ],
      about: [
        {
          href: 'http://localhost:10003/wp-json/wp/v2/taxonomies/category',
        },
      ],
      up: [
        {
          embeddable: true,
          href: 'http://localhost:10003/wp-json/wp/v2/categories/3',
        },
      ],
      'wp:post_type': [
        {
          href: 'http://localhost:10003/wp-json/wp/v2/posts?categories=8',
        },
      ],
      curies: [
        {
          name: 'wp',
          href: 'https://api.w.org/{rel}',
          templated: true,
        },
      ],
    },
  },
  {
    id: 4,
    count: 4,
    description: '',
    link: 'http://localhost:10003/category/featured/web-design/',
    name: 'Web Design',
    slug: 'web-design',
    taxonomy: 'category',
    parent: 3,
    meta: [],
    _links: {
      self: [
        {
          href: 'http://localhost:10003/wp-json/wp/v2/categories/4',
        },
      ],
      collection: [
        {
          href: 'http://localhost:10003/wp-json/wp/v2/categories',
        },
      ],
      about: [
        {
          href: 'http://localhost:10003/wp-json/wp/v2/taxonomies/category',
        },
      ],
      up: [
        {
          embeddable: true,
          href: 'http://localhost:10003/wp-json/wp/v2/categories/3',
        },
      ],
      'wp:post_type': [
        {
          href: 'http://localhost:10003/wp-json/wp/v2/posts?categories=4',
        },
      ],
      curies: [
        {
          name: 'wp',
          href: 'https://api.w.org/{rel}',
          templated: true,
        },
      ],
    },
  },
];

export const ItemsWithCategoriesFixture = [
  {
    id: 64,
    date: '2022-04-05T01:58:59',
    date_gmt: '2022-04-05T01:58:59',
    guid: {
      rendered: 'http://localhost:10003/?p=64',
    },
    modified: '2022-04-05T14:41:25',
    modified_gmt: '2022-04-05T14:41:25',
    slug: 'travel-photography',
    status: 'publish',
    type: 'post',
    link: 'http://localhost:10003/travel-photography/',
    title: {
      rendered: 'Travel Photography',
    },
    content: {
      rendered: '\n<p>I like to take pictures. 📸</p>\n',
      protected: false,
    },
    excerpt: {
      rendered: '<p>I like to take pictures. 📸</p>\n',
      protected: false,
    },
    author: 1,
    featured_media: 65,
    comment_status: 'open',
    ping_status: 'open',
    sticky: false,
    template: '',
    format: 'standard',
    meta: [],
    categories: [9, 3, 7],
    tags: [],
    _links: {
      self: [
        {
          href: 'http://localhost:10003/wp-json/wp/v2/posts/64',
        },
      ],
      collection: [
        {
          href: 'http://localhost:10003/wp-json/wp/v2/posts',
        },
      ],
      about: [
        {
          href: 'http://localhost:10003/wp-json/wp/v2/types/post',
        },
      ],
      author: [
        {
          embeddable: true,
          href: 'http://localhost:10003/wp-json/wp/v2/users/1',
        },
      ],
      replies: [
        {
          embeddable: true,
          href: 'http://localhost:10003/wp-json/wp/v2/comments?post=64',
        },
      ],
      'version-history': [
        {
          count: 1,
          href: 'http://localhost:10003/wp-json/wp/v2/posts/64/revisions',
        },
      ],
      'predecessor-version': [
        {
          id: 66,
          href: 'http://localhost:10003/wp-json/wp/v2/posts/64/revisions/66',
        },
      ],
      'wp:featuredmedia': [
        {
          embeddable: true,
          href: 'http://localhost:10003/wp-json/wp/v2/media/65',
        },
      ],
      'wp:attachment': [
        {
          href: 'http://localhost:10003/wp-json/wp/v2/media?parent=64',
        },
      ],
      'wp:term': [
        {
          taxonomy: 'category',
          embeddable: true,
          href: 'http://localhost:10003/wp-json/wp/v2/categories?post=64',
        },
        {
          taxonomy: 'post_tag',
          embeddable: true,
          href: 'http://localhost:10003/wp-json/wp/v2/tags?post=64',
        },
      ],
      curies: [
        {
          name: 'wp',
          href: 'https://api.w.org/{rel}',
          templated: true,
        },
      ],
    },
    _embedded: {
      author: [
        {
          id: 1,
          name: 'timothyneiljohnson',
          url: 'http://localhost:10003',
          description: '',
          link: 'http://localhost:10003/author/timothyneiljohnson/',
          slug: 'timothyneiljohnson',
          avatar_urls: {
            '24': 'http://2.gravatar.com/avatar/e5b5d508ca128c58fb8ff4335477e7d3?s=24&d=mm&r=g',
            '48': 'http://2.gravatar.com/avatar/e5b5d508ca128c58fb8ff4335477e7d3?s=48&d=mm&r=g',
            '96': 'http://2.gravatar.com/avatar/e5b5d508ca128c58fb8ff4335477e7d3?s=96&d=mm&r=g',
          },
          _links: {
            self: [
              {
                href: 'http://localhost:10003/wp-json/wp/v2/users/1',
              },
            ],
            collection: [
              {
                href: 'http://localhost:10003/wp-json/wp/v2/users',
              },
            ],
          },
        },
      ],
      'wp:featuredmedia': [
        {
          id: 65,
          date: '2022-04-05T01:58:13',
          slug: '40648172_10112452185906560_4699867542464757760_o',
          type: 'attachment',
          link: 'http://localhost:10003/travel-photography/40648172_10112452185906560_4699867542464757760_o/',
          title: {
            rendered: '40648172_10112452185906560_4699867542464757760_o',
          },
          author: 1,
          caption: {
            rendered: '',
          },
          alt_text: '',
          media_type: 'image',
          mime_type: 'image/jpeg',
          media_details: {
            width: 1142,
            height: 1713,
            file: '2022/04/40648172_10112452185906560_4699867542464757760_o.jpg',
            sizes: {
              medium: {
                file: '40648172_10112452185906560_4699867542464757760_o-200x300.jpg',
                width: 200,
                height: 300,
                mime_type: 'image/jpeg',
                source_url:
                  'http://localhost:10003/wp-content/uploads/2022/04/40648172_10112452185906560_4699867542464757760_o-200x300.jpg',
              },
              large: {
                file: '40648172_10112452185906560_4699867542464757760_o-683x1024.jpg',
                width: 683,
                height: 1024,
                mime_type: 'image/jpeg',
                source_url:
                  'http://localhost:10003/wp-content/uploads/2022/04/40648172_10112452185906560_4699867542464757760_o-683x1024.jpg',
              },
              thumbnail: {
                file: '40648172_10112452185906560_4699867542464757760_o-150x150.jpg',
                width: 150,
                height: 150,
                mime_type: 'image/jpeg',
                source_url:
                  'http://localhost:10003/wp-content/uploads/2022/04/40648172_10112452185906560_4699867542464757760_o-150x150.jpg',
              },
              medium_large: {
                file: '40648172_10112452185906560_4699867542464757760_o-768x1152.jpg',
                width: 768,
                height: 1152,
                mime_type: 'image/jpeg',
                source_url:
                  'http://localhost:10003/wp-content/uploads/2022/04/40648172_10112452185906560_4699867542464757760_o-768x1152.jpg',
              },
              '1536x1536': {
                file: '40648172_10112452185906560_4699867542464757760_o-1024x1536.jpg',
                width: 1024,
                height: 1536,
                mime_type: 'image/jpeg',
                source_url:
                  'http://localhost:10003/wp-content/uploads/2022/04/40648172_10112452185906560_4699867542464757760_o-1024x1536.jpg',
              },
              full: {
                file: '40648172_10112452185906560_4699867542464757760_o.jpg',
                width: 1142,
                height: 1713,
                mime_type: 'image/jpeg',
                source_url:
                  'http://localhost:10003/wp-content/uploads/2022/04/40648172_10112452185906560_4699867542464757760_o.jpg',
              },
            },
            image_meta: {
              aperture: '0',
              credit: '',
              camera: '',
              caption: '',
              created_timestamp: '0',
              copyright: '',
              focal_length: '0',
              iso: '0',
              shutter_speed: '0',
              title: '',
              orientation: '0',
              keywords: [],
            },
          },
          source_url:
            'http://localhost:10003/wp-content/uploads/2022/04/40648172_10112452185906560_4699867542464757760_o.jpg',
          _links: {
            self: [
              {
                href: 'http://localhost:10003/wp-json/wp/v2/media/65',
              },
            ],
            collection: [
              {
                href: 'http://localhost:10003/wp-json/wp/v2/media',
              },
            ],
            about: [
              {
                href: 'http://localhost:10003/wp-json/wp/v2/types/attachment',
              },
            ],
            author: [
              {
                embeddable: true,
                href: 'http://localhost:10003/wp-json/wp/v2/users/1',
              },
            ],
            replies: [
              {
                embeddable: true,
                href: 'http://localhost:10003/wp-json/wp/v2/comments?post=65',
              },
            ],
          },
        },
      ],
      'wp:term': [
        [
          {
            id: 9,
            link: 'http://localhost:10003/category/banner/',
            name: 'Banner',
            slug: 'banner',
            taxonomy: 'category',
            _links: {
              self: [
                {
                  href: 'http://localhost:10003/wp-json/wp/v2/categories/9',
                },
              ],
              collection: [
                {
                  href: 'http://localhost:10003/wp-json/wp/v2/categories',
                },
              ],
              about: [
                {
                  href: 'http://localhost:10003/wp-json/wp/v2/taxonomies/category',
                },
              ],
              'wp:post_type': [
                {
                  href: 'http://localhost:10003/wp-json/wp/v2/posts?categories=9',
                },
              ],
              curies: [
                {
                  name: 'wp',
                  href: 'https://api.w.org/{rel}',
                  templated: true,
                },
              ],
            },
          },
          {
            id: 3,
            link: 'http://localhost:10003/category/featured/',
            name: 'Featured',
            slug: 'featured',
            taxonomy: 'category',
            _links: {
              self: [
                {
                  href: 'http://localhost:10003/wp-json/wp/v2/categories/3',
                },
              ],
              collection: [
                {
                  href: 'http://localhost:10003/wp-json/wp/v2/categories',
                },
              ],
              about: [
                {
                  href: 'http://localhost:10003/wp-json/wp/v2/taxonomies/category',
                },
              ],
              'wp:post_type': [
                {
                  href: 'http://localhost:10003/wp-json/wp/v2/posts?categories=3',
                },
              ],
              curies: [
                {
                  name: 'wp',
                  href: 'https://api.w.org/{rel}',
                  templated: true,
                },
              ],
            },
          },
          {
            id: 7,
            link: 'http://localhost:10003/category/featured/photography/',
            name: 'Photography',
            slug: 'photography',
            taxonomy: 'category',
            _links: {
              self: [
                {
                  href: 'http://localhost:10003/wp-json/wp/v2/categories/7',
                },
              ],
              collection: [
                {
                  href: 'http://localhost:10003/wp-json/wp/v2/categories',
                },
              ],
              about: [
                {
                  href: 'http://localhost:10003/wp-json/wp/v2/taxonomies/category',
                },
              ],
              up: [
                {
                  embeddable: true,
                  href: 'http://localhost:10003/wp-json/wp/v2/categories/3',
                },
              ],
              'wp:post_type': [
                {
                  href: 'http://localhost:10003/wp-json/wp/v2/posts?categories=7',
                },
              ],
              curies: [
                {
                  name: 'wp',
                  href: 'https://api.w.org/{rel}',
                  templated: true,
                },
              ],
            },
          },
        ],
        [],
      ],
    },
  },
  {
    id: 28,
    date: '2014-05-16T17:33:41',
    date_gmt: '2014-05-16T17:33:41',
    guid: {
      rendered: 'http://localhost:10003/?p=28',
    },
    modified: '2022-04-05T03:00:56',
    modified_gmt: '2022-04-05T03:00:56',
    slug: 'employee-of-the-quarter',
    status: 'publish',
    type: 'post',
    link: 'http://localhost:10003/employee-of-the-quarter/',
    title: {
      rendered: 'Employee of the Quarter!',
    },
    content: {
      rendered:
        '\n<p>I’m not really one to go on about myself, but—if you like—you can read more about the award and my work for Magnet 360&nbsp;<a href="https://web.archive.org/web/20160520131807/http://www.magnet360.com/2014/05/12/rockstar-quarter-2/">here</a>!</p>\n',
      protected: false,
    },
    excerpt: {
      rendered:
        '<p>I’m not really one to go on about myself, but—if you like—you can read more about the award and my work for Magnet 360&nbsp;here!</p>\n',
      protected: false,
    },
    author: 1,
    featured_media: 48,
    comment_status: 'open',
    ping_status: 'open',
    sticky: false,
    template: '',
    format: 'standard',
    meta: [],
    categories: [6, 3],
    tags: [],
    _links: {
      self: [
        {
          href: 'http://localhost:10003/wp-json/wp/v2/posts/28',
        },
      ],
      collection: [
        {
          href: 'http://localhost:10003/wp-json/wp/v2/posts',
        },
      ],
      about: [
        {
          href: 'http://localhost:10003/wp-json/wp/v2/types/post',
        },
      ],
      author: [
        {
          embeddable: true,
          href: 'http://localhost:10003/wp-json/wp/v2/users/1',
        },
      ],
      replies: [
        {
          embeddable: true,
          href: 'http://localhost:10003/wp-json/wp/v2/comments?post=28',
        },
      ],
      'version-history': [
        {
          count: 3,
          href: 'http://localhost:10003/wp-json/wp/v2/posts/28/revisions',
        },
      ],
      'predecessor-version': [
        {
          id: 63,
          href: 'http://localhost:10003/wp-json/wp/v2/posts/28/revisions/63',
        },
      ],
      'wp:featuredmedia': [
        {
          embeddable: true,
          href: 'http://localhost:10003/wp-json/wp/v2/media/48',
        },
      ],
      'wp:attachment': [
        {
          href: 'http://localhost:10003/wp-json/wp/v2/media?parent=28',
        },
      ],
      'wp:term': [
        {
          taxonomy: 'category',
          embeddable: true,
          href: 'http://localhost:10003/wp-json/wp/v2/categories?post=28',
        },
        {
          taxonomy: 'post_tag',
          embeddable: true,
          href: 'http://localhost:10003/wp-json/wp/v2/tags?post=28',
        },
      ],
      curies: [
        {
          name: 'wp',
          href: 'https://api.w.org/{rel}',
          templated: true,
        },
      ],
    },
    _embedded: {
      author: [
        {
          id: 1,
          name: 'timothyneiljohnson',
          url: 'http://localhost:10003',
          description: '',
          link: 'http://localhost:10003/author/timothyneiljohnson/',
          slug: 'timothyneiljohnson',
          avatar_urls: {
            '24': 'http://2.gravatar.com/avatar/e5b5d508ca128c58fb8ff4335477e7d3?s=24&d=mm&r=g',
            '48': 'http://2.gravatar.com/avatar/e5b5d508ca128c58fb8ff4335477e7d3?s=48&d=mm&r=g',
            '96': 'http://2.gravatar.com/avatar/e5b5d508ca128c58fb8ff4335477e7d3?s=96&d=mm&r=g',
          },
          _links: {
            self: [
              {
                href: 'http://localhost:10003/wp-json/wp/v2/users/1',
              },
            ],
            collection: [
              {
                href: 'http://localhost:10003/wp-json/wp/v2/users',
              },
            ],
          },
        },
      ],
      'wp:featuredmedia': [
        {
          id: 48,
          date: '2022-04-04T18:28:19',
          slug: 'rotq-1',
          type: 'attachment',
          link: 'http://localhost:10003/employee-of-the-quarter/rotq-1/',
          title: {
            rendered: 'ROTQ-1',
          },
          author: 1,
          caption: {
            rendered: '',
          },
          alt_text: '',
          media_type: 'image',
          mime_type: 'image/jpeg',
          media_details: {
            width: 640,
            height: 422,
            file: '2014/05/ROTQ-1.jpeg',
            sizes: {
              medium: {
                file: 'ROTQ-1-300x198.jpeg',
                width: 300,
                height: 198,
                mime_type: 'image/jpeg',
                source_url:
                  'http://localhost:10003/wp-content/uploads/2014/05/ROTQ-1-300x198.jpeg',
              },
              thumbnail: {
                file: 'ROTQ-1-150x150.jpeg',
                width: 150,
                height: 150,
                mime_type: 'image/jpeg',
                source_url:
                  'http://localhost:10003/wp-content/uploads/2014/05/ROTQ-1-150x150.jpeg',
              },
              full: {
                file: 'ROTQ-1.jpeg',
                width: 640,
                height: 422,
                mime_type: 'image/jpeg',
                source_url:
                  'http://localhost:10003/wp-content/uploads/2014/05/ROTQ-1.jpeg',
              },
            },
            image_meta: {
              aperture: '0',
              credit: '',
              camera: '',
              caption: '',
              created_timestamp: '0',
              copyright: '',
              focal_length: '0',
              iso: '0',
              shutter_speed: '0',
              title: '',
              orientation: '0',
              keywords: [],
            },
          },
          source_url:
            'http://localhost:10003/wp-content/uploads/2014/05/ROTQ-1.jpeg',
          _links: {
            self: [
              {
                href: 'http://localhost:10003/wp-json/wp/v2/media/48',
              },
            ],
            collection: [
              {
                href: 'http://localhost:10003/wp-json/wp/v2/media',
              },
            ],
            about: [
              {
                href: 'http://localhost:10003/wp-json/wp/v2/types/attachment',
              },
            ],
            author: [
              {
                embeddable: true,
                href: 'http://localhost:10003/wp-json/wp/v2/users/1',
              },
            ],
            replies: [
              {
                embeddable: true,
                href: 'http://localhost:10003/wp-json/wp/v2/comments?post=48',
              },
            ],
          },
        },
      ],
      'wp:term': [
        [
          {
            id: 6,
            link: 'http://localhost:10003/category/featured/awards/',
            name: 'Awards',
            slug: 'awards',
            taxonomy: 'category',
            _links: {
              self: [
                {
                  href: 'http://localhost:10003/wp-json/wp/v2/categories/6',
                },
              ],
              collection: [
                {
                  href: 'http://localhost:10003/wp-json/wp/v2/categories',
                },
              ],
              about: [
                {
                  href: 'http://localhost:10003/wp-json/wp/v2/taxonomies/category',
                },
              ],
              up: [
                {
                  embeddable: true,
                  href: 'http://localhost:10003/wp-json/wp/v2/categories/3',
                },
              ],
              'wp:post_type': [
                {
                  href: 'http://localhost:10003/wp-json/wp/v2/posts?categories=6',
                },
              ],
              curies: [
                {
                  name: 'wp',
                  href: 'https://api.w.org/{rel}',
                  templated: true,
                },
              ],
            },
          },
          {
            id: 3,
            link: 'http://localhost:10003/category/featured/',
            name: 'Featured',
            slug: 'featured',
            taxonomy: 'category',
            _links: {
              self: [
                {
                  href: 'http://localhost:10003/wp-json/wp/v2/categories/3',
                },
              ],
              collection: [
                {
                  href: 'http://localhost:10003/wp-json/wp/v2/categories',
                },
              ],
              about: [
                {
                  href: 'http://localhost:10003/wp-json/wp/v2/taxonomies/category',
                },
              ],
              'wp:post_type': [
                {
                  href: 'http://localhost:10003/wp-json/wp/v2/posts?categories=3',
                },
              ],
              curies: [
                {
                  name: 'wp',
                  href: 'https://api.w.org/{rel}',
                  templated: true,
                },
              ],
            },
          },
        ],
        [],
      ],
    },
  },
  {
    id: 32,
    date: '2014-01-08T17:36:44',
    date_gmt: '2014-01-08T17:36:44',
    guid: {
      rendered: 'http://localhost:10003/?p=32',
    },
    modified: '2022-04-05T03:01:00',
    modified_gmt: '2022-04-05T03:01:00',
    slug: 'aimia-mobile-app',
    status: 'publish',
    type: 'post',
    link: 'http://localhost:10003/aimia-mobile-app/',
    title: {
      rendered: 'AIMIA Mobile App',
    },
    content: {
      rendered:
        '\n<p>Chat-based gamification:</p>\n\n\n\n<p>In true Lean-UX style, one designer and I created this mobile app for conference attendees. By the end of the weeks-long project, it featured an interactive map, group chat capabilities, an agenda for the conference, and even an engrossing point-system for the attendees/competitors:&nbsp;<a rel="noreferrer noopener" href="https://web.archive.org/web/20160520131807/http://screencast.com/t/9BSVXdr6" target="_blank">Aimia Summit Mobile App</a></p>\n\n\n\n<p></p>\n',
      protected: false,
    },
    excerpt: {
      rendered:
        '<p>Chat-based gamification: In true Lean-UX style, one designer and I created this mobile app for conference attendees. By the end of the weeks-long project, it featured an interactive map, group chat capabilities, an agenda for the conference, and even an engrossing point-system for the attendees/competitors:&nbsp;Aimia Summit Mobile App</p>\n',
      protected: false,
    },
    author: 1,
    featured_media: 50,
    comment_status: 'open',
    ping_status: 'open',
    sticky: false,
    template: '',
    format: 'standard',
    meta: [],
    categories: [3, 4],
    tags: [],
    _links: {
      self: [
        {
          href: 'http://localhost:10003/wp-json/wp/v2/posts/32',
        },
      ],
      collection: [
        {
          href: 'http://localhost:10003/wp-json/wp/v2/posts',
        },
      ],
      about: [
        {
          href: 'http://localhost:10003/wp-json/wp/v2/types/post',
        },
      ],
      author: [
        {
          embeddable: true,
          href: 'http://localhost:10003/wp-json/wp/v2/users/1',
        },
      ],
      replies: [
        {
          embeddable: true,
          href: 'http://localhost:10003/wp-json/wp/v2/comments?post=32',
        },
      ],
      'version-history': [
        {
          count: 3,
          href: 'http://localhost:10003/wp-json/wp/v2/posts/32/revisions',
        },
      ],
      'predecessor-version': [
        {
          id: 62,
          href: 'http://localhost:10003/wp-json/wp/v2/posts/32/revisions/62',
        },
      ],
      'wp:featuredmedia': [
        {
          embeddable: true,
          href: 'http://localhost:10003/wp-json/wp/v2/media/50',
        },
      ],
      'wp:attachment': [
        {
          href: 'http://localhost:10003/wp-json/wp/v2/media?parent=32',
        },
      ],
      'wp:term': [
        {
          taxonomy: 'category',
          embeddable: true,
          href: 'http://localhost:10003/wp-json/wp/v2/categories?post=32',
        },
        {
          taxonomy: 'post_tag',
          embeddable: true,
          href: 'http://localhost:10003/wp-json/wp/v2/tags?post=32',
        },
      ],
      curies: [
        {
          name: 'wp',
          href: 'https://api.w.org/{rel}',
          templated: true,
        },
      ],
    },
    _embedded: {
      author: [
        {
          id: 1,
          name: 'timothyneiljohnson',
          url: 'http://localhost:10003',
          description: '',
          link: 'http://localhost:10003/author/timothyneiljohnson/',
          slug: 'timothyneiljohnson',
          avatar_urls: {
            '24': 'http://2.gravatar.com/avatar/e5b5d508ca128c58fb8ff4335477e7d3?s=24&d=mm&r=g',
            '48': 'http://2.gravatar.com/avatar/e5b5d508ca128c58fb8ff4335477e7d3?s=48&d=mm&r=g',
            '96': 'http://2.gravatar.com/avatar/e5b5d508ca128c58fb8ff4335477e7d3?s=96&d=mm&r=g',
          },
          _links: {
            self: [
              {
                href: 'http://localhost:10003/wp-json/wp/v2/users/1',
              },
            ],
            collection: [
              {
                href: 'http://localhost:10003/wp-json/wp/v2/users',
              },
            ],
          },
        },
      ],
      'wp:featuredmedia': [
        {
          id: 50,
          date: '2022-04-04T18:28:48',
          slug: 'aimia-mobile-app-2',
          type: 'attachment',
          link: 'http://localhost:10003/aimia-mobile-app/aimia-mobile-app-2/',
          title: {
            rendered: 'aimia-mobile-app',
          },
          author: 1,
          caption: {
            rendered: '',
          },
          alt_text: '',
          media_type: 'image',
          mime_type: 'image/jpeg',
          media_details: {
            width: 640,
            height: 430,
            file: '2014/01/aimia-mobile-app.jpeg',
            sizes: {
              medium: {
                file: 'aimia-mobile-app-300x202.jpeg',
                width: 300,
                height: 202,
                mime_type: 'image/jpeg',
                source_url:
                  'http://localhost:10003/wp-content/uploads/2014/01/aimia-mobile-app-300x202.jpeg',
              },
              thumbnail: {
                file: 'aimia-mobile-app-150x150.jpeg',
                width: 150,
                height: 150,
                mime_type: 'image/jpeg',
                source_url:
                  'http://localhost:10003/wp-content/uploads/2014/01/aimia-mobile-app-150x150.jpeg',
              },
              full: {
                file: 'aimia-mobile-app.jpeg',
                width: 640,
                height: 430,
                mime_type: 'image/jpeg',
                source_url:
                  'http://localhost:10003/wp-content/uploads/2014/01/aimia-mobile-app.jpeg',
              },
            },
            image_meta: {
              aperture: '0',
              credit: '',
              camera: '',
              caption: '',
              created_timestamp: '0',
              copyright: '',
              focal_length: '0',
              iso: '0',
              shutter_speed: '0',
              title: '',
              orientation: '0',
              keywords: [],
            },
          },
          source_url:
            'http://localhost:10003/wp-content/uploads/2014/01/aimia-mobile-app.jpeg',
          _links: {
            self: [
              {
                href: 'http://localhost:10003/wp-json/wp/v2/media/50',
              },
            ],
            collection: [
              {
                href: 'http://localhost:10003/wp-json/wp/v2/media',
              },
            ],
            about: [
              {
                href: 'http://localhost:10003/wp-json/wp/v2/types/attachment',
              },
            ],
            author: [
              {
                embeddable: true,
                href: 'http://localhost:10003/wp-json/wp/v2/users/1',
              },
            ],
            replies: [
              {
                embeddable: true,
                href: 'http://localhost:10003/wp-json/wp/v2/comments?post=50',
              },
            ],
          },
        },
      ],
      'wp:term': [
        [
          {
            id: 3,
            link: 'http://localhost:10003/category/featured/',
            name: 'Featured',
            slug: 'featured',
            taxonomy: 'category',
            _links: {
              self: [
                {
                  href: 'http://localhost:10003/wp-json/wp/v2/categories/3',
                },
              ],
              collection: [
                {
                  href: 'http://localhost:10003/wp-json/wp/v2/categories',
                },
              ],
              about: [
                {
                  href: 'http://localhost:10003/wp-json/wp/v2/taxonomies/category',
                },
              ],
              'wp:post_type': [
                {
                  href: 'http://localhost:10003/wp-json/wp/v2/posts?categories=3',
                },
              ],
              curies: [
                {
                  name: 'wp',
                  href: 'https://api.w.org/{rel}',
                  templated: true,
                },
              ],
            },
          },
          {
            id: 4,
            link: 'http://localhost:10003/category/featured/web-design/',
            name: 'Web Design',
            slug: 'web-design',
            taxonomy: 'category',
            _links: {
              self: [
                {
                  href: 'http://localhost:10003/wp-json/wp/v2/categories/4',
                },
              ],
              collection: [
                {
                  href: 'http://localhost:10003/wp-json/wp/v2/categories',
                },
              ],
              about: [
                {
                  href: 'http://localhost:10003/wp-json/wp/v2/taxonomies/category',
                },
              ],
              up: [
                {
                  embeddable: true,
                  href: 'http://localhost:10003/wp-json/wp/v2/categories/3',
                },
              ],
              'wp:post_type': [
                {
                  href: 'http://localhost:10003/wp-json/wp/v2/posts?categories=4',
                },
              ],
              curies: [
                {
                  name: 'wp',
                  href: 'https://api.w.org/{rel}',
                  templated: true,
                },
              ],
            },
          },
        ],
        [],
      ],
    },
  },
  {
    id: 36,
    date: '2013-05-12T17:39:09',
    date_gmt: '2013-05-12T17:39:09',
    guid: {
      rendered: 'http://localhost:10003/?p=36',
    },
    modified: '2022-04-05T03:01:03',
    modified_gmt: '2022-04-05T03:01:03',
    slug: 'life-time-digital-toolkit',
    status: 'publish',
    type: 'post',
    link: 'http://localhost:10003/life-time-digital-toolkit/',
    title: {
      rendered: 'Life Time Digital Toolkit',
    },
    content: {
      rendered:
        '\n<p>An interactive reference guide for component standards between designers and developers:&nbsp;<a target="_blank" href="https://web.archive.org/web/20160520131807/http://www.timothyneil.com/testing/toolkit/" rel="noreferrer noopener">Life Time Digital Toolkit</a></p>\n',
      protected: false,
    },
    excerpt: {
      rendered:
        '<p>An interactive reference guide for component standards between designers and developers:&nbsp;Life Time Digital Toolkit</p>\n',
      protected: false,
    },
    author: 1,
    featured_media: 54,
    comment_status: 'open',
    ping_status: 'open',
    sticky: false,
    template: '',
    format: 'standard',
    meta: [],
    categories: [3, 1, 4],
    tags: [],
    _links: {
      self: [
        {
          href: 'http://localhost:10003/wp-json/wp/v2/posts/36',
        },
      ],
      collection: [
        {
          href: 'http://localhost:10003/wp-json/wp/v2/posts',
        },
      ],
      about: [
        {
          href: 'http://localhost:10003/wp-json/wp/v2/types/post',
        },
      ],
      author: [
        {
          embeddable: true,
          href: 'http://localhost:10003/wp-json/wp/v2/users/1',
        },
      ],
      replies: [
        {
          embeddable: true,
          href: 'http://localhost:10003/wp-json/wp/v2/comments?post=36',
        },
      ],
      'version-history': [
        {
          count: 2,
          href: 'http://localhost:10003/wp-json/wp/v2/posts/36/revisions',
        },
      ],
      'predecessor-version': [
        {
          id: 55,
          href: 'http://localhost:10003/wp-json/wp/v2/posts/36/revisions/55',
        },
      ],
      'wp:featuredmedia': [
        {
          embeddable: true,
          href: 'http://localhost:10003/wp-json/wp/v2/media/54',
        },
      ],
      'wp:attachment': [
        {
          href: 'http://localhost:10003/wp-json/wp/v2/media?parent=36',
        },
      ],
      'wp:term': [
        {
          taxonomy: 'category',
          embeddable: true,
          href: 'http://localhost:10003/wp-json/wp/v2/categories?post=36',
        },
        {
          taxonomy: 'post_tag',
          embeddable: true,
          href: 'http://localhost:10003/wp-json/wp/v2/tags?post=36',
        },
      ],
      curies: [
        {
          name: 'wp',
          href: 'https://api.w.org/{rel}',
          templated: true,
        },
      ],
    },
    _embedded: {
      author: [
        {
          id: 1,
          name: 'timothyneiljohnson',
          url: 'http://localhost:10003',
          description: '',
          link: 'http://localhost:10003/author/timothyneiljohnson/',
          slug: 'timothyneiljohnson',
          avatar_urls: {
            '24': 'http://2.gravatar.com/avatar/e5b5d508ca128c58fb8ff4335477e7d3?s=24&d=mm&r=g',
            '48': 'http://2.gravatar.com/avatar/e5b5d508ca128c58fb8ff4335477e7d3?s=48&d=mm&r=g',
            '96': 'http://2.gravatar.com/avatar/e5b5d508ca128c58fb8ff4335477e7d3?s=96&d=mm&r=g',
          },
          _links: {
            self: [
              {
                href: 'http://localhost:10003/wp-json/wp/v2/users/1',
              },
            ],
            collection: [
              {
                href: 'http://localhost:10003/wp-json/wp/v2/users',
              },
            ],
          },
        },
      ],
      'wp:featuredmedia': [
        {
          id: 54,
          date: '2022-04-04T18:29:50',
          slug: 'toolkit',
          type: 'attachment',
          link: 'http://localhost:10003/life-time-digital-toolkit/toolkit/',
          title: {
            rendered: 'toolkit',
          },
          author: 1,
          caption: {
            rendered: '',
          },
          alt_text: '',
          media_type: 'image',
          mime_type: 'image/jpeg',
          media_details: {
            width: 640,
            height: 430,
            file: '2013/05/toolkit.jpeg',
            sizes: {
              medium: {
                file: 'toolkit-300x202.jpeg',
                width: 300,
                height: 202,
                mime_type: 'image/jpeg',
                source_url:
                  'http://localhost:10003/wp-content/uploads/2013/05/toolkit-300x202.jpeg',
              },
              thumbnail: {
                file: 'toolkit-150x150.jpeg',
                width: 150,
                height: 150,
                mime_type: 'image/jpeg',
                source_url:
                  'http://localhost:10003/wp-content/uploads/2013/05/toolkit-150x150.jpeg',
              },
              full: {
                file: 'toolkit.jpeg',
                width: 640,
                height: 430,
                mime_type: 'image/jpeg',
                source_url:
                  'http://localhost:10003/wp-content/uploads/2013/05/toolkit.jpeg',
              },
            },
            image_meta: {
              aperture: '0',
              credit: '',
              camera: '',
              caption: '',
              created_timestamp: '0',
              copyright: '',
              focal_length: '0',
              iso: '0',
              shutter_speed: '0',
              title: '',
              orientation: '0',
              keywords: [],
            },
          },
          source_url:
            'http://localhost:10003/wp-content/uploads/2013/05/toolkit.jpeg',
          _links: {
            self: [
              {
                href: 'http://localhost:10003/wp-json/wp/v2/media/54',
              },
            ],
            collection: [
              {
                href: 'http://localhost:10003/wp-json/wp/v2/media',
              },
            ],
            about: [
              {
                href: 'http://localhost:10003/wp-json/wp/v2/types/attachment',
              },
            ],
            author: [
              {
                embeddable: true,
                href: 'http://localhost:10003/wp-json/wp/v2/users/1',
              },
            ],
            replies: [
              {
                embeddable: true,
                href: 'http://localhost:10003/wp-json/wp/v2/comments?post=54',
              },
            ],
          },
        },
      ],
      'wp:term': [
        [
          {
            id: 3,
            link: 'http://localhost:10003/category/featured/',
            name: 'Featured',
            slug: 'featured',
            taxonomy: 'category',
            _links: {
              self: [
                {
                  href: 'http://localhost:10003/wp-json/wp/v2/categories/3',
                },
              ],
              collection: [
                {
                  href: 'http://localhost:10003/wp-json/wp/v2/categories',
                },
              ],
              about: [
                {
                  href: 'http://localhost:10003/wp-json/wp/v2/taxonomies/category',
                },
              ],
              'wp:post_type': [
                {
                  href: 'http://localhost:10003/wp-json/wp/v2/posts?categories=3',
                },
              ],
              curies: [
                {
                  name: 'wp',
                  href: 'https://api.w.org/{rel}',
                  templated: true,
                },
              ],
            },
          },
          {
            id: 1,
            link: 'http://localhost:10003/category/uncategorized/',
            name: 'Uncategorized',
            slug: 'uncategorized',
            taxonomy: 'category',
            _links: {
              self: [
                {
                  href: 'http://localhost:10003/wp-json/wp/v2/categories/1',
                },
              ],
              collection: [
                {
                  href: 'http://localhost:10003/wp-json/wp/v2/categories',
                },
              ],
              about: [
                {
                  href: 'http://localhost:10003/wp-json/wp/v2/taxonomies/category',
                },
              ],
              'wp:post_type': [
                {
                  href: 'http://localhost:10003/wp-json/wp/v2/posts?categories=1',
                },
              ],
              curies: [
                {
                  name: 'wp',
                  href: 'https://api.w.org/{rel}',
                  templated: true,
                },
              ],
            },
          },
          {
            id: 4,
            link: 'http://localhost:10003/category/featured/web-design/',
            name: 'Web Design',
            slug: 'web-design',
            taxonomy: 'category',
            _links: {
              self: [
                {
                  href: 'http://localhost:10003/wp-json/wp/v2/categories/4',
                },
              ],
              collection: [
                {
                  href: 'http://localhost:10003/wp-json/wp/v2/categories',
                },
              ],
              about: [
                {
                  href: 'http://localhost:10003/wp-json/wp/v2/taxonomies/category',
                },
              ],
              up: [
                {
                  embeddable: true,
                  href: 'http://localhost:10003/wp-json/wp/v2/categories/3',
                },
              ],
              'wp:post_type': [
                {
                  href: 'http://localhost:10003/wp-json/wp/v2/posts?categories=4',
                },
              ],
              curies: [
                {
                  name: 'wp',
                  href: 'https://api.w.org/{rel}',
                  templated: true,
                },
              ],
            },
          },
        ],
        [],
      ],
    },
  },
  {
    id: 40,
    date: '2012-08-05T17:41:42',
    date_gmt: '2012-08-05T17:41:42',
    guid: {
      rendered: 'http://localhost:10003/?p=40',
    },
    modified: '2022-04-06T00:34:47',
    modified_gmt: '2022-04-06T00:34:47',
    slug: 'platinka',
    status: 'publish',
    type: 'post',
    link: 'http://localhost:10003/platinka/',
    title: {
      rendered: 'Platinka',
    },
    content: {
      rendered:
        '\n<p>A very fun freelance project for Platinka Vodka:&nbsp;<a href="https://web.archive.org/web/20160520131807/http://www.platinka.com/" target="_blank" rel="noreferrer noopener">Platinka.com</a></p>\n',
      protected: false,
    },
    excerpt: {
      rendered:
        '<p>A very fun freelance project for Platinka Vodka:&nbsp;Platinka.com</p>\n',
      protected: false,
    },
    author: 1,
    featured_media: 56,
    comment_status: 'open',
    ping_status: 'open',
    sticky: false,
    template: '',
    format: 'standard',
    meta: [],
    categories: [3, 1, 4],
    tags: [],
    _links: {
      self: [
        {
          href: 'http://localhost:10003/wp-json/wp/v2/posts/40',
        },
      ],
      collection: [
        {
          href: 'http://localhost:10003/wp-json/wp/v2/posts',
        },
      ],
      about: [
        {
          href: 'http://localhost:10003/wp-json/wp/v2/types/post',
        },
      ],
      author: [
        {
          embeddable: true,
          href: 'http://localhost:10003/wp-json/wp/v2/users/1',
        },
      ],
      replies: [
        {
          embeddable: true,
          href: 'http://localhost:10003/wp-json/wp/v2/comments?post=40',
        },
      ],
      'version-history': [
        {
          count: 2,
          href: 'http://localhost:10003/wp-json/wp/v2/posts/40/revisions',
        },
      ],
      'predecessor-version': [
        {
          id: 57,
          href: 'http://localhost:10003/wp-json/wp/v2/posts/40/revisions/57',
        },
      ],
      'wp:featuredmedia': [
        {
          embeddable: true,
          href: 'http://localhost:10003/wp-json/wp/v2/media/56',
        },
      ],
      'wp:attachment': [
        {
          href: 'http://localhost:10003/wp-json/wp/v2/media?parent=40',
        },
      ],
      'wp:term': [
        {
          taxonomy: 'category',
          embeddable: true,
          href: 'http://localhost:10003/wp-json/wp/v2/categories?post=40',
        },
        {
          taxonomy: 'post_tag',
          embeddable: true,
          href: 'http://localhost:10003/wp-json/wp/v2/tags?post=40',
        },
      ],
      curies: [
        {
          name: 'wp',
          href: 'https://api.w.org/{rel}',
          templated: true,
        },
      ],
    },
    _embedded: {
      author: [
        {
          id: 1,
          name: 'timothyneiljohnson',
          url: 'http://localhost:10003',
          description: '',
          link: 'http://localhost:10003/author/timothyneiljohnson/',
          slug: 'timothyneiljohnson',
          avatar_urls: {
            '24': 'http://2.gravatar.com/avatar/e5b5d508ca128c58fb8ff4335477e7d3?s=24&d=mm&r=g',
            '48': 'http://2.gravatar.com/avatar/e5b5d508ca128c58fb8ff4335477e7d3?s=48&d=mm&r=g',
            '96': 'http://2.gravatar.com/avatar/e5b5d508ca128c58fb8ff4335477e7d3?s=96&d=mm&r=g',
          },
          _links: {
            self: [
              {
                href: 'http://localhost:10003/wp-json/wp/v2/users/1',
              },
            ],
            collection: [
              {
                href: 'http://localhost:10003/wp-json/wp/v2/users',
              },
            ],
          },
        },
      ],
      'wp:featuredmedia': [
        {
          id: 56,
          date: '2022-04-04T18:30:34',
          slug: 'platinka-2',
          type: 'attachment',
          link: 'http://localhost:10003/platinka/platinka-2/',
          title: {
            rendered: 'platinka',
          },
          author: 1,
          caption: {
            rendered: '',
          },
          alt_text: '',
          media_type: 'image',
          mime_type: 'image/jpeg',
          media_details: {
            width: 640,
            height: 357,
            file: '2012/08/platinka.jpeg',
            sizes: {
              medium: {
                file: 'platinka-300x167.jpeg',
                width: 300,
                height: 167,
                mime_type: 'image/jpeg',
                source_url:
                  'http://localhost:10003/wp-content/uploads/2012/08/platinka-300x167.jpeg',
              },
              thumbnail: {
                file: 'platinka-150x150.jpeg',
                width: 150,
                height: 150,
                mime_type: 'image/jpeg',
                source_url:
                  'http://localhost:10003/wp-content/uploads/2012/08/platinka-150x150.jpeg',
              },
              full: {
                file: 'platinka.jpeg',
                width: 640,
                height: 357,
                mime_type: 'image/jpeg',
                source_url:
                  'http://localhost:10003/wp-content/uploads/2012/08/platinka.jpeg',
              },
            },
            image_meta: {
              aperture: '0',
              credit: '',
              camera: '',
              caption: '',
              created_timestamp: '0',
              copyright: '',
              focal_length: '0',
              iso: '0',
              shutter_speed: '0',
              title: '',
              orientation: '0',
              keywords: [],
            },
          },
          source_url:
            'http://localhost:10003/wp-content/uploads/2012/08/platinka.jpeg',
          _links: {
            self: [
              {
                href: 'http://localhost:10003/wp-json/wp/v2/media/56',
              },
            ],
            collection: [
              {
                href: 'http://localhost:10003/wp-json/wp/v2/media',
              },
            ],
            about: [
              {
                href: 'http://localhost:10003/wp-json/wp/v2/types/attachment',
              },
            ],
            author: [
              {
                embeddable: true,
                href: 'http://localhost:10003/wp-json/wp/v2/users/1',
              },
            ],
            replies: [
              {
                embeddable: true,
                href: 'http://localhost:10003/wp-json/wp/v2/comments?post=56',
              },
            ],
          },
        },
      ],
      'wp:term': [
        [
          {
            id: 3,
            link: 'http://localhost:10003/category/featured/',
            name: 'Featured',
            slug: 'featured',
            taxonomy: 'category',
            _links: {
              self: [
                {
                  href: 'http://localhost:10003/wp-json/wp/v2/categories/3',
                },
              ],
              collection: [
                {
                  href: 'http://localhost:10003/wp-json/wp/v2/categories',
                },
              ],
              about: [
                {
                  href: 'http://localhost:10003/wp-json/wp/v2/taxonomies/category',
                },
              ],
              'wp:post_type': [
                {
                  href: 'http://localhost:10003/wp-json/wp/v2/posts?categories=3',
                },
              ],
              curies: [
                {
                  name: 'wp',
                  href: 'https://api.w.org/{rel}',
                  templated: true,
                },
              ],
            },
          },
          {
            id: 1,
            link: 'http://localhost:10003/category/uncategorized/',
            name: 'Uncategorized',
            slug: 'uncategorized',
            taxonomy: 'category',
            _links: {
              self: [
                {
                  href: 'http://localhost:10003/wp-json/wp/v2/categories/1',
                },
              ],
              collection: [
                {
                  href: 'http://localhost:10003/wp-json/wp/v2/categories',
                },
              ],
              about: [
                {
                  href: 'http://localhost:10003/wp-json/wp/v2/taxonomies/category',
                },
              ],
              'wp:post_type': [
                {
                  href: 'http://localhost:10003/wp-json/wp/v2/posts?categories=1',
                },
              ],
              curies: [
                {
                  name: 'wp',
                  href: 'https://api.w.org/{rel}',
                  templated: true,
                },
              ],
            },
          },
          {
            id: 4,
            link: 'http://localhost:10003/category/featured/web-design/',
            name: 'Web Design',
            slug: 'web-design',
            taxonomy: 'category',
            _links: {
              self: [
                {
                  href: 'http://localhost:10003/wp-json/wp/v2/categories/4',
                },
              ],
              collection: [
                {
                  href: 'http://localhost:10003/wp-json/wp/v2/categories',
                },
              ],
              about: [
                {
                  href: 'http://localhost:10003/wp-json/wp/v2/taxonomies/category',
                },
              ],
              up: [
                {
                  embeddable: true,
                  href: 'http://localhost:10003/wp-json/wp/v2/categories/3',
                },
              ],
              'wp:post_type': [
                {
                  href: 'http://localhost:10003/wp-json/wp/v2/posts?categories=4',
                },
              ],
              curies: [
                {
                  name: 'wp',
                  href: 'https://api.w.org/{rel}',
                  templated: true,
                },
              ],
            },
          },
        ],
        [],
      ],
    },
  },
  {
    id: 42,
    date: '2012-05-04T17:42:34',
    date_gmt: '2012-05-04T17:42:34',
    guid: {
      rendered: 'http://localhost:10003/?p=42',
    },
    modified: '2022-04-06T00:36:11',
    modified_gmt: '2022-04-06T00:36:11',
    slug: 'semple-mansion',
    status: 'publish',
    type: 'post',
    link: 'http://localhost:10003/semple-mansion/',
    title: {
      rendered: 'Semple Mansion',
    },
    content: {
      rendered:
        '\n<p>A recent freelance project for Semple Mansion:&nbsp;<a href="https://web.archive.org/web/20160520131807/http://www.semplemansion.com/" target="_blank" rel="noreferrer noopener">SempleMansion.com</a></p>\n',
      protected: false,
    },
    excerpt: {
      rendered:
        '<p>A recent freelance project for Semple Mansion:&nbsp;SempleMansion.com</p>\n',
      protected: false,
    },
    author: 1,
    featured_media: 58,
    comment_status: 'open',
    ping_status: 'open',
    sticky: false,
    template: '',
    format: 'standard',
    meta: [],
    categories: [3, 1, 4],
    tags: [],
    _links: {
      self: [
        {
          href: 'http://localhost:10003/wp-json/wp/v2/posts/42',
        },
      ],
      collection: [
        {
          href: 'http://localhost:10003/wp-json/wp/v2/posts',
        },
      ],
      about: [
        {
          href: 'http://localhost:10003/wp-json/wp/v2/types/post',
        },
      ],
      author: [
        {
          embeddable: true,
          href: 'http://localhost:10003/wp-json/wp/v2/users/1',
        },
      ],
      replies: [
        {
          embeddable: true,
          href: 'http://localhost:10003/wp-json/wp/v2/comments?post=42',
        },
      ],
      'version-history': [
        {
          count: 2,
          href: 'http://localhost:10003/wp-json/wp/v2/posts/42/revisions',
        },
      ],
      'predecessor-version': [
        {
          id: 59,
          href: 'http://localhost:10003/wp-json/wp/v2/posts/42/revisions/59',
        },
      ],
      'wp:featuredmedia': [
        {
          embeddable: true,
          href: 'http://localhost:10003/wp-json/wp/v2/media/58',
        },
      ],
      'wp:attachment': [
        {
          href: 'http://localhost:10003/wp-json/wp/v2/media?parent=42',
        },
      ],
      'wp:term': [
        {
          taxonomy: 'category',
          embeddable: true,
          href: 'http://localhost:10003/wp-json/wp/v2/categories?post=42',
        },
        {
          taxonomy: 'post_tag',
          embeddable: true,
          href: 'http://localhost:10003/wp-json/wp/v2/tags?post=42',
        },
      ],
      curies: [
        {
          name: 'wp',
          href: 'https://api.w.org/{rel}',
          templated: true,
        },
      ],
    },
    _embedded: {
      author: [
        {
          id: 1,
          name: 'timothyneiljohnson',
          url: 'http://localhost:10003',
          description: '',
          link: 'http://localhost:10003/author/timothyneiljohnson/',
          slug: 'timothyneiljohnson',
          avatar_urls: {
            '24': 'http://2.gravatar.com/avatar/e5b5d508ca128c58fb8ff4335477e7d3?s=24&d=mm&r=g',
            '48': 'http://2.gravatar.com/avatar/e5b5d508ca128c58fb8ff4335477e7d3?s=48&d=mm&r=g',
            '96': 'http://2.gravatar.com/avatar/e5b5d508ca128c58fb8ff4335477e7d3?s=96&d=mm&r=g',
          },
          _links: {
            self: [
              {
                href: 'http://localhost:10003/wp-json/wp/v2/users/1',
              },
            ],
            collection: [
              {
                href: 'http://localhost:10003/wp-json/wp/v2/users',
              },
            ],
          },
        },
      ],
      'wp:featuredmedia': [
        {
          id: 58,
          date: '2022-04-04T18:31:03',
          slug: 'semple',
          type: 'attachment',
          link: 'http://localhost:10003/semple-mansion/semple/',
          title: {
            rendered: 'semple',
          },
          author: 1,
          caption: {
            rendered: '',
          },
          alt_text: '',
          media_type: 'image',
          mime_type: 'image/jpeg',
          media_details: {
            width: 640,
            height: 398,
            file: '2012/05/semple.jpeg',
            sizes: {
              medium: {
                file: 'semple-300x187.jpeg',
                width: 300,
                height: 187,
                mime_type: 'image/jpeg',
                source_url:
                  'http://localhost:10003/wp-content/uploads/2012/05/semple-300x187.jpeg',
              },
              thumbnail: {
                file: 'semple-150x150.jpeg',
                width: 150,
                height: 150,
                mime_type: 'image/jpeg',
                source_url:
                  'http://localhost:10003/wp-content/uploads/2012/05/semple-150x150.jpeg',
              },
              full: {
                file: 'semple.jpeg',
                width: 640,
                height: 398,
                mime_type: 'image/jpeg',
                source_url:
                  'http://localhost:10003/wp-content/uploads/2012/05/semple.jpeg',
              },
            },
            image_meta: {
              aperture: '0',
              credit: '',
              camera: '',
              caption: '',
              created_timestamp: '0',
              copyright: '',
              focal_length: '0',
              iso: '0',
              shutter_speed: '0',
              title: '',
              orientation: '0',
              keywords: [],
            },
          },
          source_url:
            'http://localhost:10003/wp-content/uploads/2012/05/semple.jpeg',
          _links: {
            self: [
              {
                href: 'http://localhost:10003/wp-json/wp/v2/media/58',
              },
            ],
            collection: [
              {
                href: 'http://localhost:10003/wp-json/wp/v2/media',
              },
            ],
            about: [
              {
                href: 'http://localhost:10003/wp-json/wp/v2/types/attachment',
              },
            ],
            author: [
              {
                embeddable: true,
                href: 'http://localhost:10003/wp-json/wp/v2/users/1',
              },
            ],
            replies: [
              {
                embeddable: true,
                href: 'http://localhost:10003/wp-json/wp/v2/comments?post=58',
              },
            ],
          },
        },
      ],
      'wp:term': [
        [
          {
            id: 3,
            link: 'http://localhost:10003/category/featured/',
            name: 'Featured',
            slug: 'featured',
            taxonomy: 'category',
            _links: {
              self: [
                {
                  href: 'http://localhost:10003/wp-json/wp/v2/categories/3',
                },
              ],
              collection: [
                {
                  href: 'http://localhost:10003/wp-json/wp/v2/categories',
                },
              ],
              about: [
                {
                  href: 'http://localhost:10003/wp-json/wp/v2/taxonomies/category',
                },
              ],
              'wp:post_type': [
                {
                  href: 'http://localhost:10003/wp-json/wp/v2/posts?categories=3',
                },
              ],
              curies: [
                {
                  name: 'wp',
                  href: 'https://api.w.org/{rel}',
                  templated: true,
                },
              ],
            },
          },
          {
            id: 1,
            link: 'http://localhost:10003/category/uncategorized/',
            name: 'Uncategorized',
            slug: 'uncategorized',
            taxonomy: 'category',
            _links: {
              self: [
                {
                  href: 'http://localhost:10003/wp-json/wp/v2/categories/1',
                },
              ],
              collection: [
                {
                  href: 'http://localhost:10003/wp-json/wp/v2/categories',
                },
              ],
              about: [
                {
                  href: 'http://localhost:10003/wp-json/wp/v2/taxonomies/category',
                },
              ],
              'wp:post_type': [
                {
                  href: 'http://localhost:10003/wp-json/wp/v2/posts?categories=1',
                },
              ],
              curies: [
                {
                  name: 'wp',
                  href: 'https://api.w.org/{rel}',
                  templated: true,
                },
              ],
            },
          },
          {
            id: 4,
            link: 'http://localhost:10003/category/featured/web-design/',
            name: 'Web Design',
            slug: 'web-design',
            taxonomy: 'category',
            _links: {
              self: [
                {
                  href: 'http://localhost:10003/wp-json/wp/v2/categories/4',
                },
              ],
              collection: [
                {
                  href: 'http://localhost:10003/wp-json/wp/v2/categories',
                },
              ],
              about: [
                {
                  href: 'http://localhost:10003/wp-json/wp/v2/taxonomies/category',
                },
              ],
              up: [
                {
                  embeddable: true,
                  href: 'http://localhost:10003/wp-json/wp/v2/categories/3',
                },
              ],
              'wp:post_type': [
                {
                  href: 'http://localhost:10003/wp-json/wp/v2/posts?categories=4',
                },
              ],
              curies: [
                {
                  name: 'wp',
                  href: 'https://api.w.org/{rel}',
                  templated: true,
                },
              ],
            },
          },
        ],
        [],
      ],
    },
  },
];
