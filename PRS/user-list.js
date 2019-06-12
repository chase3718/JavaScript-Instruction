$().ready(() => {
    $.getJSON("http://localhost:8080/users/")
        .then((resp) => {render(resp.data); console.log(resp);});
       
})

function render(users) {
    let tbody = $("#tbody");
    for (let user of users) {
        let row = `<tr>`;
        row += `<td>${user.id}</td>`;
        row += `<td>${user.userName}</td>`;
        row += `<td>${user.password}</td>`;
        row += `<td>${user.firstName}</td>`;
        row += `<td>${user.lastName}</td>`;
        row += `<td>${user.phoneNumber}</td>`;
        row += `<td>${user.email}</td>`;
        row += `<td>${user.reviewer ? "Yes" : "No"}</td>`;
        row += `<td>${user.admin ? "Yes" : "No"}</td>`;
        tbody.append(row);
    }
}