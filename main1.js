

function loadjson(file){
	return new Promise((resolve,reject)=>{
		return fetch(file).then(response=>{
			if(response.ok){
				resolve(response.json());
			}
			else{
				reject(new Error('error'));
			}
		})
	})
}
var newfile = loadjson("data.json");
newfile.then(data=>{
    
    add(data);

})
function add (data){

var child1 = document.querySelector(".child1");
let persondata = data.details

let personalinfo = `  <div class="card card1" >
<img src="${persondata.image}" class="card-img-top" alt="...">
<div class="card-body">
  <h5 class="card-title">${persondata.name}</h5>
  <p class="card-text">${persondata.college}</p>
</div>
<ul class="list-group list-group-flush">
<li class="list-group-item">Rollno: ${persondata.rollno}</li>
  <li class="list-group-item"><a href=""></a><img src="https://img.icons8.com/bubbles/50/000000/important-mail.png"/>${persondata.email}</li></a>
  <li class="list-group-item"><a href=""></a><img src="https://img.icons8.com/fluent/48/000000/phone.png"/>${persondata.number}</li></a>
  <li class="list-group-item"><a href="http://naturesup.000webhostapp.com/">${persondata.website}</li></a>
  <li class="list-group-item"><a target="_blank" href="${persondata.linkedin}"><img src="https://img.icons8.com/cute-clipart/64/000000/linkedin.png"/></a><a href="${persondata.github}" target="_blank"><img src="https://img.icons8.com/fluent/48/000000/github.png"/></a></li>
</ul>

</div>
</div>`

child1.innerHTML=personalinfo;


var child2 = document.querySelector(".child2");
let carrer =`
<section class="career">
              <div class="headings">
                <h1>Carrer objective</h1>
            </div>
              <p>${data.careerobjective.info}</p>
            </section>
            <hr>
`
child2.innerHTML+=carrer;
let edu = '';
data.educationalqualification.forEach(element => {
    edu+= `<tr>
            <td>${element.passoutyear}</td>
            <td>${element.degree}</td>
            <td>${element.institute}</td>
            <td>${element.percentage}</td>
            </tr>`
});
let edudetails =`<section class="education" id="education">
<div class="headings">
    <h1>EDUCATION</h1>
</div>
<div class="table-responsive">
<table class="table">
<thead class="thead-dark">
<tr>
<th scope="col">#</th>
<th scope="col">YEAR</th>
<th scope="col">UNIVERSITY/SCHOOL</th>
<th scope="col">GRADE</th>
</tr>
</thead>
<tbody>
${edu}
</tbody>
</table>
      </div>
</section>
`
child2.innerHTML+=edudetails;
let techskills = '';
let sub = '';
techskills+='<h2>Technical skills</h2>';
data.techinicalskills.forEach(element => {
  techskills+= `<h6>${element.title}</h6>
          <hr/>
          `
          sub+="<ul class='skill'>";
          console.log(element.info);
        element.info.forEach(skill=>{
          sub+=`<li>${skill}</li>`
        })

  techskills+=sub;
  sub+="</ul><br/>";
  sub ='';
  child2.innerHTML+=techskills;
  techskills='';
          
});
let ach ='';
ach+='<h2>Achievements</h2><hr>';
ach+="<ul>"
data.achievements.forEach(element=>{
  ach+=`<li>${element}</li>`
})
ach+="</ul>";
child2.innerHTML+=ach;
let hob ='';
hob+='<h2>HOBBIES</h2><hr>';
hob+="<ul>"
data.hobbies.forEach(element=>{
  hob+=`<li>${element}</li>`
})
hob+="</ul>";
child2.innerHTML+=hob;
}
 