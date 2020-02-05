// yh... this is really easy to cheat on

let questions = [
    {
        name: 'What is the general size of a sector?',
        correct: 2,
        options: [
            {
                name: '1024 Kilobytes',
                correct: false
            }, {
                name: '1 Bit',
                correct: false
            }, {
                name: '512 Bytes',
                correct: true
            }, {
                name: '1 Byte',
                correct: false
            }]
    }, {
        name: 'What material is the platter made out of?',
        correct: 3,
        options: [
            {
                name: 'Aluminium',
                correct: false
            }, {
                name: 'Glass',
                correct: false
            }, {
                name: 'Ceramic',
                correct: false
            }, {
                name: 'Either',
                correct: true
            }]
    }, {
        name: 'How is data represented on the disk?',
        correct: 0,
        options: [
            {
                name: 'Binary',
                correct: true
            }, {
                name: 'Hexadecimal',
                correct: false
            }, {
                name: 'Denary',
                correct: false
            }]
    }, {
        name: 'What speed does the platter usually rotate?',
        correct: 3,
        options: [
            {
                name: '720RPM',
                correct: false
            }, {
                name: '5400RPM',
                correct: false
            }, {
                name: '7200RPM',
                correct: false
            }, {
                name: '2 and 3',
                correct: true
            }]
    }, {
        name: 'What is the read/write head moved by?',
        correct: 0,
        options: [
            {
                name: 'Actuator',
                correct: true
            }, {
                name: 'Spindle',
                correct: false
            }, {
                name: 'E-Block',
                correct: false
            }]
    }, {
        name: 'What type of storage device is a HDD?',
        correct: 1,
        options: [
            {
                name: 'Volatile',
                correct: false
            }, {
                name: 'Non volatile',
                correct: true
            }]
    },
];

window.onload = function fill_form() {
    for (let question in questions) {
        if (questions.hasOwnProperty(question)) {
            document.getElementById("form_elements").innerHTML += `<h2>${questions[question]['name']}</h2>`;
            for (let option in questions[question]['options']) {
                if (questions[question]['options'].hasOwnProperty(option)) {
                    document.getElementById("form_elements").innerHTML += `<label id="${question}-${option}"><input type="radio" name="q${question}" value="a${option}">${questions[question]['options'][option]['name']}</label><br>`;
                }
            }
            document.getElementById("form_elements").innerHTML += `<br><br>`;
        }
    }
};

function mark_quiz() {
    let quiz = document.forms["quiz"];
    let mark = 0;
    for (let question in questions) {
         if (questions.hasOwnProperty(question)) {
            let answer = quiz[`q${question}`].value.slice(1);
            let correct = questions[question]["options"][parseInt(answer)]['correct'];
            document.getElementById(`${question}-${questions[question]['correct']}`).innerHTML += ' <p style="color: green; margin: 0 3px; display: inline;">✓</p>';
            if (correct) {
                mark++;
            } else {
                document.getElementById(`${question}-${answer}`).innerHTML += ' <p style="color: red; margin: 0 3px; display: inline;">✗</p>';
            }
         }
     }

    let mark_button = document.getElementById("mark_button");
    mark_button.parentNode.removeChild(mark_button);

    alert(`You got ${mark} out of ${questions.length}!`)
}

