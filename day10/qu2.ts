// Question 20: Implement a Simple Student Record

// Problem Statement: Create a TypeScript class Student to manage a student's name and grade. The class should have the following methods:

// setName(name: string): void - Sets the student's name.
// setGrade(grade: number): void - Sets the student's grade.
// getRecord(): { name: string; grade: number } - Returns an object with the student's name and grade.
// Example Usage:

class Student {
   name :string
   grade:number

  setName(name:string){
     this.name = name

  }
  setGrade(grade:number){
    this.grade = grade
  }
  getRecord(){
    return {name:this.name,grade:this.grade} 
  }


}


const student = new Student();
student.setName("Alice");
student.setGrade(90);
console.log(student.getRecord()); // Output: { name: "Alice", grade: 90 }
