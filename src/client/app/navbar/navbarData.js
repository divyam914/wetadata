/* https://gist.github.com/Qt-dev/556e2e0558892c99bd81 */

export default [
  {
    "text": "Link 1",
    "url": "#"
  },
  {
    "text": "Link 2",
    "url": "#"
  },
  {
    "text": "Link 3",
    "url": "#",
    "submenu": [
      {
        "text": "Sublink 1",
        "url": "#",
        "submenu": [
          {
            "text": "SubSublink 1",
            "url": "#"
          }
        ]
      },
      {
        "text": "Sublink 2",
        "url":"#",
        "submenu": [
          {
            "text": "SubSublink 2",
            "url": "#"
          }
        ]
      }
    ]
  }
]
