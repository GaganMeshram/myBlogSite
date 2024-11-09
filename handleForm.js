let title = document.querySelector("#title");
let shortDesc = document.querySelector("#short-description");
let desc = document.querySelector("#description");
let postButton = document.querySelector("#postButton");






postButton.addEventListener("click", function () {
  // let postData =[]

  let postData = JSON.parse(localStorage.getItem("postData")) || [];

  // alert('button event')
  let data = {
    title: title.value,
    shortDesc: shortDesc.value,
    desc: desc.value,
  };
  postData.push(data);
  localStorage.setItem("postData", JSON.stringify(postData));
  document.getElementById("myForm").reset();

  // console.log(postData)
});
