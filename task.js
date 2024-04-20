fetch('https://fakestoreapi.com/carts/user/2')
            .then(res=>res.json())
            .then(json=>console.log(json))
            