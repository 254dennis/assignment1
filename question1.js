document.write (" ")
let marks = prompt ("enter your score");
if (marks > 100){
    document.write('Invalid marks ')
}else if (marks >= 79){
    document.write(' YOUR GRADE IS: A')
}
else if (marks>= 60)
{
    document.write('YOUR GRADE IS : B')
}
else if (marks>= 59){
    document.write('YOUR GRADE IS: C')
}
else if (marks>=49) {

    document.write(' YOUR GRADE IS: D')
}
else {
    document.write("YOU HAVE FAILED : YOUR GRADE IS : E")
}