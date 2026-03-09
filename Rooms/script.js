const baseUrl = "http://localhost:3000";

async function getData() {
    const response = await fetch(`${baseUrl}/api/rooms`);
    const data = await response.json();



    console.log(data);
}




getData();