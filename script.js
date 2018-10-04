$.ajax({
    url: `https://techkaro-test.herokuapp.com/api/v1/getdata`,
    success: function(data) {
        console.log(data);
        document.querySelector(".img").style.backgroundImage = url("data.imageURL");
        document.querySelector(".card-text").inerHTML = `${data.info.description}`;
    }
})
// Write all your Javascript here!