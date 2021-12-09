
var cites=[
    {
        "sentence":"I love my mom",
        "author":"Md Nasir Uddin"
    },
    {
        "sentence":"Every man has a strong energy of mind",
        "author":"Ahsan Hashem"
        
    },
    {
        "sentence":"Changing the world is easier,when you change yourself",
        "author":"Rahat Khandakar"
        
    }
]

var inspire=()=>{
    let min=0,max=cites.length;
    let index=Math.floor(Math.random() * (max - min + 1) ) + min;
    return cites[index];
}

exports.inspire=inspire