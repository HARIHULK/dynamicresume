

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
  <li class="list-group-item"><a href=""></a><img src="https://img.icons8.com/bubbles/50/000000/important-mail.png"/>${persondata.email}</li></a>
  <li class="list-group-item"><a href=""></a><img src="https://img.icons8.com/fluent/48/000000/phone.png"/>${persondata.number}</li></a>
  <li class="list-group-item"><a href="http://naturesup.000webhostapp.com/">${persondata.website}</li></a>
  <li class="list-group-item"><a target="_blank" href="${persondata.linkedin}"><img src="https://img.icons8.com/cute-clipart/64/000000/linkedin.png"/></a><a href="${persondata.github}" target="_blank"><img src="https://img.icons8.com/fluent/48/000000/github.png"/></a></li>
</ul>

</div>
</div>`

child1.innerHTML=personalinfo;


var child2 = document.querySelector(".child2");
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
  techskills+= `<h3>${element.title}</h3>
          <hr/>
          `
          sub+="<ul class='skill'>";
          console.log(element.info);
        element.info.forEach(skill=>{
          sub+=`<li>${skill}</li>`
        })

  techskills+=sub;
  sub+="</ul><br/>";
  console.log(techskills)
  sub ='';
  child2.innerHTML+=techskills;
  techskills='';
          
});

}
 