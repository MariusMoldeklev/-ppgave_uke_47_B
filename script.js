


                                                        //Hvis du vil gjøre hvert individuelle bilde stort med trykk på bilde

const imageElements = document.querySelectorAll(".task_three_img");

function toggleImageSize(imgElement) {
    let imgSmall = true;

    imgElement.addEventListener("click", () => {
        if (imgSmall) {
            imgElement.classList = "task_three_img_big";
            imgSmall = false;
        } else {
            imgElement.classList = "task_three_img";
            imgSmall = true;
        }
    });
}

imageElements.forEach(toggleImageSize);

                                                        // // hvis du vil gjøre alle bildene store med et trykk.

// const imageContainer = document.querySelector(".img");

// imageContainer.addEventListener("click", ()=> {
//     imageContainer.classList.toggle("task_three_img_big");
// });


                                                                                //undervisnings måte

// const dogImages = document.querySelectorAll["task_three_img"];
// console.log(dogImages);
// let imgSmall = true;

// dogImages.forEach((img)=> {
//    img.addEventListener("click", ()=> {
//     if (imgSmall ==true) {
//         dogImages.forEach((img) => {
//             img.classList="task_three_img_big";
//             imgSmall= false;
//         });
//     } else {
//         dogImages.forEach((img) => {
//             img.classList="task_three_img";
//             imgSmall= true;
//         });
//     }
//    });
// });





