const Members = require("./Members");
const MyStringFunctions = require("./MyStringFunctions");

    // Array of course-objects
    const courseDetails = [
        {
            courseName : 'Automation',
            price : 1000,
            length : 6
        },
        {
            courseName : 'QA',
            price : 2000,
            length : 8
        },
        {
            courseName : 'Mobile',
            price : 3000,
            length : 12
        }
    ]


class Students extends Members {

    static idValue = 0;
    student = {
        sId : 0,
        sGrade : '',
        sCourseDetails : {
            courseName : '',
            coursePrice : 0,
            courseLength : 0,
        },
        sBalance : 0
    }

    /**
     * age >= 16
     *      if not, do not enroll and show message, student has to be of 16 or above
     *
     * if invalid studentCourse
     *      do not enroll and show message, student should provide correct course name
     * 
     * all students must be within usa (USA, United States of America)
     *      if not, do not enroll and show message, student has to inside the United States of America
     * 
     * if data is correct
     *      Congratulations for enrolling in <courseName>
     *      Student id : XX
     */
    enrollment(studentName, studentAge, studentCountry, studentCourse) {
        if (studentAge >= 16 && this.isCourseNameValid(studentCourse) && studentCountry.toLowerCase().localeCompare('usa') === 0 ) {
            const courseData = this.isCourseNameValid(studentCourse);
            this.member.name = MyStringFunctions.toTitleCase(studentName);
            this.member.age = studentAge;
            this.member.location = studentCountry;
            this.student.sCourseDetails.courseName = courseData.courseName;
            this.student.sCourseDetails.coursePrice = courseData.price;
            this.student.sCourseDetails.courseLength = courseData.length;
            this.student.sBalance = courseData.price;
            this.student.sId = ++Students.idValue;
            console.log(`\nThank you for enrolling.\nYour id value is ${this.student.sId}\n`);
        } else {
            console.log("\nDO NOT ENROLL");
        }
    }


    showMyDetails() {
        console.log(`\nStudent details:\nId: ${this.student.sId}`);
        super.showMyDetails();
        console.log(`Course name: ${this.student.sCourseDetails.courseName}\nBalance: $${this.student.sBalance}\n`);
        // console.log(this.student);
    }

    /**
     * we want course-object which has name as checkForCourse
     */
    isCourseNameValid(checkForCourse) {
        return courseDetails.find(course => course.courseName.toLowerCase().localeCompare(checkForCourse.toLowerCase()) === 0);
    }
    
    /**
        changeCourse
        submitDocuments
        makePayment
        dropOut
        orderBooks
    */


    static messageFromClass2022(msg) {
        console.log(`\nMessage to institute from the Class of 2022:\n${msg}\n`);
    }



}
module.exports = Students;