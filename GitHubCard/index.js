
// Axios HTTP 'get' request

axios.get('https://api.github.com/users/hutchcrowley')
  .then(response =>
  {
    console.log(response);

    const gitHubUser = response.data;

    const cardParent = document.querySelector('.cards');
    cardParent.appendChild(githubCardComponent(gitHubUser));

  })
  .catch(err =>
  {

    console.log(err);

  });

// Array that feeds constuctor function

const followersArray = [

  'ilyris',
  'tetondan',
  'dustinmyers',
  'justsml',
  'luishrd',
  'bigknell',
];

//  First constuctor function. takes an array as its one parameter and iterates over every index of the 'followersArray' array. For each iteration of the function, it fires off the callback which creates a new card based on the second constructor function, githubCardComponent.


followersArray.forEach(user =>
{

  axios.get('https://api.github.com/users/' + user)
    .then(response =>
    {
      console.log(response.data);

      let userObj = response.data;

      const cardParent = document.querySelector('.cards');
      cardParent.appendChild(githubCardComponent(userObj));

    })

    .catch(err =>
    {
      console.log(err);
    })
});

// This is a constructor function that contains the model for the data passed into it by the previous function. First, new elements are created using document.createElement. Second, attributes, class names, etc are set using various methods. The goal being to get the elements to line up with the layout of the HTML, as well as the existing CSS. Third, the elements, processed through the constructor function, areadded to the dom and Presto! A new card is dynamically created.


const githubCardComponent = (gitHubUser =>
{

  // First

  const cardContainer = document.createElement("div");
  const profileImage = document.createElement("img");
  const cardInformationContainer = document.createElement("div");
  const userName = document.createElement("h3");
  const userUserName = document.createElement("p");
  const location = document.createElement("p");
  const profile = document.createElement("p");
  const urlAddress = document.createElement("a");
  const followers = document.createElement("p");
  const following = document.createElement("p");
  const bio = document.createElement("p");

  // Second
  console.log(gitHubUser);

  cardContainer.classList.add("card");
  profileImage.src = gitHubUser.avatar_url;
  cardInformationContainer.classList.add("card-info");
  userName.classList.add("users-name");
  userName.textContent = gitHubUser.name;
  userUserName.classList.add("users-user-name");
  userUserName.textContent = gitHubUser.login;
  urlAddress.setAttribute("href", gitHubUser.html_url);
  urlAddress.textContent = gitHubUser.html_url;
  location.textContent = 'location' + gitHubUser.location;
  followers.textContent = 'Followers: ' + gitHubUser.followers;
  following.textContent = 'Following: ' + gitHubUser.following;
  bio.textContent = 'Bio: ' + gitHubUser.bio;

  // Third
  console.log(gitHubUser);

  cardContainer.appendChild(profileImage);
  cardContainer.appendChild(cardInformationContainer);

  cardInformationContainer.appendChild(userName);
  cardInformationContainer.appendChild(userUserName);
  cardInformationContainer.appendChild(location);
  cardInformationContainer.appendChild(profile);

  profile.appendChild(urlAddress);
  console.log(gitHubUser);

  cardInformationContainer.appendChild(followers);
  cardInformationContainer.appendChild(following);
  cardInformationContainer.appendChild(bio);

  console.log(cardContainer);

  return cardContainer;
});