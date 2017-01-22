$( document ).ready(function() {
    ChangeIt();
     StartTime();

    //Grabbing list from local storage
    var i = 0;
    for (i = 0; i < localStorage.length; i++) {
        var taskID = "task-" + i;
        $('#taskList').append("<li id='" + taskID + "'>" + localStorage.getItem(taskID) + "</li>");
    }
    //clearing local storage
    $('#clear').click(function () {
        localStorage.clear();
    });
    
    //Adding a new item
    $('#taskEntryForm').submit(function () {
        if ($('#taskInput').val() !== "") {
            var taskID = "task-" + i;
            var taskMessage = $('#taskInput').val();
            localStorage.setItem(taskID, taskMessage);
            $('#taskList').append("<li class='task' id='" + taskID + "'>" + taskMessage + "</li>");
            var task = $('#' + taskID);
            task.css('display', 'none');
            task.slideDown();
            $('#taskInput').val("");
            i++;
        }
        return false;
    });
    
    //Removing a signal item
    $('#taskList').on("click", "li", function (event) {
        self = $(this);
        taskID = self.attr('id');
        localStorage.removeItem(taskID);
        self.slideUp('slow', function () {
            self.remove();
        });

    });
    
});

//For Randomly generating background images
var totalCount = 10;
function ChangeIt() 
{
var num = Math.ceil( Math.random() * totalCount );
console.log(num);
document.body.background = 'images/'+num+'.jpg';
document.body.style.backgroundSize = "cover";// Background repeat
}

//Clock
function StartTime() { 
    var currentTime = new Date(); 
    
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    if(minutes < 10) { 
        minutes = "0" + minutes; 
    
    }
    var AmOrPm =""; 
    if(hours > 12) { 
        hours = hours -12; 
        AmOrPm = "PM";
    }
    else if(hours == 12) { 
    
        AmOrPm = "PM";
    
    }
    else {
    
        AmOrPm = "AM";
    }
    document.getElementById('clock').innerHTML =
    hours + ":" + minutes + " " + AmOrPm;
    var t = setTimeout(StartTime, 500);


}
