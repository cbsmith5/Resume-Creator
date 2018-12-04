function pageInfo() {
    document.getElementById("header").style.color = "red";  
    document.getElementById("header").style.fontFamily = "Tahoma";
    document.getElementById("header").style.textAlign = "center";
    
    document.getElementById("subhead").style.fontFamily = "Garamond";
    document.getElementById("subhead").style.color = "red";
    document.getElementById("subhead").style.textAlign = "center";
    document.getElementById("subhead").style.fontStyle = "italic";
    document.getElementById("subhead").style.fontStyle = "italic";
}

function validateEmail() {
    var email=document.getElementById("email").value;
    var atpos = email.indexOf('@');

    if (atpos<1) {
        alert("Invalid email address. Please re-enter.");
        document.getElementById("email").value="";
        return false;
    }
}
function myWindow() {
    resName = document.getElementById("name").value;
    resAddress = document.getElementById("address").value;
    resEmail= document.getElementById("email").value;
    resNumber = document.getElementById("number").value;
    resInfo = document.getElementById("info").value;
    resCareer = document.getElementById("career").value;
    resEducation = document.getElementById("education").value;
    resRef = document.getElementById("ref").value;
    
    resFirstDate = document.getElementById("dateOne").value;
    resSecondDate = document.getElementById("dateTwo").value;
    resThirdDate= document.getElementById("dateThree").value;
    resFourthDate = document.getElementById("dateFour").value;
    
    resFirstDateE = document.getElementById("dateOneE").value;
    resSecondDateE = document.getElementById("dateTwoE").value;
    resThirdDateE = document.getElementById("dateThreeE").value;
    resFourthDateE = document.getElementById("dateFourE").value;
    
    resFirstWork = document.getElementById("firstWork").value;
    resSecondWork = document.getElementById("secondWork").value;
    resThirdWork = document.getElementById("thirdWork").value;
    resFourthWork = document.getElementById("fourthWork").value;

    resume = ("<html>\n<head>\n<title>Resume</title>\n");
    resume += ("<style> body { font-size:12pt; font-family:verdana; } div#theLeft { clear:both; width:30%; padding-bottom:20px; float:left; }  div#theRight { width:50%; float:right; padding-bottom:20px; padding-right:10px; word-wrap:break-word; } </style></head></html>");
    
    resume += (resName+"<br>"+resAddress+" / "+resNumber+"<br>"+resEmail); 
    resume += ("<hr width=100%>");
    resume += ("<div id=theLeft>CAREER OBJECTIVES</div><div id=theRight>"+resCareer+"</div>");
    resume += ("<div id=theLeft>PERSONAL DATA</div><div id=theRight>"+resInfo+"</div>");
    resume += ("<div id=theLeft>EDUCATION</div><div id=theRight>"+resEducation+"</div>");
    
    resume += ("<div id=theLeft>EMPLOYMENT EXPERIENCE</div>");
    resume += ("<div id=theLeft>"+resFirstDate+" to "+resFirstDateE+"</div><div id=theRight>"+resFirstWork+"</div>");
    resume += ("<div id=theLeft>"+resSecondDate+" to "+resSecondDateE+"</div><div id=theRight>"+resSecondWork+"</div>");
    resume += ("<div id=theLeft>"+resThirdDate+" to "+resThirdDateE+"</div><div id=theRight>"+resThirdWork+"</div>");
    resume += ("<div id=theLeft>"+resFourthDate+" to "+resFourthDateE+"</div><div id=theRight>"+resFourthWork+"</div>");
    
    resume += ("<div id=theLeft>CHARACTER REFERENCES</div><div id=theRight>Upon request</div>")
    resume += ("<div id=theLeft>BUSINESS REFERENCES</div><div id=theRight>"+resRef+"</div>");
    
    flyWindow = window.open('about:blank','myPop','width=900,height=900,left=200,top=200');
    flyWindow.document.write(resume);
    }