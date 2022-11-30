// import axios from 'axios'; passed it in the link for axios

const form = document.getElementById('form');
form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const input = form.elements;
    const payLoad1 = {
        empId: input['empId'].value,
        name: input['name'].value,
        age: input['age'].value,
        email: input['emailId'].value
    }
    const url = 'http://localhost:3000/api/postData'
    axios.post(url, payLoad1)
      .then((response) => {
        console.log(response);
      }, (error) => {
        console.log(error);
      });
})

const getData = async () => {
    try {
        url = 'http://localhost:3000/api/empData';
        const data = await fetch(url);
        console.log(data.ok);
        const res = await data.json();
        let eData = '';
        res.map(emp => {
            eData += `<tr>
            <td>${emp.name}</td> 
            <td>${emp.age}</td> 
            <td>${emp.email}</td>
            </tr>`
        })
        document.getElementById('empTable').innerHTML = eData;
    } catch (error) {
        console.log(error)
    }
}
getData();
