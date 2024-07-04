async function testAsync () {
    let hello = "first hello"
     new Promise ( (resolve) =>{ 
        console.log("hello")
         setTimeout(() => {
             hello ="new hello"
             console.log(hello)
            resolve( console.log("finished running"))
        }, 10000)
 } )

 console.log(hello)

}

testAsync()