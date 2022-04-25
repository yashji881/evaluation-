// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page


// const url=`http://www.omdbapi.com/?apikey= a1333184&s=`;

let movies_div=document.getElementById("movies");
let id;

async function searchmovies(){

try{
    let query=document.getElementById("search").value;

    let res=await fetch(`http://www.omdbapi.com/?apikey=a1333184&s=${query}`);

    let data= await res.json();
    console.log(data);
    const movies=data.search;
    return movies;
}catch(err){
    console.log(err);
}
    
    

}

function appendmovies(data){

    data.forEach(function(el){
let p=document.createElement("p");
p.innerText=el.Title;

let p1=document.createElement("p");
p1.innerText=el.Year;

let p2=document.createElement("p");
p2.innerText=el.imdbID;

movies_div.append(p,p1,p2);
        
    });
}
async function main(){

    let data=await searchmovies();
    if(data==undefined){
        return false;
    }
    appendmovies(data);
}
function debounce(func,delay){
if(id){
    clearTimeout(id);
}
id=setTimeout(function(){
    func();
},delay);

}


