$().ready(() => {

    $.getJSON("http://localhost:8080/vendors/")
        .then((resp) => {
            console.log(resp);
            render(resp.data);
        });

});

function render(vendors) {
    let tbody = $("#vendorList");
    for (let vendor of vendors) {
        let row = `<br>`;
        row += `<div class="shadow p-3 mb-5 container col-sm bg-white summary rounded">`;
        row += `<a href="#vendor${vendor.id}" class="btn btn-default" data-toggle="collapse">${vendor.name}</a>`;
        row += `<div class="collapse" id="vendor${vendor.id}" name="vendor${vendor.id}">`;
        row += `<div class="card card-body">`;
        row += `<table class="table">`;
        row += `<thead>
        <tr>
            <th scope="col">#</th>
            <th scope="col">Code</th>
            <th scope="col">Name</th>
            <th scope="col">Address</th>
            <th scope="col">Phone Number</th>
            <th scope="col">Email</th>
            <th scope="col">Is Approved</th>
            </tr>
            </thead>
            <tbody id="tbody" name="tbody">`;
        row += `<tr>`;
        row += `<td>${vendor.id}</td>`;
        row += `<td>${vendor.code}</td>`;
        row += `<td>${vendor.name}</td>`;
        row += `<td>${vendor.address}, ${vendor.city}, ${vendor.state} ${vendor.zip}</td>`;
        row += `<td>${vendor.phoneNumber}</td>`;
        row += `<td>${vendor.email}</td>`;
        row += `<td>${vendor.preApproved ? "Yes" : "No"}</td>`;
        row += `</tr>`;
        row += `</tbody>`;
        row += `</table>`;
        row += `<tbody id="pbody" name="pbody">`;
        $().ready(() => {
        $.getJSON("http://localhost:8080/products/")
            .then((resp) => {
                console.log(resp);
                child(resp.data, vendor.id);
            });
        });
        row += `</tbody>`;
        row += `</div>`;
        row += `</div>`;
        row += `</div>`;
        tbody.append(row);
    }
}

function child(products, vendorId) {
    let pbody = $("#pbody");
    for (let product of products) {
        if (product.id == vendorId) {
            let row = `<tr>`
            row += `<td>${product.id}</td>`;
            row += `<td>${product.code}</td>`;
            row += `</tr>`;
            pbody.append(row);
        }
    }
}