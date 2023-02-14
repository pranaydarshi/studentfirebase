import { app } from "./firebase.js"
import { getDatabase, set, ref, get, child, update, remove } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-database.js";

const db = getDatabase();
let name, rollno, year, branch;
function readDetails() {
    name = document.getElementById("name").value;
    rollno = document.getElementById("rollno").value;
    year = document.getElementById("year").value;
    branch = document.getElementById("branch").value;
}
let details = document.getElementById("details");
let add = document.getElementById("add")
add.addEventListener("click", () => {
    readDetails();

    set(ref(db, "students/" + rollno), {
        name, rollno, year, branch

    }).then(() => {


        alert("Successfully Updated")
    }).catch(() => {
        alert(`Sorry database is not updated`)
    })
})
let select = document.getElementById("get")
select.addEventListener("click", () => {
    readDetails();
    get(child(ref(db), "students")).then((result) => {
        details.innerHTML = `
        <style>
         #values{
  
             margin-top: 140px;
             margin-left: 100px;
             width:400px;
             height:210px;
             text-align: center;
            
          } 
          #values,.th,.td{
            border:2px solid ;
          }
         
          </style>
  
        <table id="values">
            <thead>
                    <th class="th" scope="col">rollno</th>
                    <th class="th" scope="col">YEAR</th>
                    <th class="th" scope="col">BRANCH</th>
                    <th class="th" scope="col">Name</th>
            </thead>
           
        </table>
        `
        let na = result.val()[rollno].name;
        let ro = result.val()[rollno].rollno;
        let ye = result.val()[rollno].year;
        let br = result.val()[rollno].branch;
        console.log(branch);
        let tr = document.createElement('tr');
        let td1 = tr.appendChild(document.createElement('td'));
        let td2 = tr.appendChild(document.createElement('td'));
        let td3 = tr.appendChild(document.createElement('td'));
        let td4 = tr.appendChild(document.createElement('td'));
        td1.innerHTML = na;
        td1.setAttribute("class", "td");
        td2.innerHTML = ro;
        td2.setAttribute("class", "td");
        td3.innerHTML = ye;
        td3.setAttribute("class", "td");
        td4.innerHTML = br;
        td4.setAttribute("class", "td");
        document.getElementById("values").appendChild(tr);

    })
        .catch(() => {
            alert(`Sorry there is no such data exist`)
        })
})
let updt = document.getElementById("update")
updt.addEventListener("click", () => {
    readDetails();
    update(ref(db, "students/" + rollno), {
        name, rollno
    })
})

let del = document.getElementById("delete")
del.addEventListener("click", () => {
    readDetails();
    remove(ref(db, "students/" + rollno), {
        rollno
    })
})
details.innerHTML = `
<style>
         #values{
  
             margin-top: 140px;
             margin-left: 100px;
             width:450px;
             height:210px;
             text-align: center;

            
          } 
          #values,.th,.td{
            border:2px solid ;
          }
         
          </style>
        
        <table id="values" > 
            <thead>
            <th colspan="4"><marquee>STUDENTS DATA</marquee></th>

                    
            </thead>
            <tbody>
            <th class="th" scope="col">NAME</th>
                    <th class="th" scope="col">ROLLNO</th>
                    <th class="th" scope="col">BRANCH</th>
                    <th class="th" scope="col">COURSE</th>
            </tbody>
           
        </table>

`
get(child(ref(db), "students")).then((snapshot) => {
    let students = []
    snapshot.forEach(childsnapshot => {
        students.push(childsnapshot.val());

    })
    for (let i = 0; i < students.length; i++) {

        let tr = document.createElement('tr');
        let td1 = tr.appendChild(document.createElement('td'));
        let td2 = tr.appendChild(document.createElement('td'));
        let td3 = tr.appendChild(document.createElement('td'));
        let td4 = tr.appendChild(document.createElement('td'));
        td1.innerHTML = students[i].name;
        td1.setAttribute("class", "td");
        td2.innerHTML = students[i].rollno;
        td2.setAttribute("class", "td");
        td3.innerHTML = students[i].year;
        td3.setAttribute("class", "td");
        td4.innerHTML = students[i].branch;
        td4.setAttribute("class", "td");
        document.getElementById("values").appendChild(tr);
    }

})  
