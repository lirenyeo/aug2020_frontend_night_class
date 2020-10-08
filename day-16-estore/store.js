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
    let imageURL = 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSR_Tzb2xxolDKuPJ_yTW3UKNgtdtm0yeTCdQ&usqp=CAU'
    if (product.fields.Image) {
      imageURL = product.fields.Image[0].url
    }

    let priceBtn = ''
    if (product.fields.Price) {
      priceBtn = `<a href="#" class="btn btn-primary">RM${product.fields.Price}</a>`
    }

    productList.insertAdjacentHTML('beforeend', `
      <div class="col-sm-6 col-md-4 col-lg-3 mt-4">
        <div class="card">
          <img src="${imageURL}" class="card-img-top">
          <div class="card-body">
            <h5 class="card-title">${product.fields.Name}</h5>
            <p class="card-text">${product.fields.Description || 'This product has no description'}</p>
            ${priceBtn}
          </div>
        </div>
      </div>
    `)
  })
})



// to use add record API:

/**
 * fetch('https://api.airtable.com/v0/app48VmguLgS5NIyE/Products', {
   method: 'POST',
   headers: {
     Authorization: "Bearer key23F8r22FJ7DNvk",
     "Content-Type": "application/json"
   },
   body: JSON.stringify({
     records: [
       {
         fields: {
           Name: 'NEW PRODUCT',
           Description: 'blahblahblah'
         }
       }
     ]
   })
 })
 */