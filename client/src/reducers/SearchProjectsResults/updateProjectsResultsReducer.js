export default function (state = [
  {
    imageurl: 'http://vignette1.wikia.nocookie.net/gangstamanga/images/5/56/Insert-Photo-Here.jpg/revision/latest?cb=20150827174445',
    name: 'DevDates',
    description: 'I want to dev all day and all night',
    // interview: false,
  },
  {
    imageurl: 'http://vignette1.wikia.nocookie.net/gangstamanga/images/5/56/Insert-Photo-Here.jpg/revision/latest?cb=20150827174445',
    name: 'Yummy',
    description: 'GMO-certified foods',
    // interview: true,
  },
], action) {
  switch (action.type) {
    case 'UPDATE_SEARCH_PROJECTS_RESULTS':
      return action.payload;
  }
  return state;
}
