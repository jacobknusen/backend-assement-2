document.getElementById("complimentButton").onclick = function () {
    axios.get("http://localhost:4000/api/compliment/")
        .then(function (response) {
          const data = response.data;
          alert(data);
        });
  };
//step one: grab the element fro html 
  const fortunebtn = document.getElementById("fortunebutton");
//step one functionality #2
  const namebutton = document.getElementById('namebutton')
  const nameinput = document.getElementById('nameinput')
//step ine function #3
  const indexbutton = document.getElementById('indexbutton')
  const indexinput = document.getElementById('indexinput')
  
  //step 2: write out the functioniality for my elemennt 
  function getfortune() {
      axios.get("http://localhost:4000/api/fortune/")
      .then((res) => {
        console.log(res.data);
        alert(res.data);
      });
  };
  //step 2 functionaliy #2 
  function createname (){
     const newname =  nameinput.value;
     const body = {
         newname
     }
     axios.post("http://localhost:4000/api/name",body)
     .then((res) =>{
       let name = res.data[res.data.length -1]
        alert(`you just registered ${name}!`)
        //we are resigning the value of the input box after it submits 
        nameinput.value = ``;
     })
  }

  function deletename () {
      const newindex = indexinput.value;

      axios.delete(`http://localhost:4000/api/delete${newindex}`)
      .then((res) => {

      })
  };
  //step 3 add event listner to element 
  fortunebtn.addEventListener("click", getfortune);
  //step 3 fucntion 2 
  namebutton.addEventListener('click',createname)
  //step 3 function #3
  indexbutton.addEventListener('click',deletename)