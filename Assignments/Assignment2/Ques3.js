var name="Sarath kumar"
var message=`Hello ${name}! Welcome to Javascript!!`
console.log(message)
console.log("Uppercase Name:",name.toUpperCase())
if(message.length>10){
    console.log("Message is more than 10 characters")
}
else{
    console.log("Message is less than 10 characters")
}

if(message.includes("Javascript")){
    console.log("Messsage contains word Javascript")
}
else{
    console.log("Messsage does not contain word Javascript")
}