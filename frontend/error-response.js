var request = new XMLHttpRequest();

  var input = JSON.parse(this.response);

  if (request.status >= 200 && request.status < 400) {
    input.forEach(movie => {
      console.log(movie.title);
    });
  } else {
    console.log('error');
  }
}

request.send();