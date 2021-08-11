let objects = []; 
butt.addEventListener("click", () => {
	            for(let i =0; i < 5; i++) {
            objects.push({
                'name': 'Egor #' + i,
                'age': 24
            });
        }

      
        console.log(objects);
        alert(objects.shift().name);
})