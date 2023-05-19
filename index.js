function formatDate(dateString) {
  const date = new Date(dateString);
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
}
  

const fetchData = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return {
      login: data.login,
      img: data.avatar_url,
      followers: data.followers,
      following: data.following,
      repos: data.public_repos,
      name: data.name,
      company: data.company,
      location: data.location,
      date: data.created_at,
      bio: data.bio,
      twitter: data.twitter_username,
      blog: data.blog,
      url: data.html_url,
    };
  } catch (err) {
    console.log(err);
  }
};

const _ = () => {
  const card = document.getElementsByClassName('card')[0];
  card.style.display = 'grid';  
  const username = document.getElementById("username").value;
  const name = document.getElementById("name");
  const img = document.getElementById("user-img");
  const join = document.getElementById("join");
  const repos = document.getElementById("repos");
  const followers = document.getElementById("followers");
  const following = document.getElementById("following");
  const location = document.getElementById("location");
  const twitter = document.getElementById("twitter");
  const blog = document.getElementById("blog");
  const company = document.getElementById("company");
  const link = document.getElementById("user-link");
  const bio = document.getElementById("bio");

  const url = "https://api.github.com/users/" + username;
  fetchData(url)
    .then((res) => {
      console.log(res);
      // You can access the data and assign it to variables or use it in any way you need.
      name.innerHTML = res.name;
      img.src = res.img;
      join.innerHTML = formatDate(res.date);
      repos.innerHTML = res.repos;
      followers.innerHTML = res.followers;
      following.innerHTML = res.following;
      location.innerHTML = res.location;
      twitter.innerHTML = res.twitter;
      blog.innerHTML = res.blog;
      company.innerHTML = res.company;
      link.innerHTML = "@" + res.login;
      link.href = res.url;
      bio.innerHTML = res.bio;
    })
    .catch((err) => {
      console.log(err);
    });
};
