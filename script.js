function progressBar(progressVal,totalPercentageVal = 100) {
    var strokeVal = (3.65 * 100) /  totalPercentageVal;
	var progress = document.querySelector('.progress-circle-prog');
    progress.style.strokeDasharray = progressVal * (strokeVal) + ' 999';
    var progress_value = document.querySelector('#flow_val');
    progress_value.innerHTML=progressVal;
}

function progressBar1(progressVal1,totalPercentageVal = 100) {
    var strokeVal = (3.65 * 100) /  totalPercentageVal;
	var progress1 = document.querySelector('.progress-circle-prog1');
    progress1.style.strokeDasharray = progressVal1 * (strokeVal) + ' 999';
    var progress_value1 = document.querySelector('#ph_val');
    progress_value1.innerHTML=progressVal1;
}

function waterLevel(percentage)
{
    var level = document.querySelector('.hid-box');
    var levelText = document.querySelector('.water_level');
    level.style.top= 100-percentage+"%";
    levelText.innerHTML=percentage+"%";
}
progressBar(50,100);
progressBar1(95,100);
waterLevel(80);
