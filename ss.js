let array = ["https://lyrics-words.co/wp-content/uploads/2016/07/20160725-27.jpg","https://ggirls.cc/wp-content/uploads/2018/12/6091.jpg","https://media.mehrnews.com/d/2021/03/16/3/3721354.jpg","https://www.almuheet.net/wp-content/uploads/%D8%B5%D9%88%D8%B1-%D8%AC%D9%85%D9%8A%D9%84%D8%A9-%D8%AC%D8%AF%D9%8A%D8%AF%D8%A9-2020-%D9%84%D9%84%D8%A8%D9%86%D8%A7%D8%AA%D8%AB%D8%B5%D8%AB%D9%82.jpg","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYrpBxVhPMHWGejQezmfIgZn7ftI4PzADatg&usqp=CAU","https://photos-images.org/wp-content/uploads/2018/02/1707.jpeg","https://dreams-new.org/wp-content/uploads/2021/04/unnamed-file-173.jpg"];

let btn=document.getElementById('button');
let pic=document.getElementById('picture');
let i = 0 ;
btn.addEventListener('click', ()=>{
    pic.src=array[i++];
    if (i ==array.length){
     i = 0 ;
    }

});