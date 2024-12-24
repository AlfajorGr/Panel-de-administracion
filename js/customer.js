function init(){
    renderCustomers();
}

async function getCustomers(){
    let url = URL_SERVER + '/customer';
    let response = await fetch(url);
    let json = await response.json();
    return json;
}

function renderCustomers(){
    let customers = getCustomers();
    let html = '';
    for(let customer of customers){
        html += getHtmlRowCustomer(customer);
    }
    let tbody = document.getElementById('tbody-customers');
    tbody.innerHTML = html;
    
}

function onclickRemove(id){

}

function getHtmlRowCustomer(customer){
    return `<tr>
                <td>${customer.id}</td>
                <td>${customer.firstname}</td>
                <td>${customer.lastname}</td>
                <td>${customer.email}</td>
                <td>
                    <a href="#" class="btn btn-primary btn-circle btn-sm">
                        <i class="fas fa-edit"></i>
                    </a>

                    <a href="#" onclick="onclickRemove(${customer.id})" class="btn btn-danger btn-circle btn-sm">
                        <i class="fas fa-trash"></i>
                    </a>
                </td>
            </tr>`;
}

init();