// 1. Project10. Buttons. При нажатии на кнопку менять цвет body.
//     У вас должен быть слушатель для всех кнопок. По нажатию на каждую кнопку отображаете в консоли "клик"
//     По нажатию на каждую кнопку, считывать атрибут id нажатой кнопки
//     Менять фона body на считанный атрибут id.
//     Добавить кнопку blue и orange.

//task


let Button = document.querySelectorAll(".item")
console.log(Button);

let colors = ["OrangeRed", "SteelBlue", "MistyRose", "Brown", "SeaGreen"]
for (let i = 0; i < Button.length; i++) {
    Button[i].addEventListener("click", function() {
        console.log("click"); 
    let checkButton = Button[i].getAttribute("id")
        console.log(checkButton);
        // document.body.style.background = checkButton;
        if(checkButton == "img") {
            document.body.style.background = "url(./style/vopros3.png)"
        } else if(checkButton == "random") {
            document.body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)]
        } else{
            document.body.style.background = checkButton
        }
    } )
}

// 2. Создать 5 тегов <p> в html. Из массива let texts = ["Lorem", "Ipsum", "Dolor", "Sit", "Amet"]
//     для каждого тега p добавить соотв-ю текст. innerText

// let text = ["Lorem", "Ipsum", "Dolor", "Sit", "Amet"];
// let p = document.querySelectorAll("p");
// // console.log(p);

// for (let i = 0; i < p.length; i++) {
//     p[i].textContent = text[i];
    
// }


//     В html создаем 3 тега a - <a href=""></a> x3. Для каждого из трех, 
//         добавить link в href и title внутрь тега из массива arr

// let arr = [
//     {
//         link : "https://google.com",
//         title : "Ссылка на гугл "
//     },
//     {
//         link : "https://instagram.com",
//         title : " Ссылка на инстаграм"
//     },
//     {
//         link : "https://facebook.com",
//         title : "Ссылка на фейсбук"
//     }
// ]


// let anchor = document.querySelectorAll("a")
//     for (let i = 0; i < anchor.length; i++) {
//         anchor[i].setAttribute("href", arr[i].link)
//         anchor[i].innerText = arr[i].title
    
//     };




// Создать две кнопки - PLUS, MINUS
// Создать тег p с начальным значением - 0. 
// При клике на buttonPlus увеличивать значение в теге p на 1
// При клике на buttonMinus уменьшать значение в теге p на 1
// addEventListener. innerText. 
// */


// let minus = document.querySelector("#minus")
// let plus = document.querySelector("#plus")
// let text = document.querySelector("p")

// minus.addEventListener("click", function () {
//     text.innerText = Number(text.innerText) - 1
// })
// plus.addEventListener("click", function () {
//     text.innerText = Number(text.innerText) + 1
// })