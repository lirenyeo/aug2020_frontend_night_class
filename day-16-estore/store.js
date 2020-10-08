const productList = document.querySelector('#product-list')

fetch('https://api.airtable.com/v0/app48VmguLgS5NIyE/Products', {
  method: 'GET',
  headers: {
    Authorization: "Bearer key23F8r22FJ7DNvk"
  }
})
.then(response => response.json())
.then(result => {
  console.log(result)
  result.records.forEach(product => {
    productList.insertAdjacentHTML('beforeend', `
      <div class="col-sm-6 col-md-4 mt-4">
        <div class="card">
          <img src="${product.fields.Image[0].url}" class="card-img-top">
          <div class="card-body">
            <h5 class="card-title">${product.fields.Name}</h5>
            <p class="card-text">${product.fields.Description}</p>
            <a href="#" class="btn btn-primary">RM${product.fields.Price}</a>
          </div>
        </div>
      </div>
    `)
  })
})

//result.records =>
// [
//   {
//     fields: {
//       Name: 'Ylang Ylang',
//       Price: 22,
//       Image: [
//         {
//           url: 'https://asdfasdfasdf'
//         }
//       ]
//       //...
//     }
//   },
//   {
//     fields: {
//       Name: 'Y"Jo Malone English Pear & Freesia"',
//       Price: 22
//       //...
//     }
//   },
// ]

