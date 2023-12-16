
    var progressBar = document.getElementById('myProgressBar');
    var progressText = document.getElementById('progressText');
    
   

    function startProgress() {
        var width = 0;

        var interval = setInterval(
            
            function() {
            if (width >= 90) {
                clearInterval(interval);
            } else {
                width++;
                progressBar.style.width = width + '%';
                progressText.textContent = width + '%'; 
            }
        }, 100);
    }
    startProgress();

