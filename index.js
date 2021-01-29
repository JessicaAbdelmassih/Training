fetch('https://training2000.herokuapp.com/data')
  .then(response => response.json())
  .then(json => {
      alert(json.length)
  })