console.log("This is work");

const container = document.querySelector('.container')

fetch("https://api.spacexdata.com/v3/capsules")
.then(response => {
    // console.log(response);
    return response.json()
})
.then(data => {
    // console.log(data);
    // const firstEle = data[0]
    // console.log(firstEle);
    // let capsuleID = firstEle.capsule_id
    // console.log(capsuleID);
    // let details = firstEle.details
    // console.log(details);
    // let landings = firstEle.landings;
    // console.log(landings);

    for (let i = 0; i < data.length; i++){
        let eachCapsules = data[i]
        // console.log(eachCapsule);
        const obj = {
            capsuleID: eachCapsules.capsule_id,
            details: eachCapsules.details,
            landings: eachCapsules.landings
        }
        // console.log(obj);

        const capsuleElement = document.createElement('p');
        capsuleElement.textContent = obj.capsuleID;
        container.appendChild(capsuleElement);
    }
})