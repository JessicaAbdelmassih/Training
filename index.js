fetch('https://bella123.herokuapp.com/data')
  .then(response => response.json())
  .then(json => {
      alert(json.length)
  })