let form = document.querySelector('.feedback-form');

form.addEventListener('submit', e => {
    e.preventDefault();
    let name = document.querySelector('#feedback-form-name');
    let title = document.querySelector('#feedback-form-title');
    let message = document.querySelector('#feedback-form-message');
    let data = {
        name: name.value,
        title: title.value,
        message: message.value
        };

    fetch('/api', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    })
    .then(response => {
        return response.json();
    })
    .then(feedbackData => {

        console.log(feedbackData);

        updateFeedback(feedbackData);
    });
});

document.querySelector('.feedback-messages').addEventListener('click', (e) => {
    console.log(e.target);
    if(e.target.className == 'glyphicon glyphicon-remove'){

        fetch('/api/' + e.target.id, {
            method: 'DELETE'
        })
        .then((response)=>{
            return response.json();
        })
        .then((feedbackData) => {
            updateFeedback(feedbackData);
        })
    }
})

let setUP = () => {
    fetch('/api')
    .then(response => {
        return response.json();
    })
    .then(feedbackData => {
        updateFeedback(feedbackData);
    });
};

let updateFeedback = feedbackData => {
    let output = '';
        feedbackData.forEach((item, key) => {
            output += '     <div class="feedback-item1 item-list media-list">';
            output += '       <div class="feedback-item media">';
            output += '       <div class="media-left"><button class="feedback-delete"><span id="' + key + '" class="glyphicon glyphicon-remove">x</span></button></div>';
            output += '         <div class="feedback-info media-body">';
            output += '           <div class="feedback-head">';
            output += '             <div class="feedback-title">' + item.title + ' <small class="feedback-name label label-info">' + ' – ' + item.name + '</small></div>';
            output += '           </div>';
            output += '           <div class="feedback-message">' + item.message + '</div>';
            output += '         </div>';
            output += '       </div>';
            output += '     </div>';
    });
    let updateCodeBlock = document.querySelector('.feedback-messages');
    updateCodeBlock.innerHTML = output;
};
setUP();