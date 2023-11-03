// // console.log("Selamat Anda berhasil menggunakan JavaScript pada Website")

// var firstName = "Harry";
// console.log(firstName);

// firstName = "Ron";
// console.log(firstName);

const user = {
    name: {
        first: firstName,
        last: lastName,
    },
    language: language,
};

if(user.language === "English") {
    alert ("Nice to meet you " + user.name.first + " " + user.name.last + "!");
} else if (user.language === "French") {
    alert("Ravi de vous rencontrer " + user.name.first + " " +
user.name.last + "!");
} else if (user.language === "Japanese") {
    alert("Hajimemashite, " + user.name.first + " " + user.name.last
+ "!");
    } else {
alert("Senang bertemu dengan Anda " + user.name.first + " " +
user.name.last + "!");
}
