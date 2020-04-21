const courseName = document.querySelector('#courseName');
const courseRating = document.querySelector('#courseRating');
const courseAddBtn = document.querySelector('#courseAddBtn');
const courseList = document.querySelector('#courseList');



courseAddBtn.addEventListener('click',() => {
    console.log('Js');
   const  enterdCourseName = courseName.value;
   const enterdCourseRating = courseRating.value;

   if( enterdCourseName.trim().length <=0 ||
       enterdCourseRating.trim().length <=0 ||
       enterdCourseRating <=0 ||
       enterdCourseRating >5 )
       {
           const alert =document.createElement('ion-alert');
           alert.header = "Invalid Courses Data ";
           alert.message = "Please Enter a Valid Data";
           alert.buttons = ['Okay'];

           document.body.appendChild(alert);
           alert.present()
           return ;
       }

       const newCourse = document.createElement('ion-item');
       newCourse.textContent = enterdCourseName + '(' + enterdCourseRating +' / 5)' ;
       courseList.appendChild(newCourse);
       courseName.value = '';
       courseRating.value = '';
});