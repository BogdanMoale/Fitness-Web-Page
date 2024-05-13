$(document).ready(function(){
    // Smooth scrolling for links with hash
    $('a[href^="#"]').on('click', function(e){
        e.preventDefault();
        var target = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 1000);

    });

    $('#menu').on('click', function(){
        $('.navbar ul').toggleClass('active');
    });
});

function validateForm(section) {
    // Get references to form elements
    var email = document.getElementById('email');
    var age = document.getElementById('age');
    var gender = document.getElementById('gender');
    var height = document.getElementById('height');
    var weight = document.getElementById('weight');
    var trainingDays = document.getElementById('training-days');
    var trainingTimes = document.getElementById('training-times');
    var experience = document.getElementById('experience');
    var healthConditions = document.getElementById('health-conditions');

    // Next button
    var nextButton = document.getElementById('nextButton');

    if (section === 1) 
    {
            // required fields are filled out
        if (email.value && age.value && gender.value && height.value && weight.value) {
            nextButton.disabled = false;
        } else {
            nextButton.disabled = true;
        }
    }
}


function nextSection(nextSectionNumber) {
    document.getElementById('section1').style.display = 'none';
    document.getElementById('section2').style.display = 'none';
    document.getElementById('section3').style.display = 'none';

    document.getElementById('section' + nextSectionNumber).style.display = 'block';
}

function previousSection(prevSectionNumber) {
    document.getElementById('section1').style.display = 'none';
    document.getElementById('section2').style.display = 'none';
    document.getElementById('section3').style.display = 'none';

    document.getElementById('section' + prevSectionNumber).style.display = 'block';
}



