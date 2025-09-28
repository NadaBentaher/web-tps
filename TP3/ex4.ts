interface User{
    id :number;
    name : string;
    email? : string;
    readonly isAdmin : boolean;
}
let user1 : User = {
    id : 1,
    name : "nada",
    email : "nada@gmail.com",
    isAdmin : false,
}
interface Admin extends User{
    permissions : string[];
}
let admin1: Admin = {
  id: 2,
  name: "rihem",
  isAdmin: true,
  permissions: ["modify", "delete"]
};