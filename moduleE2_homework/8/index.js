let a = new Map([
[1,2],
[3,4],
[5,6],
[7,8]])

for(let key of a.keys()){
	console.log(`key is ${key} - value is ${a.get(key)}`);
}