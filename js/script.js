/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/



/*
For assistance:
   Check out the "Project Resources" section of the Instructions tab: https://teamtreehouse.com/projects/data-pagination-and-filtering#instructions
   Reach out in your Slack community: https://treehouse-fsjs-102.slack.com/app_redirect?channel=unit-2
*/



/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/
const showPage = (list, page) => {
   let startIndex = (page * 9) - 9;
   let endIndex = (page * 9);
   const studenList = document.querySelector('.student-list');
   studenList.innerHTML = ''; // clear the student list
   
   list.forEach((student, index) => {
      if(index >= startIndex && index < endIndex){
         const studentItem = `
         <li class="student-item cf">
            <div class="student-details">
               <img class="avatar" src=${student.picture.large} alt="Profile Picture">
               <h3>${student.name.first}</h3>
               <span class="email">${student.email}</span>
            </div>
            <div class="joined-details">
               <span class="date">Joined ${student.registered.date}</span>
            </div>
         </li>
         `;
         studenList.insertAdjacentHTML('beforeend', studentItem);
      };
   })
}


/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/
const addPagination = (list) => {
   const numOfPages = Math.ceil(list.length / 9);
   const linkList = document.querySelector('.link-list');
   linkList.innerHTML = ''; // clear the link list
   for(let i  = 1; i <= numOfPages; i++){
      const button = `
       <li>
            <button type="button">${i}</button>
      </li>`
      linkList.insertAdjacentHTML('beforeend', button);  
   };

   const firstButton = linkList.querySelector('button');  // select the first button and add active class
   firstButton.classList.add('active');
   showPage(list, 1); // Display the first page initially

   linkList.addEventListener('click', (e) => {  //
      if(e.target.tagName === 'BUTTON'){
         const activeButton = linkList.querySelector('.active');
         if(activeButton){ // SELECTS AND CHECKS IF THERE IS AN ACTIVE BUTTON WITH THE CLASS ACTIVE IF TRUE; REMOVES IT
            activeButton.classList.remove('active');
         }
         e.target.classList.add('active');
         const pageNumber = parseInt(e.target.textContent); // Convert pageNumber to a number
         showPage(list, pageNumber);
      }
   })
   
}


addPagination(data);
// Call functions
