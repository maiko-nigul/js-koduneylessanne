const user = {
  name: "Kati",
  profile: {
    email: "kati@example.com"
  }
};

console.log(user.name);
console.log(user["name"]);

console.log(user.profile?.avatar);

const count = 0;
console.log(count ?? 10);
console.log(count || 10);