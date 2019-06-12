$().ready(() => {
    $.getJSON("http://localhost:8080/users/")
        .then((resp) => { render(resp.data); console.log(resp); });

})

function render(users) {
    let tbody = $("#userList");
    for (let user of users) {
        let row = `<br>`;
        row += `<div class="shadow p-3 mb-5 container col-sm bg-white summary rounded">`;
        row += `<a href="#user${user.id}" class="btn btn-default" data-toggle="collapse">${user.userName}</a>`;
        row += `<div class="collapse" id="user${user.id}" name="user${user.id}">`;
        row += `<div class="card card-body">`;
        row += `<table class="table">`;
        row += `<thead>
        <tr>
            <th scope="col">#</th>
            <th scope="col">Username</th>
            <th scope="col">Password</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Phone Number</th>
            <th scope="col">Email</th>
            <th scope="col">Reviewer</th>
            <th scope="col">Admin</th>
            </tr>
            </thead>
            <tbody id="tbody" name="tbody">`;
        row += `<tr>`;
        row += `<td>${user.id}</td>`;
        row += `<td>${user.userName}</td>`;
        row += `<td>${user.password}</td>`;
        row += `<td>${user.firstName}</td>`;
        row += `<td>${user.lastName}</td>`;
        row += `<td>${user.phoneNumber}</td>`;
        row += `<td>${user.email}</td>`;
        row += `<td>${user.reviewer ? "Yes" : "No"}</td>`;
        row += `<td>${user.admin ? "Yes" : "No"}</td>`;
        row += `</tr>`;
        row += `</tbody>`;
        row += `</table>`;
        row += `</div>`;
        row += `</div>`;
        row += `</div>`;
        tbody.append(row);
    }
}
