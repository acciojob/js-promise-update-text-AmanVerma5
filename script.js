//your JS code here. If required.
function sayHello(){
	return new Promise((resolve)=>{
		setTimeout(()=>{
			resolve("Hello, world!")
		},1000)
	})
}
let div=document.getElementById("output");
let prom=sayHello();
prom.then((data)=>{
	div.innerText=data;
})