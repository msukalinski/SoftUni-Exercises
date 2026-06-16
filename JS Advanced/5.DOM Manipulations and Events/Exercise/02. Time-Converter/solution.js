// function attachEventsListeners() {
//     let daysInput = document.getElementById('days');
//     let hoursInput = document.getElementById('hours');
//     let minutesInput = document.getElementById('minutes');
//     let secondsInput = document.getElementById('seconds');

//     document.querySelector('main').addEventListener('click', onConvert);

//     function onConvert(e) {
//         if (e.target.tagName === 'INPUT' && e.target.type === 'button') {
//             let input = e.target.parentElement.querySelector('input[type=text]');

//             let period = convert(Number(input.value), input.id);

//             daysInput.value = period.days;
//             hoursInput.value = period.hours;
//             minutesInput.value = period.minutes;
//             secondsInput.value = period.seconds;
//         }
//     }
//     let ration = {
//         days: 1,
//         hours: 24,
//         minutes: 1440,
//         seconds: 86400,
//     }
//     function convert(value, unit) {
//         let inDays = value / ration[unit];
//         return {
//             days: inDays,
//             hours: inDays * ration.hours,
//             minutes: inDays * ration.minutes,
//             seconds: inDays * ration.seconds,
//         }
//     }
// }

// function attachEventsListeners() {
//     const daysInput = document.getElementById('days');
//     const hoursInput = document.getElementById('hours');
//     const minutesInput = document.getElementById('minutes');
//     const secondsInput = document.getElementById('seconds');

//     const ratios = {
//         days: 1,
//         hours: 24,
//         minutes: 24 * 60,
//         seconds: 24 * 60 * 60,
//     };

//     document.getElementById('daysBtn').addEventListener('click', onConvert);
//     document.getElementById('hoursBtn').addEventListener('click', onConvert);
//     document.getElementById('minutesBtn').addEventListener('click', onConvert);
//     document.getElementById('secondsBtn').addEventListener('click', onConvert);

//     function convert(value, unit){
//         let days = value / ratios[unit];

//         return {
//             days: days,
//             hours: days * ratios.hours,
//             minutes: days * ratios.minutes,
//             seconds: days * ratios.seconds,
//         }
//     }

//     function onConvert(event) {
//         const input = event.target.parentElement.querySelector('input[type="text"]');
//         // console.log(input);
//         let time = convert (Number(input.value), input.id);

//         daysInput.value = time.days;
//         hoursInput.value = time.hours;
//         minutesInput.value = time.minutes;
//         secondsInput.value = time.seconds;
//     }
// }


function attachEventsListeners() {
    const daysInput = document.getElementById('days');
    const hoursInput = document.getElementById('hours');
    const minutesInput = document.getElementById('minutes');
    const secondsInput = document.getElementById('seconds');

    const ratios = {
        days: 1,
        hours: 24,
        minutes: 24 * 60,
        seconds: 24 * 60 * 60,
    };

    document.querySelector('main').addEventListener('click', onClick);

    function onClick(event) {
        const input = event.target.parentElement.querySelector('input[type="text"]');
        const time = convert (input.id, Number(input.value));

        if (event.target.tagName === 'INPUT' && event.target.type === 'button'){
            daysInput.value = time.days;
            hoursInput.value = time.hours;
            minutesInput.value = time.minutes;
            secondsInput.value = time.seconds;
        }
    }

    function convert (type, value){
        const inDays = value / ratios[type];
        return{
            days: inDays,
            hours: inDays * ratios.hours,
            minutes: inDays * ratios.minutes,
            seconds: inDays * ratios.seconds,
        }
    }
}