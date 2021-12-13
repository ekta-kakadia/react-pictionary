
export const fetchingData = postData => dispatch => {
  console.log(postData)
  fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${postData}`, {
    method: 'GET',
    headers: {
      'content-type': 'application/json'
    },
  })
    .then(res => res.json())
    .then(post =>{
      console.log(post)
      dispatch({
        type: "FETCHED_DATA",
        payload: post
      })
    }
      
    );
};